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

var wos = require('node-wos');
console.log(wos.getOSName(command));

done();


