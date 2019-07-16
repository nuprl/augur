var PluginCfg = require("../obj/PluginCfg");
var path = require("path");
var fs = require("fs");
var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var pluginCfg = new PluginCfg(consts.F_GEN_BASE_CFG, msgCode.DESC_GEN_BASE_CFG, {length : "0,1"});

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    var projDir = currDir;
    if(args.length > 0){
        var str = args[0];
        projDir = core4cc.isAbsolute(str) ? str : path.join(currDir, str);
    }
    core4cc.log(msgCode.GENERATING, {target : "baseCfg"});

    var cfgSearcher = require("../core/cfgSearcher");
    cfgSearcher.init(projDir, false);
    var arr = cfgSearcher.getBaseJsList();
    var content = "var " + consts.BASE_CFG + " = {\r\n";
    content += '    projName : "' + cfgSearcher.getProjName() + '",\r\n';
    content += '    resPath : "' + consts.RES_JS_PATH + '",\r\n';
    //modulesPathMap
    var modulePath2Html = cfgSearcher.modulePath2Html;
    content += "    " + consts.MODULES_PATH_MAP + " : {\r\n"
    for (var key in modulePath2Html) {
        content += '        "' + key + '" : "' + modulePath2Html[key] + '",\r\n';
    }
    if(content.substring(content.length-3, content.length-2) == ","){
        content = content.substring(0, content.length-3) + "\r\n";
    }
    content += "    },\r\n";
    //baseJsList
    content += "    " + consts.BASE_JS_LIST + " : [\r\n";
    for(var i = 0, li = arr.length; i < li; ++i){
        content += "        " + JSON.stringify(arr[i]);
        if(i < li - 1) content += ",\r\n";
        else content += "\r\n";
    }
    content += "    ]\r\n";
    content += "};"

    var projCocosPath = path.join(projDir, "cocos.json");
    var defCocos = require("../../cfg/cocos.json");
    var projCocos = fs.existsSync(projCocosPath) ? require(projCocosPath) : {};
    var pluginName = path.basename(__filename, ".js");
    var cfg = core4cc.mergeData(projCocos[pluginName] ,defCocos[pluginName]);

    var path4BaseJsList = path.join(projDir, cfg.output || consts.BASE_CFG_PATH);
    fs.writeFileSync(path4BaseJsList, content);
    core4cc.log(msgCode.SUCCESS_PATH, {path : path4BaseJsList});
//    if(cocosCfg.genBaseCfg && cocosCfg.genBaseCfg.delTemp) core4cc.rmdirSyncRecursive(tempDir);
}
exports.run = run;
exports.cfg = pluginCfg;