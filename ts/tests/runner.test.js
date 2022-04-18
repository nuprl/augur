const shell = require('shelljs');
const fs = require('fs');
const {run} = require('../runner/run')

// The Jest test file.

// Calculate paths

// If the user does not explicitly specify TAINT_ANALYSIS_HOME, assume it to
// be "..", because the working directory *should* be the "ts" directory.
const USER_SUPPLIED_TAINT_ANALYSIS_HOME = shell.env['TAINT_ANALYSIS_HOME'];
const TAINT_ANALYSIS_HOME =
    (USER_SUPPLIED_TAINT_ANALYSIS_HOME === undefined
        ? process.cwd() + "/.."
        : USER_SUPPLIED_TAINT_ANALYSIS_HOME);
const INPUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/input";
const ACTUAL_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-actual";
const EXPECTED_OUT_DIR = TAINT_ANALYSIS_HOME + "/tests-unit/output-expected";

function getFileContents(fileName){
    let result = fs.readFileSync(fileName).toString().split('\n'); // hack: use .split('\n') to ensure that the differences viewer shows line breaks
    return result.map((s)=>s.trim());
}

// Make Jest compare the actual and expected generated abstract machine
// instructions given a test name
function compareOutput(testName, actualOutputDir, expectedOutputDir){
    const actualOutputPath = actualOutputDir + "/" + testName + '_out.js';
    const expectedOutputPath = expectedOutputDir + "/" + testName + '_out.js';

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
/**
 * Given a test name:
 * - instrument its JS code;
 * - compare the generated instructions with its expected instructions
 * - execute these instructions
 * - compare the result of executing these instructions with the taints
 *   specified in the tests' `spec.json`.
 *
 * @param testName the name of the test, in the test-unit folder
 * @param done the jest callback for completing the test
 * @param defaultSpec should we use the default spec? leave empty for no
 */
function runTest(testName, done, defaultSpec) {
    let results = run(INPUT_DIR + "/" + testName,
        testName,
        ACTUAL_OUT_DIR,
        true,
        false,
        "test.js" /* if no spec exists, assume the test is test.js */)
        .then(([spec, results]) => {
            // If we're using the default spec, just expect there to be AT LEAST 1 FLOW.
            // Otherwise, check the expected flows from the actual spec.
            if (defaultSpec) {
                expect(results.length).toBeGreaterThanOrEqual(1);
            } else {
                expect(results).toEqual(spec.expectedFlows);
            }

            done();
        });
}

// Register all tests with Jest


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

// TODO: object literals with number keys are currently not supported.
// test('init-obj-number-key-tainted', (done) => runTest('init-obj-number-key-tainted', done));
// test('init-obj-number-key-clean', (done) => runTest('init-obj-number-key-clean', done));

test('set-array-tainted', (done) => runTest('set-array-tainted', done));
test('set-obj-tainted', (done) => runTest('set-obj-tainted', done));
test('async-await-clean', (done) => runTest('async-await-clean', done));
test('async-then-clean', (done) => runTest('async-then-clean', done));
test('for-in-clean', (done) => runTest('for-in-clean', done));
test('for-in-tainted', (done) => runTest('for-in-tainted', done));
test('init-destructure-obj-clean', (done) => runTest('init-destructure-obj-clean', done));

test('promise-await-clean', (done) => runTest('promise-await-clean', done));
test('promise-await-tainted', (done) => runTest('promise-await-tainted',
done));
test('promise-then-clean', (done) => runTest('promise-then-clean', done));
test('promise-then-tainted', (done) => runTest('promise-then-tainted',
done));
test('async-await-tainted', (done) => runTest('async-await-tainted', done));
test('async-then-tainted', (done) => runTest('async-then-tainted', done));
test('async-catch-tainted', (done) => runTest('async-catch-tainted', done));
test('async-catch-clean', (done) => runTest('async-catch-clean', done));
test('async-catch-clean-2', (done) => runTest('async-catch-clean-2', done));
test('init-destructure-obj-tainted', (done) => runTest('init-destructure-obj-tainted', done));

// New tests

// TODO: tracking taint on property names not yet supported
// test('computed-property-name-tainted', (done) =>
// runTest('computed-property-name-tainted', done));
// test('computed-property-name-clean', (done) =>
// runTest('computed-property-name-clean', done));

test('function-declaration-tainted', (done) => runTest('function-declaration-tainted', done));
test('function-declaration-clean', (done) => runTest('function-declaration-clean', done));
test('implicit-this-declaration-clean', (done) => runTest('implicit-this-declaration-clean', done));
test('function-literal-clean', (done) => runTest('function-literal-clean', done));
test('unary-tainted', (done) => runTest('unary-tainted', done));
test('unary-clean', (done) => runTest('unary-clean', done));
test('literal-clean', (done) => runTest('literal-clean', done));
test('string-concat-tainted', (done) => runTest('string-concat-tainted', done));
test('string-concat-clean', (done) => runTest('string-concat-clean', done));
test('binary-op-tainted', (done) => runTest('binary-op-tainted', done));
test('binary-op-clean', (done) => runTest('binary-op-clean', done));
test('method-call-clean', (done) => runTest('method-call-clean', done));
test('method-call-tainted', (done) => runTest('method-call-tainted', done));
test('stack-alignment-clean', (done) => runTest('stack-alignment-clean', done));
test('stack-alignment-tainted', (done) => runTest('stack-alignment-tainted', done));
test('chained-assignment-clean', (done) => runTest('chained-assignment-clean', done));
test('chained-assignment-tainted', (done) => runTest('chained-assignment-tainted', done));
test('callMeMaybe', (done) => runTest('callMeMaybe', done));
test('foo', (done) => runTest('foo', done));
test('bar', (done) => runTest('bar', done));
test('native-array-reduce-clean', (done) => runTest('native-array-reduce-clean', done));

// TODO: Array.prototype.reduce model/polyfill needed
// test('native-array-reduce-tainted', (done) =>
// runTest('native-array-reduce-tainted', done));

test('benchmark-office-converter', (done) => runTest('benchmark-office-converter', done));

// broken benchmark
// test('benchmark-dns-sync-exec', (done) =>
// runTest('benchmark-dns-sync-exec', done));
test('benchmark-gm-attack', (done) => runTest('benchmark-gm-attack', done));
test('benchmark-osenv', (done) => runTest('benchmark-osenv', done));
test('native-exec-clean', (done) => runTest('native-exec-clean', done));

// broken benchmark
// test('native-exec-tainted', (done) => runTest('native-exec-tainted', done));
test('precision-variable-function-clean', (done) => runTest('precision-variable-function-clean', done));

// broken benchmark
// test('precision-variable-function-tainted', (done) =>
// runTest('precision-variable-function-tainted', done));

test('for-loop-update-clean', (done) => runTest('for-loop-update-clean', done));
test('for-loop-update-tainted', (done) => runTest('for-loop-update-tainted', done));
test('benchmark-chook-growl-reporter-exec', (done) => runTest('benchmark-chook-growl-reporter-exec', done));
test('benchmark-cocos-utils', (done) => runTest('benchmark-cocos-utils', done));
test('benchmark-exec-cmd', (done) => runTest('benchmark-exec-cmd', done));
test('benchmark-fish-exec', (done) => runTest('benchmark-fish-exec', done));
test('benchmark-git2json-exec', (done) => runTest('benchmark-git2json-exec', done));
test('benchmark-growl-exec', (done) => runTest('benchmark-growl-exec', done));
test('benchmark-libnotify-exec', (done) => runTest('benchmark-libnotify-exec', done));
test('benchmark-mixin-pro-eval', (done) => runTest('benchmark-mixin-pro-eval', done));
test('benchmark-m-log-eval', (done) => runTest('benchmark-m-log-eval', done));

// broken benchmark
// test('benchmark-mobile-icon-resizer', (done) =>
// runTest('benchmark-mobile-icon-resizer', done));

test('benchmark-modulify-eval', (done) => runTest('benchmark-modulify-eval', done));
test('benchmark-mol-proto-eval', (done) => runTest('benchmark-mol-proto-eval', done));
test('benchmark-mongoosemask-eval', (done) => runTest('benchmark-mongoosemask-eval', done));

// broken benchmark
// test('benchmark-mongoosify-eval', (done) =>
// runTest('benchmark-mongoosify-eval', done));

test('benchmark-mongo-parse-eval', (done) => runTest('benchmark-mongo-parse-eval', done));
test('benchmark-node-os-utils', (done) => runTest('benchmark-node-os-utils', done));
test('benchmark-node-wos', (done) => runTest('benchmark-node-wos', done));

// broken benchmarks
// test('benchmark-npm-programmatic', (done) =>
// runTest('benchmark-npm-programmatic', done));
// test('benchmark-os-toolbox', (done) => runTest('benchmark-os-toolbox',
// done));

test('benchmark-os-uptime', (done) => runTest('benchmark-os-uptime', done));

// broken benchmarks
// test('benchmark-paper-example', (done) =>
// runTest('benchmark-paper-example', done));
// test('benchmark-pidusage-exec', (done) =>
// runTest('benchmark-pidusage-exec', done));

test('benchmark-pomelo-monitor', (done) => runTest('benchmark-pomelo-monitor', done));

// broken benchmarks
// test('benchmark-printer-exec', (done) => runTest('benchmark-printer-exec',
// done));
// test('benchmark-sequelize-sql', (done) =>
// runTest('benchmark-sequelize-sql', done));

test('benchmark-systeminformation', (done) => runTest('benchmark-systeminformation', done));
test('benchmark-system-locale', (done) => runTest('benchmark-system-locale', done));
test('benchmark-taint-string', (done) => runTest('benchmark-taint-string', done));
test('benchmark-write-file', (done) => runTest('benchmark-write-file', done));
test('string-hygiene-tainted', (done) => runTest('string-hygiene-tainted', done));
test('for-loop-condition-clean', (done) => runTest('for-loop-condition-clean', done));
test('for-loop-condition-tainted', (done) => runTest('for-loop-condition-tainted', done));

// tracking taint using implicit flow is not supported
// test('implicit-flow-clean', (done) => runTest('implicit-flow-clean', done));
// test('implicit-flow-tainted', (done) => runTest('implicit-flow-tainted',
// done));

test('object-alias-clean', (done) => runTest('object-alias-clean', done));
test('object-alias-tainted', (done) => runTest('object-alias-tainted', done));
test('general-clean', (done) => runTest('general-clean', done));
test('general-tainted', (done) => runTest('general-tainted', done));
// TODO: for of loops not yet supported
// test('for-of-tainted', (done) => runTest('for-of-tainted', done));

test('for-in-clean', (done) => runTest('for-in-clean', done));
test('for-in-tainted', (done) => runTest('for-in-tainted', done));
test('function-reassignment-clean', (done) => runTest('function-reassignment-clean', done));
test('function-reassignment-tainted', (done) => runTest('function-reassignment-tainted', done));
test('chained-object-properties-clean', (done) => runTest('chained-object-properties-clean', done));
test('chained-object-properties-tainted', (done) => runTest('chained-object-properties-tainted', done));
test('implicit-return-clean', (done) => runTest('implicit-return-clean', done));
test('implicit-return-tainted', (done) => runTest('implicit-return-tainted', done));
test('no-return-clean', (done) => runTest('no-return-clean', done));
test('dynamic-memory-usage-clean', (done) => runTest('dynamic-memory-usage-clean', done));
test('dynamic-memory-usage-tainted', (done) => runTest('dynamic-memory-usage-tainted', done));
test('scoping-clean', (done) => runTest('scoping-clean', done));

// broken test
// test('scoping-tainted', (done) => runTest('scoping-tainted', done));

test('linked-list-clean', (done) => runTest('linked-list-clean', done));
test('linked-list-tainted', (done) => runTest('linked-list-tainted', done));
test('native-function-call-clean', (done) => runTest('native-function-call-clean', done));
test('native-function-call-tainted', (done) => runTest('native-function-call-tainted', done));
test('native-function-call-2-clean', (done) => runTest('native-function-call-2-clean', done));
test('native-function-call-2-tainted', (done) => runTest('native-function-call-2-tainted', done));
test('native-function-call-3-clean', (done) => runTest('native-function-call-3-clean', done));
test('native-function-call-3-tainted', (done) => runTest('native-function-call-3-tainted', done));
test('native-function-call-4-clean', (done) => runTest('native-function-call-4-clean', done));
test('native-function-call-4-tainted', (done) => runTest('native-function-call-4-tainted', done));

// this feature of Function.call is not currently supported
// test('native-function-call-5-clean', (done) =>
// runTest('native-function-call-5-clean', done));
// test('native-function-call-5-tainted', (done) =>
// runTest('native-function-call-5-tainted', done));

test('native-string-toLowerCase-clean', (done) => runTest('native-string-toLowerCase-clean', done));
test('native-string-toLowerCase-tainted', (done) => runTest('native-string-toLowerCase-tainted', done));
test('native-Math-round-clean', (done) => runTest('native-Math-round-clean', done));
test('native-Math-round-tainted', (done) => runTest('native-Math-round-tainted', done));
test('native-Math-max-1-clean', (done) => runTest('native-Math-max-1-clean', done));
test('native-Math-max-1-tainted', (done) => runTest('native-Math-max-1-tainted', done));
test('native-Math-max-2-clean', (done) => runTest('native-Math-max-2-clean', done));
test('native-Math-max-2-tainted', (done) => runTest('native-Math-max-2-tainted', done));
test('native-Object-defineProperty-1-clean', (done) => runTest('native-Object-defineProperty-1-clean', done));
test('native-Object-defineProperty-1-tainted', (done) => runTest('native-Object-defineProperty-1-tainted', done));
test('native-Object-defineProperty-2-clean', (done) => runTest('native-Object-defineProperty-2-clean', done));
test('native-Object-defineProperty-2-tainted', (done) => runTest('native-Object-defineProperty-2-tainted', done));

// these features of Object.defineProperty aren't currently supported
// test('native-Object-defineProperty-3-clean', (done) =>
// runTest('native-Object-defineProperty-3-clean', done));
// test('native-Object-defineProperty-3-tainted', (done) =>
// runTest('native-Object-defineProperty-3-tainted', done));
// test('native-Object-defineProperty-4-clean', (done) =>
// runTest('native-Object-defineProperty-4-clean', done));
// test('native-Object-defineProperty-4-tainted', (done) =>
// runTest('native-Object-defineProperty-4-tainted', done));

test('native-eval-1-clean', (done) => runTest('native-eval-1-clean', done));
test('native-eval-1-tainted', (done) => runTest('native-eval-1-tainted', done));
test('native-Array-join-1-clean', (done) => runTest('native-Array-join-1-clean', done));
test('native-Array-join-1-tainted', (done) => runTest('native-Array-join-1-tainted', done));
test('native-Array-join-2-clean', (done) => runTest('native-Array-join-2-clean', done));
test('native-Array-join-2-tainted', (done) => runTest('native-Array-join-2-tainted', done));
test('native-Array-join-3-clean', (done) => runTest('native-Array-join-3-clean', done));
test('native-Array-join-3-tainted', (done) => runTest('native-Array-join-3-tainted', done));
test('native-Array-join-4-clean', (done) => runTest('native-Array-join-4-clean', done));
test('native-Array-join-4-tainted', (done) => runTest('native-Array-join-4-tainted', done));
test('native-Array-join-5-clean', (done) => runTest('native-Array-join-5-clean', done));
test('native-Array-join-5-tainted', (done) => runTest('native-Array-join-5-tainted', done));
test('native-Array-push-1-clean', (done) => runTest('native-Array-push-1-clean', done));
test('native-Array-push-1-tainted', (done) => runTest('native-Array-push-1-tainted', done));
test('native-Array-push-2-clean', (done) => runTest('native-Array-push-2-clean', done));
test('native-Array-push-2-tainted', (done) => runTest('native-Array-push-2-tainted', done));
test('native-Array-push-3-clean', (done) => runTest('native-Array-push-3-clean', done));
test('native-Array-push-3-tainted', (done) => runTest('native-Array-push-3-tainted', done));
test('native-Array-push-4-clean', (done) => runTest('native-Array-push-4-clean', done));
test('native-Array-push-4-tainted', (done) => runTest('native-Array-push-4-tainted', done));
test('native-Array-push-5-clean', (done) => runTest('native-Array-push-5-clean', done));
test('native-Array-push-5-tainted', (done) => runTest('native-Array-push-5-tainted', done));
test('arguments-1-clean', (done) => runTest('arguments-1-clean', done));
test('arguments-1-tainted', (done) => runTest('arguments-1-tainted', done));
test('arguments-2-clean', (done) => runTest('arguments-2-clean', done));
test('arguments-2-tainted', (done) => runTest('arguments-2-tainted', done));
test('arguments-3-clean', (done) => runTest('arguments-3-clean', done));
test('arguments-3-tainted', (done) => runTest('arguments-3-tainted', done));
test('arguments-4-clean', (done) => runTest('arguments-4-clean', done));
test('arguments-4-tainted', (done) => runTest('arguments-4-tainted', done));
test('arguments-5-clean', (done) => runTest('arguments-5-clean', done));
test('arguments-5-tainted', (done) => runTest('arguments-5-tainted', done));
test('arguments-6-clean', (done) => runTest('arguments-6-clean', done));
test('arguments-6-tainted', (done) => runTest('arguments-6-tainted', done));
test('arguments-7-clean', (done) => runTest('arguments-7-clean', done));
test('arguments-7-tainted', (done) => runTest('arguments-7-tainted', done));
test('arguments-8-clean', (done) => runTest('arguments-8-clean', done));
test('arguments-8-tainted', (done) => runTest('arguments-8-tainted', done));
test('native-Array-forEach-1-clean', (done) => runTest('native-Array-forEach-1-clean', done));
test('native-Array-forEach-1-tainted', (done) => runTest('native-Array-forEach-1-tainted', done));
test('native-string-split-1-clean', (done) => runTest('native-string-split-1-clean', done));
test('native-string-split-1-tainted', (done) => runTest('native-string-split-1-tainted', done));
test('native-string-split-2-clean', (done) => runTest('native-string-split-2-clean', done));
test('native-string-split-2-tainted', (done) => runTest('native-string-split-2-tainted', done));
test('native-string-split-3-clean', (done) => runTest('native-string-split-3-clean', done));
test('native-string-split-3-tainted', (done) => runTest('native-string-split-3-tainted', done));
test('native-string-split-4-clean', (done) => runTest('native-string-split-4-clean', done));
test('native-string-split-4-tainted', (done) => runTest('native-string-split-4-tainted', done));
test('simple-readFileSync-exec-clean', (done) => runTest('simple-readFileSync-exec-clean', done));
test('simple-readFileSync-exec-tainted', (done) => runTest('simple-readFileSync-exec-tainted', done));

// Tests for new async/await implementation
test('async-await-2-tainted', (done) => runTest('async-await-2-tainted', done));
test('async-await-3-tainted', (done) => runTest('async-await-3-tainted', done));
test('async-await-interleave-tainted', (done) => runTest('async-await-interleave-tainted', done));
test('async-await-interleave-2-tainted', (done) => runTest('async-await-interleave-2-tainted', done));
test('basic-async', (done) => runTest('basic-async', done));
test('multi-await', (done) => runTest('multi-await', done));
// test('promise-all-tainted', (done) => runTest('promise-all-tainted', done))
// test('for-await-tainted', (done) => runTest('for-await-tainted', done))
test('sanitizer-variable-assignment-clean', (done) => runTest('sanitizer-variable-assignment-clean', done));
test('sanitizer-variable-assignment-tainted', (done) => runTest('sanitizer-variable-assignment-tainted', done));
test('sanitizer-function-invocation-clean', (done) => runTest('sanitizer-function-invocation-clean', done));
test('sanitizer-function-invocation-tainted', (done) => runTest('sanitizer-function-invocation-tainted', done));
test('sanitizer-built-in-clean', (done) => runTest('sanitizer-built-in-clean', done));
test('sanitizer-built-in-tainted', (done) => runTest('sanitizer-built-in-tainted', done));
test('sanitizer-function-return-clean', (done) => runTest('sanitizer-function-return-clean', done));
test('sanitizer-function-return-tainted', (done) => runTest('sanitizer-function-return-tainted', done));
test('sanitizer-complex-1-clean', (done) => runTest('sanitizer-complex-1-clean', done));
test('sanitizer-complex-1-tainted', (done) => runTest('sanitizer-complex-1-tainted', done));
test('sanitizer-complex-2-clean', (done) => runTest('sanitizer-complex-2-clean', done));
test('sanitizer-complex-2-tainted', (done) => runTest('sanitizer-complex-2-tainted', done));
test('sanitizer-complex-3-clean', (done) => runTest('sanitizer-complex-3-clean', done));

// Currently broken. This test uses `.then(Number.parseInt)`, and NodeProf seems to not tell us that
// `parseInt` was called.
// test('sanitizer-complex-3-tainted', (done) => runTest('sanitizer-complex-3-tainted', done));

test('sanitizer-varargs-clean', (done) => runTest('sanitizer-varargs-clean', done));
test('sanitizer-varargs-tainted', (done) => runTest('sanitizer-varargs-tainted', done));
test('sanitizer-complex-4-clean', (done) => runTest('sanitizer-complex-4-clean', done));
test('sanitizer-complex-4-tainted', (done) => runTest('sanitizer-complex-4-tainted', done));
test('verbose-1-clean', (done) => runTest('verbose-1-clean', done));
test('verbose-1-tainted', (done) => runTest('verbose-1-tainted', done));
test('recursive-argv-1-clean', (done) => runTest('recursive-argv-1-clean', done));
test('recursive-argv-1-tainted', (done) => runTest('recursive-argv-1-tainted', done));
test('sanitizer-recursive-1-clean', (done) => runTest('sanitizer-recursive-1-clean', done));
test('sanitizer-recursive-1-tainted', (done) => runTest('sanitizer-recursive-1-tainted', done));

// Broken due to native model for Promise.then
// test('async-then-complex-1-clean', (done) => runTest('async-then-complex-1-clean', done));
// test('async-then-complex-1-tainted', (done) => runTest('async-then-complex-1-tainted', done));

test('default-spec-1-tainted', (done) => runTest('default-spec-1-tainted', done, true));
