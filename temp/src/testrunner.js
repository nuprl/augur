const exec = require('child_process').exec;
const shell = require('shelljs');
const assert = require('assert');
const fs = require('fs');

const TAINT_ANALYSIS_HOME = shell.env['TAINT_ANALYSIS_HOME'];
const NODEPROF_HOME = shell.env['NODEPROF_HOME'];

const INPUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/input/";
const ACTUAL_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-actual/";
const EXPECTED_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-expected/";
const ANALYSIS = TAINT_ANALYSIS_HOME + "/src/dynCallGraph.js";

function getFileContents(fileName){
  let result = fs.readFileSync(fileName).toString().split('\n'); // hack: use .split('\n') to ensure that the differences viewer shows line breaks
  return result.map((s)=>s.trim());
}

function compareOutput(testName, actualOutputDir, expectedOutputDir){
  const actualOutput = getFileContents(actualOutputDir + '/' + testName + '_out.js');
  const expectedOutput = getFileContents(expectedOutputDir + '/' + testName + '_out.js');
  assert.deepEqual(actualOutput, expectedOutput);
};

function runTest(fileName){
  it(fileName, function(done) {
    // fileName = fileName.substring(0, fileName.length - 3);
    console.log("running test: " + fileName);
    const outputFile = ACTUAL_OUT_DIR + fileName + '_out.js';
    const command = "cd " + NODEPROF_HOME + ";" +
      "mx jalangi --initParam outputFile:" + outputFile + " --analysis " + ANALYSIS + " " + INPUT_DIR + fileName;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${stdout}`);
      console.error(`${stderr}`);
    });
    compareOutput(fileName, ACTUAL_OUT_DIR, EXPECTED_OUT_DIR);
    done();
  });
}

describe('unit-tests', function() {

  // note: need to keep the "describe" here so that the WebStorm IDE will let us re-run individual tests.
  describe('callMeMaybe', () => runTest('callMeMaybe'));
  describe('foo', () => runTest('foo'));

});