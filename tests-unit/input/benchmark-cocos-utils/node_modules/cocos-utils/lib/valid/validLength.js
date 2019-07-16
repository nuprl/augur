var msgCode = require("../../cfg/msgCode");
var core4cc = require("../core/core4cc");

/**
 * Desc: validate the length of command.
 *
 * @param name
 * @param currDir
 * @param values
 * @param validData
 * @returns {*}
 */
function validLength(name, currDir, values, validData){
    var l = values.length;
    var length = validData.length;
    if(length == null) return;
    if(typeof length == "number"){
        return core4cc.assert(l == length, msgCode.CMD_LENGTH, {cmd : name, length : length});
    }
    if(length == "+"){
        return core4cc.assert(l > 0, msgCode.CMD_LENGTH, {cmd : name, length : "[1,+]"});
    }
    var lArr = length.split(",");
    if(lArr.length == 1){
        core4cc.assert(l == lArr[0], msgCode.CMD_LENGTH, {cmd : name, length : lArr[0]});
    }else if(lArr.length > 1){
        core4cc.assert(l >= lArr[0] && l <=lArr[1], msgCode.CMD_LENGTH, {cmd : name, length : "[" + lArr[0] + "," + lArr[1] + "]"});
    }
};

module.exports = validLength;