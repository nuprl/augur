// JALANGI DO NOT INSTRUMENT
const {performance} = require('perf_hooks');

const start = performance.now();
console.log("Before file require: " + start / 1000);
var str = "mongoosify-eval";
const file = require(`/mnt/c/programming/augur/tests-unit/input/benchmark-${str}/${str}.js`)
console.error("Test Time: " + (performance.now() - start) / 1000)