done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';
 
var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var gm = require('gm');


gm.compare('.images/german.jpg',
           './images/german.jpg' + payload,
           function () { console.log("calling compare with payload: " + payload); done();});
 
//console.log("done!");
