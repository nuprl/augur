done = function done(){
    console.log("Done!");
};

var command = "../../cmd";

function dummySource(val){
    command += val;
}

dummySource('');

var locale = require('system-locale');

console.log("** before executing command **");
console.log(locale.sync(command));
console.log("** after executing command **");

done();
