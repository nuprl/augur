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

var ostb = require( 'os-toolbox' );

ostb.memoryUsage(command).then(function(memusage){
    console.log("memory usage: " + memusage); //ex: 93 (percent)
}, function(error){
    //errors here
}).then(function(v){
    console.log("***after call to exec");
});

done();


