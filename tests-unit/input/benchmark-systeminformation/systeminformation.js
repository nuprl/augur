done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var si = require('systeminformation');

si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
    console.log("***after call to exec");
    done(); // note: important to call done() here
}, command);
