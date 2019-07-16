var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");

/**
 * Desc: Config class for plugin.
 * @param name
 * @param descs
 * @param validData
 * @constructor
 */
function Clazz(name, descs, validData){
    this.name = name;
    this.validData = validData || {length : 1};
    this.valids = [];
    this.descs = descs || [];
    this.opts = [];

    this.valid = function(currDir, args, opts){
        //default
        require("../valid/validLength")(this.name, currDir, args, this.validData);
        for(var i = 0, li = this.valids.length; i < li; i++){
            this.valids[i](this.name, currDir, args, this.validData);
        }
        for (var key in opts) {
            var l = 0;
            for(var i = 0, li = this.opts.length; i < li; i++){
                if(this.opts[i].name == key) {
                    l = 1;
                    break;
                }
            }
            core4cc.assert(l, msgCode.CMD_HAS_NO_OPT, {command : this.name, opt : key});
            l = 0;
        }

        for(var i = 0, li = this.opts.length; i < li; i++){
            var optCfg = this.opts[i];
            var opt = opts[optCfg.name];
            if(opt == null) continue;
            optCfg.valid(currDir, opts[optCfg.name]);
        }
    }
};
module.exports = Clazz;