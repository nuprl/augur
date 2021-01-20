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

var osenv = require('osenv');

// process.env.HOSTNAME = 'my-machine';

var filename = './file.zip';
var command = "; touch xyzzy";

console.log("** before executing command **");

var hostname = osenv.hostname(function (er, hostname) {
  if (er) console.error('error looking up hostname')
  else console.log('this machine calls itself %s', hostname)
}, filename+command);

console.log('hostname = ' + hostname);

console.log("** after executing command **");

done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);


