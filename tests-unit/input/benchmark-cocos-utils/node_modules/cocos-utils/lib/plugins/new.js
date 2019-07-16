var fs = require("fs");
var path = require("path");
var msgCode = require("../../cfg/msgCode");
var core4cc = require("../core/core4cc");
var OptCfg = require("../obj/OptCfg");
var PluginCfg = require("../obj/PluginCfg");
var consts = require("../../cfg/consts");
var fileFmt = require("../core/fileFmt");

//file formatter config.
var pubFmt = fileFmt.pubFmt;
var fmtMap = {};
fmtMap["index.html"] = pubFmt;
fmtMap["release.html"] = pubFmt;
fmtMap["resCfg.js"] = pubFmt;
fmtMap["main.js"] = pubFmt;
fmtMap["jsRes.js"] = pubFmt;
fmtMap["cocos2d.js"] = pubFmt;
fmtMap["cocos.json"] = pubFmt;
fmtMap["package.json"] = pubFmt;


var pluginCfg = new PluginCfg(consts.F_NEW, msgCode.DESC_NEW);
var dirOptCfg = new OptCfg(consts.OPT_P, msgCode.DESC_OPT_DIR);
var emOptCfg = new OptCfg(consts.OPT_EM, msgCode.DESC_OPT_ENGINE_MODULES);
var tempNameOptCfg = new OptCfg(consts.OPT_T, msgCode.DESC_OPT_TEMP_NAME);
pluginCfg.opts = [dirOptCfg, emOptCfg, tempNameOptCfg];

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    var projName = args[0];
    var projDir = path.join(currDir, projName);
    var dir = opts[consts.OPT_P] ? opts[consts.OPT_P][0] : null;
    if(dir){
        if(core4cc.isAbsolute(dir)) projDir = path.join(dir, projName);
        else projDir = path.join(currDir, dir, projName);
    }
    var tempName = (opts[consts.OPT_T] ? opts[consts.OPT_T][0] : null) || consts.DEFAULT_PROJ_TEMP;
    var tempDir = path.join(__dirname, "../../templates/projects", tempName, "./");
    core4cc.assert(fs.existsSync(tempDir), msgCode.TEMPLATE_NOT_EXISTS, {tempDir : tempDir});

    core4cc.assert(!fs.existsSync(projDir), msgCode.PROJ_EXISTS, {projDir : projDir});
    core4cc.mkdirSyncRecursive(projDir);

    var projCocosPath = path.join(projDir, "cocos.json");
    var defCocos = require("../../cfg/cocos.json");
    var projCocos = fs.existsSync(projCocosPath) ? require(projCocosPath) : {};
    var pluginName = path.basename(__filename, ".js");
    var cfg = core4cc.mergeData(projCocos[pluginName] ,defCocos[pluginName]);

    var enginModues = (opts[consts.OPT_EM] ? opts[consts.OPT_EM][0] : null) || consts.DEFAULT_ENGINE_MODULES_PATH;

    opts.emPath = path.join(enginModues, "./").replace(/\\/g, "/");
    opts.ccDir = path.join(enginModues, "cocos2d-html5", "./").replace(/\\/g, "/");
    opts.name = projName.toLowerCase();
    core4cc.copyFiles(tempDir, projDir, new fileFmt.Handler(opts, fmtMap));

    core4cc.log(msgCode.SUCCESS);
};

exports.run = run;
exports.cfg = pluginCfg;