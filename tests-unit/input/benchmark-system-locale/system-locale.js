const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};

var command = "../../cmd";

function dummySource(val){
    command += val;
}

dummySource('');

var locale = require('system-locale');

console.log("** before executing command **");
console.log(locale.sync(command));
console.log("** after executing command **");

done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);
