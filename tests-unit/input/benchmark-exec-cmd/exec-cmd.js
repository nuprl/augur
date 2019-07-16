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

var exec = require('child_process').exec;


exec(command, function(error, stdout, stderr) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('stdout:',  stdout);
    console.log('stderr:', stderr);
    done();
});


