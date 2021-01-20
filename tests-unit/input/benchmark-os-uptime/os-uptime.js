const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";
//var command = "for i in $( ls -LR ); do echo item: $i; done"

function dummySource(val){
    command += val;
}

dummySource(' ');

var uptime = require('os-uptime')

var time = uptime(command).toLocaleString();
console.log('System was started at: %s', time);
done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);

