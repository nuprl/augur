const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};

var DUMMY_FILE = './xyzzy';

var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var converter = require("git2json");

converter.logger.retrieve(payload, function() {
    done();

    let t1 = performance.now();
    let mem = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log((t1 - t0)/1000);
    console.log(Math.round(mem * 100) / 100);
});
