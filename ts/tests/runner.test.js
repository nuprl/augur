const { exec } = require('child_process');
const shell = require('shelljs');
const fs = require('fs');

const TAINT_ANALYSIS_HOME = shell.env['TAINT_ANALYSIS_HOME'];
const NODEPROF_HOME = shell.env['NODEPROF_HOME'];
// If no NODEPROF_HOME was specified, Docker will be used instead.
const DOCKER = NODEPROF_HOME === undefined;

if (TAINT_ANALYSIS_HOME === undefined){
    throw new Error("TAINT_ANALYSIS_HOME not set");
}

const INPUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/input/";
const ACTUAL_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-actual/";
const EXPECTED_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-expected/";
const ANALYSIS = TAINT_ANALYSIS_HOME + "/ts/dist/src/analysis/index.js";

function getFileContents(fileName){
    let result = fs.readFileSync(fileName).toString().split('\n'); // hack: use .split('\n') to ensure that the differences viewer shows line breaks
    return result.map((s)=>s.trim());
}

function compareOutput(testName, actualOutputDir, expectedOutputDir){
    const actualOutput = getFileContents(actualOutputDir + testName + '_out.js');
    const expectedOutput = getFileContents(expectedOutputDir + testName + '_out.js');
    expect(actualOutput).toEqual(expectedOutput);
}

function runTest(testName, done){
    const outputFile = ACTUAL_OUT_DIR + testName + '_out.js';
    const inputFile = INPUT_DIR + testName + "/test.js";
    if (!fs.existsSync(ANALYSIS)){
        throw new Error("analysis not found: " + ANALYSIS);
    }

    const command =
        "rm -f " + outputFile + "; " +
        (DOCKER
            // Run test using Docker
            ? TAINT_ANALYSIS_HOME + "/ts/docker-run.sh --inputFile " + inputFile + " --outputFile " + outputFile
            // Run test using local NodeProf installation
            : "cd " + NODEPROF_HOME + "; "
            + "mx jalangi --initParam outputFile:" + outputFile
            + " --analysis " + ANALYSIS + " "
            + INPUT_DIR + testName + "/test.js");

    exec(command, function(error, stdout, stderr){
        if (error) {
            console.error(`${error}`);
            return;
        }
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);

        compareOutput(testName, ACTUAL_OUT_DIR, EXPECTED_OUT_DIR);
        done();
    });

}

test('callMeMaybe', (done) => runTest('callMeMaybe', done));
test('foo', (done) => runTest('foo', done));
test('bar', (done) => runTest('bar', done));

// existing tests that have been moved over
test('basic-assignment', (done) => runTest('basic-assignment', done));
test('basic-condition', (done) => runTest('basic-condition', done));
test('basic-function', (done) => runTest('basic-function', done));
test('basic-function-arg', (done) => runTest('basic-function-arg', done));
test('basic-function-arg-opt', (done) => runTest('basic-function-arg-opt', done));
test('basic-function-args', (done) => runTest('basic-function-args', done));
test('basic-function-args-more', (done) => runTest('basic-function-args-more', done));
test('basic-ternary', (done) => runTest('basic-ternary', done));
test('for-loop', (done) => runTest('for-loop', done));
test('for-loop-assign', (done) => runTest('for-loop-assign', done));
test('init-array', (done) => runTest('init-array', done));
test('init-obj', (done) => runTest('init-obj', done));
test('set-array', (done) => runTest('set-array', done));
test('set-obj', (done) => runTest('set-obj', done));