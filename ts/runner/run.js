// This file provides an internal mechanism to execute the instrumentation.
// `run.js` should *not* be used from the command line. See `cli.js` in this
// same directory.

const child_process = require('child_process');
const shell = require('shelljs');
const fs = require('fs');
const {executeInstructionsFromFile} = require('../dist/src/utils');
const {parseSpec} = require("../dist/src/utils");
const loadingSpinner = require('loading-spinner');
const colors = require('colors/safe');

/**
 * Fully-promsified exec implementation. This works well with await, and
 * returns *all* the information returned by exec.
 * @param cmd the command to exec
 * @param livePipe should we pipe the stdout and stderr while its running?
 * @param opts the options to give to exec
 * @returns {Promise}
 */
const promise_exec = function(cmd, livePipe, opts) {
    return new Promise((resolve, reject) => {
        let child = child_process.exec(cmd, opts, (error, stdout, stderr) => {
            resolve([error, stdout, stderr]);
        })
        if (livePipe) {
            // Register redirection to stdout.
            child.stdout.pipe(process.stdout);
            child.stderr.pipe(process.stderr);
        }
    })
};

// `TAINT_ANALYSIS_HOME` is the root of this repo.
// If the user does not explicitly specify TAINT_ANALYSIS_HOME, assume it to
// be "{this script's dir}/../..", because this file should be two
// directories above the root.
const USER_SUPPLIED_TAINT_ANALYSIS_HOME = shell.env['TAINT_ANALYSIS_HOME'];
const TAINT_ANALYSIS_HOME =
    (USER_SUPPLIED_TAINT_ANALYSIS_HOME === undefined
        ? __dirname + "/../.."
        : USER_SUPPLIED_TAINT_ANALYSIS_HOME);

// Should we be using Docker or a local NodeProf installation?
const NODEPROF_HOME = shell.env['NODEPROF_HOME'];
const MX_HOME = shell.env['MX_HOME'];
const JAVA_HOME = shell.env['JAVA_HOME'];

// If no NODEPROF_HOME was specified, Docker will be used instead.
const SHOULD_USE_DOCKER = (NODEPROF_HOME === undefined)
    || (MX_HOME === undefined)
    || (JAVA_HOME === undefined);

// Tell the user that Docker is being used because they did not specify
// the necessary environment variables.
if (SHOULD_USE_DOCKER) {
    process.stdout.write(colors.gray("You did not set the 'NODEPROF_HOME', 'MX_HOME', and" +
        " 'JAVA_HOME' environment variables. Docker will be used instead.\n"));
} else {
    process.stdout.write(colors.grey(`Using your native NodeProf install from: ${NODEPROF_HOME}\n`));
}

const ANALYSIS = "./dist/src/analysis/nodeprofAnalysis.js";
const SKIP_ANALYSIS = "./dist/src/analysis/skipAnalysis.js";
const DEFAULT_SPEC_PATH = `${TAINT_ANALYSIS_HOME}/ts/src/defaultSpec.json`;

// For debugging purposes, if you want to make sure NodeProf runs on the application.
// const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/emptyAnalysis/emptyAnalysis.js";

// Given a test name:
// - instrument its JS code;
// - compare the generated instructions with its expected instructions
// - execute these instructions
// - compare the result of executing these instructions with the taints
//   specified in the tests' `spec.json`.
/**
 * Run the given project in Augur.
 * @param projectDir the root directory of the project. The project cannot use any files above this dir, unless they're
 *                   globally installed node files.
 * @param projectName human readable name of the project, so Augur can name its output file accordingly.
 * @param outputDir the directory to store its output files.
 * @param consoleFlag should Augur pipe the instrumented program's stdout to your terminal?
 * @param live should Augur run the analysis concurrently with the program?
 * @param main OPTIONAL. If you don't have your own spec file in this project, Augur can use a default spec file.
 *             However, in that case Augur still needs to know which JS file to execute.
 *             Specify that here with a RELATIVE PATH from the projectDir.
 * @param programArgs args for the program itself
 * @param skipAnalysis the code will be run without Augur.
 *                     This is for benchmarking purposes
 * @param benchmark the code will be accurately timed
 * @returns {Promise<[RunSpecification, Array<Taint flows>]>}
 */
