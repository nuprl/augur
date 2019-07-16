var path = require("path");
var fs = require("fs");
var core4cc = require("./core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var moduleCache = {};//cache modules which have been loaded, the key is moduleName
var jsCache = {};//cache js which has been loaded, the key is moduleName or jsName
var projName = "";
var projDir = "";//path of project
var htmlDir = "";//dir of html
var tpmPath = consts.TPM_PATH;//path of third party modules
var emPath = consts.EM_PATH;//path of engine modules, default "../node_modules"
var cfgMergedPath = "";//path of cfg merged js
var cfgMerged = {}, jsResMerged = {}, resCfgMerged = {};
var is4Publish = false;
var baseResCache = {};//cache resources for base, the key is moduleName or jsName
var gmResCache = {};//cache resources for game modules, the key is jsName
var modulePath2Html = {};

/**
 * Desc: Init base info for cfgSearcher.
 * @param projectDir
 * @param [Boolean] is4P is for publish
 */
function init(projectDir, is4P){
    projDir = projectDir;
    is4Publish = is4P;
    var cocosJson = require(path.join(projDir, consts.COCOS_JSON));
    var pkgJson = require(path.join(projDir, consts.PKG_JSON));
    projName = pkgJson.name;//name of the project
    htmlDir = cocosJson.htmlDir ? path.join(projDir, cocosJson.htmlDir) : projDir;//root of html of the project
    emPath = cocosJson.engineDir || emPath;//path of engine modules
    core4cc.assert(projName, msgCode.PROJ_NAME_NULL);
    var resJsPath = cocosJson.genRes ? (cocosJson.genRes.output || consts.RES_JS_PATH) : consts.RES_JS_PATH;
    var content = fs.readFileSync(path.join(projDir, resJsPath)).toString() + "\r\n" + mergeCfg(projName, "");
    var tempPath = path.join(projDir, consts.TEMP_PATH);
    if(!fs.existsSync(tempPath)) fs.mkdirSync(tempPath);
    cfgMergedPath = path.join(tempPath, consts.CFG_MERGED_JS);
    fs.writeFileSync(cfgMergedPath, content);
    cfgMerged = require(cfgMergedPath);
    jsResMerged = cfgMerged.jsRes;
    resCfgMerged = cfgMerged.resCfg;
    moduleCache = {};//reset
}
/**
 * Desc: Get base js list.
 * @returns {*}
 */
function getBaseJsList(){
    return searchModule(projName, "");
};
/**
 * Desc: Get all js list.Based on resCfg.gameModules.
 * @returns {*}
 */
function getAllJsList(){
    var arr = searchModule(projName, "");
    var gms = cfgMerged.gameModules;
    for(var i = 0, li = gms.length; i < li; i++){
        arr = arr.concat(getRefJs(gms[i]));
    }
    return arr;
}

/**
 * Desc: Merge res.js of the project, jsRes.js and resCfg.js of all to a single file.
 * @param moduleName
 * @param pDir
 * @returns {string}
 */
function mergeCfg(moduleName, pDir){
    if(moduleCache[moduleName]) return "";//module has been loaded
    var modulePath = moduleName == projName ? projDir : path.join(projDir, pDir, moduleName);//module path
    modulePath2Html[moduleName] = path.join(path.relative(htmlDir, modulePath), "./").replace(/\\/g, "/");
    var cocosJsonPath = path.join(modulePath, consts.COCOS_JSON);
    var pkgJsonPath = path.join(modulePath, consts.PKG_JSON);
    core4cc.assert(fs.existsSync(pkgJsonPath), msgCode.PKG_NOT_EXISTS, {dir : modulePath});
    var cocosJson = fs.existsSync(cocosJsonPath) ? require(path.join(modulePath, consts.COCOS_JSON)) : {};
    var pkgJson = require(pkgJsonPath);
    var eDpds = cocosJson.dependencies || [];//engine dependencies
    var tpDpds = core4cc.getDependencies(pkgJson.dependencies) || [];//third party dependencies

    var content = "";
    //find engine modules first
    for(var i = 0, li = eDpds.length; i < li; i++){
        var dpd = eDpds[i];
        content += mergeCfg(dpd, emPath);
    }
    //then, find third party modules
    for(var i = 0, li = tpDpds.length; i < li; i++){
        var dpd = tpDpds[i];
        content += mergeCfg(dpd, tpmPath);
    }

    //at last, find self
    var jsResPath = cocosJson.genJsRes ? (cocosJson.genJsRes.output || consts.JS_RES_JS_PATH) : consts.JS_RES_JS_PATH;//path of jsRes.js
    var resCfgPath = cocosJson.resCfg ? (cocosJson.resCfg.output || consts.RES_CFG_JS_PATH) : consts.RES_CFG_JS_PATH;//path of resCfg.js
    content += fs.readFileSync(path.join(modulePath, jsResPath)).toString()
        .replace(new RegExp("\\[\\%" + moduleName + "\\%\\]", "gi"), modulePath2Html[moduleName]) + "\r\n";
    content += fs.readFileSync(path.join(modulePath, resCfgPath)).toString() + "\r\n";
    content += "exports.res = res;\r\nexports.resCfg = resCfg;\r\nexports.gameModules = cc.gameModules;\r\nexports.jsRes = js;\r\n";
    moduleCache[moduleName] = true;
    return content;
};
/**
 * Desc: Search by module.
 * @param moduleName
 * @param pDir
 * @returns {Array}
 */
function searchModule(moduleName, pDir){
    if(moduleCache[moduleName]) return [];//module has been loaded
    var jsArr = [];//js array for this module
    var modulePath = moduleName == projName ? projDir : path.join(projDir, pDir, moduleName);//module path
    var cocosJsonPath = path.join(modulePath, consts.COCOS_JSON);
    var cocosJson = fs.existsSync(cocosJsonPath) ? require(path.join(modulePath, consts.COCOS_JSON)) : {};
    var pkgJson = require(path.join(modulePath, consts.PKG_JSON));
    var eDpds = cocosJson.dependencies || [];
    var tpDpds = core4cc.getDependencies(pkgJson.dependencies) || [];

    //find engine modules first
    for(var i = 0, li = eDpds.length; i < li; i++){
        jsArr = jsArr.concat(searchModule(eDpds[i], emPath));
    }
    //then, find third party modules
    for(var i = 0, li = tpDpds.length; i < li; i++){
        jsArr = jsArr.concat(searchModule(tpDpds[i], tpmPath));
    }
    //at last, find self
    if(!is4Publish){
        var jsResPath = cocosJson.genJsRes ? (cocosJson.genJsRes.output || consts.JS_RES_JS_PATH) : consts.JS_RES_JS_PATH;//path of jsRes.js
        var resCfgPath = cocosJson.resCfg ? (cocosJson.resCfg.output || consts.RES_CFG_JS_PATH) : consts.RES_CFG_JS_PATH;//path of resCfg.js
        jsArr.push(path.join(modulePath2Html[moduleName], jsResPath).replace(/\\/g, "/"));
        jsArr.push(path.join(modulePath2Html[moduleName], resCfgPath).replace(/\\/g, "/"));
    }
    jsArr = jsArr.concat(getRefJs(moduleName));
    moduleCache[moduleName] = true;
    return jsArr;
}
/**
 * Desc: Get referenced js list.
 * @param js
 * @returns {Array}
 */
function getRefJs(js){
    if(jsCache[js]) return [];//the js has been loaded
    var cfg = resCfgMerged[js];
    var isJs = path.extname(js).toLowerCase() == ".js";
    if(!cfg || !cfg.ref || cfg.ref.length == 0) {
        jsCache[js] = true;
        return isJs ? [js] : [];
    }
    var jsArr = [];
    var ref = cfg.ref;
    for(var i = 0, li = ref.length; i < li; ++i){
        jsArr = jsArr.concat(getRefJs(ref[i]));
    }
    isJs && jsArr.push(js);
    jsCache[js] = true;
    return jsArr;
}

/**
 * Desc: Get resources of base part of project.
 * @returns {*}
 */
function getBaseResList(){
    return _getBaseRes(projName);
}
/**
 * Desc: Get resources of base part by cfg name.
 * @param js
 * @returns {Array}
 * @private
 */
function _getBaseRes(js){
    var cfg = resCfgMerged[js];
    if(!cfg) return [];
    var resArr = [];
    var ref = cfg.ref || [];
    for(var i = 0, li = ref.length; i < li; i++){
        resArr = resArr.concat(_getBaseRes(ref[i]));
    }
    var res = cfg.res || [];
    for(var i = 0, li = res.length; i < li; ++i){
        if(baseResCache[res[i]]) continue;
        resArr.push(res[i]);
        baseResCache[res[i]] = true;
    }
    return resArr;
}
/**
 * Desc: Get resources of game module.
 * @param js
 * @returns {Array}
 */
function getGameModuleRes(js){
    var cfg = resCfgMerged[js];
    if(!cfg) return [];
    var resArr = [];
    var ref = cfg.ref || [];
    for(var i = 0, li = ref.length; i < li; i++){
        resArr = resArr.concat(getGameModuleRes(ref[i]));
    }
    var res = cfg.res || [];
    for(var i = 0, li = res.length; i < li; ++i){
        if(baseResCache[res[i]] || gmResCache[res[i]]) continue;
        resArr.push(res[i]);
        gmResCache[res[i]] = true;
    }
    return resArr;
}

/**
 * Desc: Get map for resources of game module.
 * @returns {{}}
 */
function getGameModuleResMap(){
    var result = {};
    var gms = cfgMerged.gameModules;
    for(var i = 0, li = gms.length; i < li; i++){
        var gm = gms[i];
        result[gm] = getGameModuleRes(gm);
        gmResCache = {};//reset
    }
    result[projName] = getGameModuleRes(projName);
    return result;
}

exports.init = init;
exports.getBaseJsList = getBaseJsList;
exports.getAllJsList = getAllJsList;
exports.getBaseResList = getBaseResList;
exports.getGameModuleResMap = getGameModuleResMap;
exports.modulePath2Html = modulePath2Html;
exports.getProjName = function(){
    return projName;
};
exports.getCfgMerged = function(){
    return cfgMerged;
};
exports.getResCfgMerged = function(){
    return resCfgMerged;
};
exports.getJsResMerged = function(){
    return jsResMerged;
};