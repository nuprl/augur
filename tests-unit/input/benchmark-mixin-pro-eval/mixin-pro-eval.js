done = function done(){
    console.log("Done!");
};

var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

function dummySource(val){
    payload += val;
}

dummySource(' ');

var mixin = require("mixin-pro");

var x = {};
function Foo() {
}
Object.defineProperty(Foo, "name", { value: "f(){}; " + payload + " //" });
try {
    mixin(Foo, x);
} catch (e) {
    //console.log("Error: " + e);
}

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}

done();