exports.run = async function(projectDir, projectName, outputDir, consoleFlag, live, main, programArgs, skipAnalysis, benchmark) {
    let usingDefaultSpec = false;
    // Print out a pretty augur logo

    try {
        process.stdout.write("\n" + colors.red.bgBlack(`
                                                         
                                                         
  #                                                      
   #(                                                    
    ###                                                  
    ###%%     //                                         
     ##%%%%%  *//*/                                      
      (##%%&&%(((((@&&                                   
      ###(&&%%####%%                                     
         %%###%%#%%         _                            
           %%%%%%          / \\  _   _  __ _ _   _ _ __   
           &%%%&.         / _ \\| | | |/ _\` | | | | '__|  
          #&&%%#%#%      / ___ \\ |_| | (_| | |_| | |     
           %&&%. %% ,   /_/   \\_\\__,_|\\__, |\\__,_|_|     
                                      |___/              
                                                         
                                                         
          Analyzing information flows since 2019         
                                                         
                                                         
`) + "\n\n");
        loadingSpinner.setSequence(
            [
                "( ●    )",
                "(  ●   )",
                "(   ●  )",
                "(    ● )",
                "(     ●)",
                "(    ● )",
                "(   ●  )",
                "(  ●   )",
                "( ●    )",
                "(●     )"
            ]
        );

        // Parse the spec to know the program to instrument, sources, sinks, and
        // expected taints
        let spec;
        let specPath = projectDir + "/spec.json";
        try {
            spec = parseSpec(specPath);
        } catch (_) {
            // Spec file doesn't exist. Use the default spec file.
            usingDefaultSpec = true;
            spec = parseSpec(DEFAULT_SPEC_PATH);
            if (!main) {
                console.error("There's no spec file in your project directory, but you also didn't specify a main file to use with the default spec!");
                throw "no main file for default spec";
            }

            // All good, just patch in the given main file to the default spec
            spec.main = main;

            // Now we write this patched spec file to the location it's
            // supposed to be in: projectDir/spec.json
            // This will help other parts of Augur which assume there is
            // always a spec file in the project root
            fs.writeFileSync(projectDir + "/" + "spec.json", JSON.stringify(spec));
        }

        // Calculate input and output instruction file paths
        const outputFile = outputDir + "/" + projectName + '_out.js';
        const inputFile = projectDir + "/" + spec.main;

        // Skip analysis if requested
        const analysis = skipAnalysis? SKIP_ANALYSIS : ANALYSIS;

        console.error(`Analysis chosen: ${analysis}`)

        if (!fs.existsSync(ANALYSIS)) {
            throw new Error("analysis not found: " + ANALYSIS);
        }

        const DOCKER_OUTPUT_FILENAME = "analysis.output";

        // The command to instrument the test's JS code
        const command =
            "rm -f " + outputFile + "; " +
            (SHOULD_USE_DOCKER
                // Run project using Docker
                ? TAINT_ANALYSIS_HOME + "/ts/docker-nodeprof/docker-analyze.sh" +
                ` --mxArg "--initParam outputFile:/root/program/${DOCKER_OUTPUT_FILENAME}"` +
                ` --mxArg "--initParam live:${live}"` +
                ` --mxArg "--initParam specPath:/root/program/spec.json"` +
                " --analysisDir " + TAINT_ANALYSIS_HOME + "/ts/" +
                " --analysisMain " + analysis +
                " --programDir " + projectDir + "/" +
                ` --programMain ${benchmark? "../analysis/src/benchmark/benchmarkProject.js" : spec.main} ` +
                ` -- ${benchmark? "../program/" + spec.main + " " + projectName : ""} ${programArgs}` + ";" +
                (!benchmark? "mv " + projectDir + "/" + DOCKER_OUTPUT_FILENAME +
                             " " + outputFile
                             : "") // move output file if we're not benchmarking
                // Run project using local NodeProf installation
                : "cd " + NODEPROF_HOME + "; "
                + `export OUTPUT_FILE=\"${outputFile}\";`
                + MX_HOME + "/mx jalangi --initParam outputFile:" + outputFile
                + " --initParam specPath:" + (projectDir + "/spec.json")
                + " --initParam live:" + live
                + " --analysis " + TAINT_ANALYSIS_HOME + "/ts/" + analysis + " "
                + inputFile);

        // console.log("Source file: \t" + inputFile);
        console.log("Command: \t" + command);

        // Print status message
        process.stdout.write(`${colors.yellow("Instrumenting code")}\n  =>  ${inputFile}...\n`);
        loadingSpinner.start();

        let results;
        if (live) {
            // Online.
            const [error, stdout, stderr] = await promise_exec(command, consoleFlag, {maxBuffer: 10 * 10 * 1024 * 1024 * 10 /* 10*10*10 MB buffer for stdout/stderr */});
            results = {};
            loadingSpinner.stop();
            return [spec, results];
        } else {
            // Offline.
            let [error, stdout, stderr] = await promise_exec(command, false,
                {maxBuffer: 10 * 10 * 1024 * 1024 * 10 /* 10*10*10 MB buffer for stdout/stderr */});

            loadingSpinner.stop();
            process.stdout.write(colors.green(`done!\n\n`));

            if (consoleFlag) {
                process.stdout.write(`${colors.yellow("stdout")} from program:\n`)
                process.stdout.write(stdout + "\n");
                process.stdout.write(`${colors.red("stderr")} from program:\n`)
                process.stdout.write(stderr + "\n");

                if (error) {
                    console.error(error);
                }
            }

            if (!benchmark) {
                process.stdout.write(`${colors.yellow("Inspecting taints with the specification:")}\n  => ${specPath}...\n`);
                loadingSpinner.start();

                results = executeInstructionsFromFile(outputFile, spec);
                loadingSpinner.stop();
                process.stdout.write(colors.green(`done!\n\n`));

                if (results.length === 0) {
                    process.stdout.write(colors.green("No flows found.\n"));
                } else {
                    process.stdout.write(`${colors.red("Flows found into the following sinks:")}
${JSON.stringify(results, (key, value) =>
                        value instanceof Set ? [...value] : value, 4)}\n`);
                }
            }
        }

        return [spec, results];
    } finally {
        // Here, if the user was using the default spec file, we need to delete the auto-generated one
        // before we crash.

        if (usingDefaultSpec) {
            try {
                fs.unlinkSync(projectDir + "/spec.json")
            } catch(e) {}
        }
    }
}