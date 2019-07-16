done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = __dirname + '/xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

var exec = require('child_process').exec;

var str = 'does not reach sink';

exec(command, function(error, stdout, stderr) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('stdout:',  stdout);
    console.log('stderr:', stderr);
    done();
});


