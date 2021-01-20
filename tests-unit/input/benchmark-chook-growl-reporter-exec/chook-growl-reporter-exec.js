const {performance} = require('perf_hooks');
let t0 = performance.now();

done = function done(){
    console.log("Done!");
};

var DUMMY_FILE = './xyzzy';

var payload = "`touch " + DUMMY_FILE + "`";

var reporter = require("chook-growl-reporter");
var obj = reporter.individualFailureOrError();
var events = require("./node_modules/events");
var eventEmitter = new events.EventEmitter();
obj.reporter(eventEmitter);

eventEmitter.emit('fail', {suiteName: "My suite", name: "awesome", error:{name: "error", message: payload}});

done();

let t1 = performance.now();
let mem = process.memoryUsage().heapUsed / 1024 / 1024;
console.log((t1 - t0)/1000);
console.log(Math.round(mem * 100) / 100);