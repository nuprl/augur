const { exec } = require('child_process');
const shell = require('shelljs');
const fs = require('fs');
const {executeInstructionsFromFile} = require('../dist/src/abstractMachine/JSMachine');

// The Jest test file.

// If the user does not explicitly specify TAINT_ANALYSIS_HOME, assume it to
// be "..", because the working directory *should* be the "ts" directory.
const USER_SUPPLIED_TAINT_ANALYSIS_HOME = shell.env['TAINT_ANALYSIS_HOME'];
const TAINT_ANALYSIS_HOME =
    (USER_SUPPLIED_TAINT_ANALYSIS_HOME === undefined
        ? process.cwd() + "/.."
        : USER_SUPPLIED_TAINT_ANALYSIS_HOME);

// Should we be using Docker or a local NodeProf installation?
const NODEPROF_HOME = shell.env['NODEPROF_HOME'];
const MX_HOME = shell.env['MX_HOME'];
// If no NODEPROF_HOME was specified, Docker will be used instead.
const SHOULD_USE_DOCKER = (NODEPROF_HOME === undefined) || (MX_HOME === undefined);
// Tell the user that Docker is being used because they did not specify
// the necessary environment variables.
if (SHOULD_USE_DOCKER) {
    console.error("You did not set the 'NODEPROF_HOME' and 'MX_HOME' environment variables. Docker will be used instead.");
}

// Calculate paths
const INPUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/input/";
const ACTUAL_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-actual/";
const EXPECTED_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-expected/";
const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/analysis/nodeprofAnalysis.js";

function getFileContents(fileName){
    let result = fs.readFileSync(fileName).toString().split('\n'); // hack: use .split('\n') to ensure that the differences viewer shows line breaks
    return result.map((s)=>s.trim());
}

// Make Jest compare the actual and expected generated abstract machine
// instructions given a test name
function compareOutput(testName, actualOutputDir, expectedOutputDir){
    const actualOutputPath = actualOutputDir + testName + '_out.js';
    const expectedOutputPath = expectedOutputDir + testName + '_out.js';

    console.error("Actual output: \t" + actualOutputPath);
    console.error("Expected output: \t" + expectedOutputPath);

    const actualOutput = getFileContents(actualOutputPath);
    const expectedOutput = getFileContents(expectedOutputPath);

    expect(actualOutput).toEqual(expectedOutput);
}

// Given a test name:
// - instrument its JS code;
// - compare the generated instructions with its expected instructions
// - execute these instructions
// - compare the result of executing these instructions with the taints
//   specified in the tests' `spec.json`.
function runTest(testName, done){
    // Calculate input and output instruction file paths
    const outputFile = ACTUAL_OUT_DIR + testName + '_out.js';
    const inputFile = INPUT_DIR + testName + "/test.js";
    // Parse the spec to know the sources, sinks, and expected taints
    const spec = JSON.parse(fs.readFileSync(INPUT_DIR + testName + "/spec.json").toString());

    if (!fs.existsSync(ANALYSIS)){
        throw new Error("analysis not found: " + ANALYSIS);
    }

    // The command to instrument the test's JS code
    const command =
        "rm -f " + outputFile + "; " +
        (SHOULD_USE_DOCKER
            // Run test using Docker
            ? TAINT_ANALYSIS_HOME + "/ts/docker-run.sh --inputFile " + inputFile + " --outputFile " + outputFile
            // Run test using local NodeProf installation
            : "cd " + NODEPROF_HOME + "; "
            + MX_HOME + "/mx jalangi --initParam outputFile:" + outputFile
            + " --analysis " + ANALYSIS + " "
            + INPUT_DIR + testName + "/test.js");

    exec(command, function(error, stdout, stderr){
        console.error("Source file: \t" + inputFile);

        if (error) {
            console.error(`${error}`);
            return;
        }
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);

        // Compare compiled instructions
        compareOutput(testName, ACTUAL_OUT_DIR, EXPECTED_OUT_DIR);

        // Compare the result of executing the compiled instructions
        expect(executeInstructionsFromFile(outputFile, spec)).toEqual(spec.expectedTaints);

        done();
    });

}

