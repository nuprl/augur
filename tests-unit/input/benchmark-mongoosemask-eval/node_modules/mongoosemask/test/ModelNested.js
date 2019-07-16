'use strict';
module.exports = function (mongoose, child) {

    var db = mongoose.connection;
    var Schema = mongoose.Schema;

    var schema = new Schema({
        publicField:String,
        privateField: String,
        data:{},
        nestedDoc:[{
            publicField:String,
            privateField: String
        }]
    });

    return db.model('NestedModel', schema);
};
