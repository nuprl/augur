const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};


var monitor = require('pomelo-monitor');
var command = "; touch ./xyzzy ";

function dummySource(val){
    command += val;
}

dummySource(' ');


var param = {
        pid: process.pid + command,
        serverId: 'node-1'
};

console.log("** before executing command **");

monitor.psmonitor.getPsInfo(param, function(err, data) {
        console.log('process information is :', data);
});

console.log("** after executing command **");

done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);
