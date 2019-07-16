var self = module.exports = {};
var core4cc = require("./core4cc");
var msgCode = require("../../cfg/msgCode");

/**
 * Desc: Get options for command.
 * @returns {{name: *, args: Array}}
 */
self.getArgv = function(){
    var arr = process.argv.slice(2);
    core4cc.assert(arr.length > 0, msgCode.CMD_ARGS_ERR);

    var args = [];
    var i = 1, li = arr.length
    for(; i < li; i++){
        var itemi = arr[i];
        if(itemi.search(/-(\w*)/) == 0) break;
        args.push(itemi);
    }//args 4 function ends

    var opts = {};
    var values4Opt = [];
    var name = null;
    //handle options
    for(; i < li; i++){
        var itemi = arr[i];
        if(itemi.search(/-(\w*)/) == 0){
            if(!name) name = itemi;
            else{
                opts[name] = values4Opt;
                name = itemi;
                values4Opt = [];
            }
        }else{
            values4Opt.push(itemi);
        }
    }

    if(name) opts[name] = values4Opt;//add the latest

    //options for the plugin function
    var result = {
        name : arr[0],
        currDir : process.cwd(),
        args : args,
        opts : opts
    }
    return result;
};