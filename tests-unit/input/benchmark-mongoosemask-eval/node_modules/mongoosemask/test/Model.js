'use strict';
module.exports = function (mongoose) {

    var db = mongoose.connection;
    var Schema = mongoose.Schema;

    var schema = new Schema({
        publicField:String,
        privateField: String
    });

    return db.model('SecretModel', schema);
};
