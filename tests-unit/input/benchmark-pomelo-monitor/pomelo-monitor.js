done = function done(){
    console.log("Done!");
};


var monitor = require('pomelo-monitor');
var command = "; touch ./xyzzy ";

function dummySource(val){
    command += val;
}

dummySource(' ');


var param = {
        pid: process.pid + command,
        serverId: 'node-1'
};

console.log("** before executing command **");

monitor.psmonitor.getPsInfo(param, function(err, data) {
        console.log('process information is :', data);
});

console.log("** after executing command **");

done();


