var PluginCfg = require("../obj/PluginCfg");
var msgCode = require("../../cfg/msgCode");
var core4cc = require("../core/core4cc");
var consts = require("../../cfg/consts");

var pluginCfg = new PluginCfg(consts.F_VERSION, msgCode.DESC_VERSION, {length : 0});

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts)
    var packageInfo = require("../../package.json");
    core4cc.log(msgCode.VERSION, {version : packageInfo.version});
}


exports.run = run;
exports.cfg = pluginCfg;