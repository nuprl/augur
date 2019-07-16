done = function done(){
    console.log("Done!");
};

/* for the eval benchmarks, the idea is to inject an assignment to a property of "console", and
 later check whether the property was set */
var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

function dummySource(val){
    payload += val;
}

dummySource(' ');

var molProto = require('mol-proto');
var benignInput = "benignFunctionName";
molProto.makeFunction("test(){}; " + payload + " function x", "console.log(23);");

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}