// Register all tests with Jest

test('chained-assignment-clean', (done) => runTest('chained-assignment-clean', done));
test('chained-assignment-tainted', (done) => runTest('chained-assignment-tainted', done));
test('callMeMaybe', (done) => runTest('callMeMaybe', done));
test('foo', (done) => runTest('foo', done));
test('bar', (done) => runTest('bar', done));

// existing tests that have been moved over
test('basic-assignment-clean', (done) => runTest('basic-assignment-clean', done));
test('basic-condition-clean', (done) => runTest('basic-condition-clean', done));
test('basic-function-clean', (done) => runTest('basic-function-clean', done));
test('basic-function-arg-clean', (done) => runTest('basic-function-arg-clean', done));
test('basic-function-arg-opt-clean', (done) => runTest('basic-function-arg-opt-clean', done));
test('basic-function-args-clean', (done) => runTest('basic-function-args-clean', done));
test('basic-function-args-more-clean', (done) => runTest('basic-function-args-more-clean', done));
test('basic-ternary-clean', (done) => runTest('basic-ternary-clean', done));
test('for-loop-clean', (done) => runTest('for-loop-clean', done));
test('for-loop-assign-clean', (done) => runTest('for-loop-assign-clean', done));
test('init-array-clean', (done) => runTest('init-array-clean', done));
test('init-obj-clean', (done) => runTest('init-obj-clean', done));
test('set-array-clean', (done) => runTest('set-array-clean', done));
test('set-obj-clean', (done) => runTest('set-obj-clean', done));
test('basic-assignment-tainted', (done) => runTest('basic-assignment-tainted', done));
test('basic-condition-tainted', (done) => runTest('basic-condition-tainted', done));
test('basic-function-tainted', (done) => runTest('basic-function-tainted', done));
test('basic-function-arg-tainted', (done) => runTest('basic-function-arg-tainted', done));
test('basic-function-arg-opt-tainted', (done) => runTest('basic-function-arg-opt-tainted', done));
test('basic-function-args-tainted', (done) => runTest('basic-function-args-tainted', done));
test('basic-function-args-more-tainted', (done) => runTest('basic-function-args-more-tainted', done));
test('basic-ternary-tainted', (done) => runTest('basic-ternary-tainted', done));
test('for-loop-tainted', (done) => runTest('for-loop-tainted', done));
test('for-loop-assign-tainted', (done) => runTest('for-loop-assign-tainted', done));
test('init-array-tainted', (done) => runTest('init-array-tainted', done));
test('init-obj-tainted', (done) => runTest('init-obj-tainted', done));
test('set-array-tainted', (done) => runTest('set-array-tainted', done));
test('set-obj-tainted', (done) => runTest('set-obj-tainted', done));
test('async-await-clean', (done) => runTest('async-await-clean', done));
test('async-then-clean', (done) => runTest('async-then-clean', done));
test('for-in-clean', (done) => runTest('for-in-clean', done));
test('init-destructure-obj-clean', (done) => runTest('init-destructure-obj-clean', done));
test('promise-await-clean', (done) => runTest('promise-await-clean', done));
test('promise-then-clean', (done) => runTest('promise-then-clean', done));
test('async-await-tainted', (done) => runTest('async-await-tainted', done));
test('async-then-tainted', (done) => runTest('async-then-tainted', done));
test('for-in-tainted', (done) => runTest('for-in-tainted', done));
test('init-destructure-obj-tainted', (done) => runTest('init-destructure-obj-tainted', done));
test('promise-await-tainted', (done) => runTest('promise-await-tainted', done));
test('promise-then-tainted', (done) => runTest('promise-then-tainted', done));

