// This file provides an internal mechanism to execute the instrumentation.
// `run.js` should *not* be used from the command line. See `cli.js` in this
// same directory.

const child_process = require('child_process');
const shell = require('shelljs');
const fs = require('fs');
const {executeInstructionsFromFile} = require('../dist/src/utils');

/**
 * Fully-promsified exec implementation. This works well with await, and
 * returns *all* the information returned by exec.
 * @param cmd the command to exec
 * @param opts the options to give to exec
 * @returns {Promise}
 */
const exec = function(cmd, opts) {
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
    console.error("You did not set the 'NODEPROF_HOME', 'MX_HOME', and" +
        " 'JAVA_HOME' environment variables. Docker will be used instead.");
}

// Calculate paths
// const INPUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/input/";
// const ACTUAL_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-actual/";
// const EXPECTED_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-expected/";
const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/analysis/nodeprofAnalysis.js";

function getFileContents(fileName){
    let result = fs.readFileSync(fileName).toString().split('\n'); // hack: use .split('\n') to ensure that the differences viewer shows line breaks
    return result.map((s)=>s.trim());
}

// Given a test name:
// - instrument its JS code;
// - compare the generated instructions with its expected instructions
// - execute these instructions
// - compare the result of executing these instructions with the taints
//   specified in the tests' `spec.json`.
exports.run = async function(projectDir, projectName, outputDir, consoleFlag) {
    // Parse the spec to know the program to instrument, sources, sinks, and
    // expected taints
    const spec = JSON.parse(fs.readFileSync(projectDir + "/spec.json").toString());

    // Calculate input and output instruction file paths
    const outputFile = outputDir + "/" + projectName + '_out.js';
    const inputFile = projectDir + "/" + spec.main;

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
            + " --analysis " + ANALYSIS + " "
            //+ inputFile);
             + '/mnt/c/programming/augur/ts/runner/nodeprofTester.js');

    let [error, stdout, stderr] = await exec(command,
        {maxBuffer: 1024*1024*10 /* 10 MB buffer for stdout/stderr */});

    console.error("Source file: \t" + inputFile);

    if (error) {
        console.error(`${error}`);
        return;
    }

    if (consoleFlag) {
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
    }

    let results = executeInstructionsFromFile(outputFile, spec);

    return [spec, results];

}
