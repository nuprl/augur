var PluginCfg = require("../obj/PluginCfg");
var path = require("path");
var fs = require("fs");
var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var pluginCfg = new PluginCfg(consts.F_BUILD, msgCode.DESC_BUILD, {length : "0,1"});

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    core4cc.log(msgCode.BUILDING);
    require("./genRes").run(currDir, args, {});
    require("./genJsRes").run(currDir, args, {});
    require("./genBaseCfg").run(currDir, args, {});
};
exports.run = run;
exports.cfg = pluginCfg;