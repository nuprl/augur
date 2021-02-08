// JALANGI DO NOT INSTRUMENT
const {performance} = require('perf_hooks');

const start = performance.now();
console.log("Before file require: " + start / 1000);
const file = require('/mnt/c/programming/augur/tests-unit/input/benchmark-fish-exec/fish-exec.js')
console.log("Test Time: " + (performance.now() - start) / 1000)