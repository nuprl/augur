done = function done(){
    console.log("Done!");
};


var DUMMY_FILE = './xyzzy';

var command = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    command += val;
}

dummySource(' ');

var c = require('cocos-utils');
var core4cc = c.core4cc;
var unzip = core4cc.unzip;

var filename = './file.zip';
unzip(filename+command, './unzipped', function(){});

done();

