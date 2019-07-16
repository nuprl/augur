var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");

/**
 * Desc: Config class for option.
 * @param name
 * @param descs
 * @param validData
 * @constructor
 */
function Clazz(name, descs, validData){
    this.name = name || "";
    this.descs = descs || "";
    this.validData = validData || {length : 1};
    this.valids = [];

    this.valid = function(currDir, optValues){
        require("../valid/validLength")(this.name, currDir, optValues, this.validData);
    };
}
module.exports = Clazz;