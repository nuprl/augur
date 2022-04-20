// This file provides an internal mechanism to execute the instrumentation.
// `run.js` should *not* be used from the command line. See `cli.js` in this
// same directory.

const child_process = require('child_process');
const shell = require('shelljs');
const fs = require('fs');
const {executeInstructionsFromFile} = require('../dist/src/utils');
const {parseSpec} = require("../src/utils");
const loadingSpinner = require('loading-spinner');
const colors = require('colors/safe');

/**
 * Fully-promsified exec implementation. This works well with await, and
 * returns *all* the information returned by exec.
 * @param cmd the command to exec
 * @param opts the options to give to exec
 * @returns {Promise}
 */
const promise_exec = function(cmd, opts) {
    return new Promise((resolve, reject) => {
        child_process.exec(cmd, opts, (error, stdout, stderr) => {
            resolve([error, stdout, stderr]);
        })
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

const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/analysis/nodeprofAnalysis.js";
// For debugging purposes, if you want to make sure NodeProf runs on the application.
// const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/emptyAnalysis/emptyAnalysis.js";

// Given a test name:
// - instrument its JS code;
// - compare the generated instructions with its expected instructions
// - execute these instructions
// - compare the result of executing these instructions with the taints
//   specified in the tests' `spec.json`.
// 
// 
// If `benchmark` is true, this test run will be benchmarked using 
// Augur's benchmarking system. Your code will be run with and 
// without instrumentation over 1000 runs. 
// 
// For both the experiment (Augur) and the control (GraalVM), 
// the code is first warmed up over an additional 1000 runs.
exports.run = async function(projectDir, projectName, outputDir, consoleFlag, live, benchmark) {
    // Print out a pretty augur logo
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
    const specPath = projectDir + "/spec.json";
    const spec = parseSpec(specPath);

    // Calculate input and output instruction file paths
    const outputFile = outputDir + "/" + projectName + '_out.js';
    const inputFile = projectDir + "/" + spec.main;
    
    if (!fs.existsSync(ANALYSIS)) {
        throw new Error("analysis not found: " + ANALYSIS);
    }
    
    const DOCKER_OUTPUT_FILENAME = "analysis.output";
    
    // The command to instrument the test's JS code.
    // This command varies a lot depending on how Augur is configured.
    // Augur's default mode is to instrument a project via Docker.
    // However, it can also be configured to run on bare metal 
    // (local NodeProf & GraalVM installation), or in benchmarking mode.
    const command =
        "rm -f " + outputFile + "; " +
        (SHOULD_USE_DOCKER
            // Run project using Docker
            ? TAINT_ANALYSIS_HOME + "/ts/docker-nodeprof/docker-analyze.sh" +
            ` --mxArg "--initParam outputFile:/root/program/${DOCKER_OUTPUT_FILENAME}"` +
            ` --mxArg "--initParam live:${live}"` +
            ` --mxArg "--initParam specPath:/root/program/spec.json"` +
            " --analysisDir " + TAINT_ANALYSIS_HOME + "/ts/" +
            " --analysisMain " + "dist/src/analysis/nodeprofAnalysis.js" +
            " --programDir " + projectDir + "/" +
            " --programMain " + spec.main + ";" +
            "mv " + projectDir + "/" + DOCKER_OUTPUT_FILENAME +
            " " + outputFile
            // Run project using local NodeProf installation
            : "cd " + NODEPROF_HOME + "; "
            + `export OUTPUT_FILE=\"${outputFile}\";`
            + MX_HOME + "/mx jalangi --initParam outputFile:" + outputFile
            + " --initParam specPath:" + (projectDir + "/spec.json")
            + " --initParam live:" + live
            + " --analysis " + ANALYSIS + " "
            + inputFile);

    // console.log("Source file: \t" + inputFile);
    // console.log("Command: \t" + command);

    // Print status message
    process.stdout.write(`${colors.yellow("Instrumenting code")}\n  =>  ${inputFile}...\n`);
    loadingSpinner.start();

    let results;
    if (live) {
        // Online.
        const runningAnalysis = child_process.exec(command, { maxBuffer: 10*10*1024*1024*10 /* 10*10*10 MB buffer for stdout/stderr */ });
        if (consoleFlag) {
            // Register redirection to stdout.
            runningAnalysis.stdout.pipe(process.stdout);
            runningAnalysis.stderr.pipe(process.stderr);
        }
        results = {};
    } else {
        // Offline.
        let [error, stdout, stderr] = await promise_exec(command,
            {maxBuffer: 10*10*1024*1024*10 /* 10*10*10 MB buffer for stdout/stderr */});

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

    return [spec, results];
}
