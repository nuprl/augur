var PluginCfg = require("../obj/PluginCfg");
var path = require("path");
var fs = require("fs");
var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var exec = require('child_process').exec;
var delCode = require("../core/delCode");

var projName, projDir, resCfg, htmlDir;
var resCfg4PublishPath, buildXmlPath, engineDir;
var jsIgnoreMap = {
};

var pluginCfg = new PluginCfg(consts.F_PUBLISH, msgCode.DESC_PUBLISH, {length : "0,1"});

/**
 * Desc: Create resCfg for publishing.
 * @param resCfg
 */
function createResCfg4Publish(resCfg){
    var content = "";
    var jsKeyArr = [];
    content += consts.RES_4_G_MODULES + " = {};\r\n";
    for (var key in resCfg) {
        if(key == projName){
            content += consts.RES_4_G_MODULES + ".base =[\r\n";
        }else{
            if(key.length > 3 && path.extname(key).toLowerCase() == ".js"){
                var keyName = core4cc.getKeyName(path.basename(key));
                jsKeyArr.push(keyName);
                content += consts.RES_4_G_MODULES + "[js." + projName + "." + keyName + "]=[\r\n";
            }else{
                content += consts.RES_4_G_MODULES + '["' + key + '"] =[\r\n';
            }
        }
        var resArr = resCfg[key];
        for(var j = 0, lj = resArr.length; j < lj; j++){
            content += "    res." + core4cc.getKeyName(path.basename((resArr[j])));
            if(j < lj - 1) content += ","
            content += "\r\n"
        }
        content += "];\r\n";
    }
    var jsContent = "var js = {\r\n    " + projName + ' : {\r\n';
    for(var i = 0, li = jsKeyArr.length; i < li; ++i){
        jsContent += '        ' + jsKeyArr[i] + ' : "_' + i + '"';
        if(i < li - 1) jsContent += ",\r\n";
        else jsContent += "\r\n";
    }
    jsContent += "    }\r\n};\r\n"
    content = jsContent + content;
    fs.writeFileSync(resCfg4PublishPath, content);
};

/**
 * Desc: Build.
 * @param jsArr
 */
function build(jsArr, cb){
    if(cfg4Publish.delLog){//need to delete log
        var buildDir = path.join(projDir, consts.TEMP_PATH, "delCode");
        if(fs.existsSync(buildDir)) core4cc.rmdirSyncRecursive(buildDir);
        fs.mkdirSync(buildDir);
        var tempArr = [];
        for(var i = 0, li = jsArr.length; i < li; i++){
            var itemi = jsArr[i];
            if(jsIgnoreMap[itemi]) continue;//ignore current js
            var tempName = "__" + i + "_" + path.basename(itemi);
            var tempPath = path.join(buildDir, tempName);
            delCode(path.join(htmlDir, itemi), tempPath);
            tempArr.push(path.relative(htmlDir, tempPath).replace(/\\/g, "/"));
        }
        jsArr = tempArr;
    }
    var jsListStr = "";
    for(var i = 0, li = jsArr.length; i < li; i++){
        var itemi = jsArr[i];
        if(jsIgnoreMap[itemi]) continue;//ignore current js
        jsListStr += '<file name="' + itemi + '"></file>\r\n                ';
    }

    //generate build.xml by template.
    var buildStr = fs.readFileSync(path.join(__dirname, "../../", consts.TEMP_BUILD_XML_PATH)).toString();
    buildStr = buildStr.replace(/\[\%projDir\%\]/g, projDir.replace(/\\/g, "/"));
    buildStr = buildStr.replace(/\[\%utilsDir\%\]/g, path.join(__dirname, "../../").replace(/\\/g, "/"));
    buildStr = buildStr.replace(/\[\%jsList\%\]/g, jsListStr.replace(/\\/g, "/"));
    buildStr = buildStr.replace(/\[\%output\%\]/g, path.join(projDir, cfg4Publish.output).replace(/\\/g, "/"));
    buildStr = buildStr.replace(/\[\%compilationLevel\%\]/g, cfg4Publish.compilationLevel);
    buildStr = buildStr.replace(/\[\%warning\%\]/g, cfg4Publish.warning);
    buildStr = buildStr.replace(/\[\%debug\%\]/g, cfg4Publish.debug);
    buildStr = buildStr.replace(/\[\%engineDir\%\]/g, engineDir);
    if(!cfg4Publish.useSourceMap){
        buildStr = buildStr.replace(/sourceMapOutputFile[\s]*=[\s]*"\[\%sourceMapOutputFile\%\]"/g, "");
        buildStr = buildStr.replace(/sourceMapFormat[\s]*=[\s]*"\[\%sourceMapFormat\%\]"/g, "");
    }else{
        buildStr = buildStr.replace(/\[\%sourceMapOutputFile\%\]/g, cfg4Publish.sourceMapOutputFile);
        buildStr = buildStr.replace(/\[\%sourceMapFormat\%\]/g, cfg4Publish.sourceMapFormat);
    }

    fs.writeFileSync(path.join(buildXmlPath, "build.xml"), buildStr);
    exec("cd " + buildXmlPath + " && ant", function(err, data, info){
        console.log(info);
        console.log(data);
        if(err) {
            console.error(err);
            console.log(err[0]);
            core4cc.assert(false, msgCode.PUBLISH_FAILED);
        }
        cb(err);
    });
}


/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    projDir = currDir;
    if(args.length > 0){
        var str = args[0];
        projDir = core4cc.isAbsolute(str) ? str : path.join(currDir, str);
    }
    core4cc.log(msgCode.PUBLISHING);

    var projCocosPath = path.join(projDir, "cocos.json");
    var defCocos = require("../../cfg/cocos.json");
    var projCocos = fs.existsSync(projCocosPath) ? require(projCocosPath) : {};
    var pluginName = path.basename(__filename, ".js");
    cfg4Publish = core4cc.mergeData(projCocos[pluginName] ,defCocos[pluginName]);


    var cfgSearcher = require("../core/cfgSearcher");
    cfgSearcher.init(projDir, true);
    var arr = cfgSearcher.getAllJsList();
    var resMap = cfgSearcher.getGameModuleResMap();
    projName = cfgSearcher.getProjName();

    htmlDir = projCocos.htmlDir ? path.join(projDir, projCocos.htmlDir) : projDir;
    engineDir = projCocos.engineDir || defCocos.engineDir;

    resCfg4PublishPath = path.join(projDir, consts.TEMP_PATH, "resCfg4Publish.js");
    buildXmlPath = path.join(projDir, path.dirname(cfg4Publish.output));
    createResCfg4Publish(resMap);

    var resPath = path.relative(htmlDir, path.join(projDir, consts.RES_JS_PATH)).replace(/\\/g, "/");
    var emPath = path.relative(htmlDir, path.join(projDir, engineDir, "cocos2d-html5/lib/cc4publish.js")).replace(/\\/g, "/");
    var resCfgPath = path.relative(htmlDir, resCfg4PublishPath).replace(/\\/g, "/");
    var mainPath = path.relative(htmlDir, path.join(projDir, consts.MAIN_PATH)).replace(/\\/g, "/");

    var allJsList = [resPath, emPath, resCfgPath];
    allJsList = allJsList.concat(arr);
    allJsList.push(mainPath);
    build(allJsList, function(){
        var sourceMapPath = path.join(projDir, path.dirname(cfg4Publish.output), "sourcemap");
        if(fs.existsSync(sourceMapPath)){
            var smContent = fs.readFileSync(sourceMapPath).toString();
            smContent = smContent.replace(new RegExp(htmlDir, "gi"), ".");
            smContent = smContent.replace(new RegExp(htmlDir.replace(/\\/g, "\\\\\\\\"), "gi"), ".");
            fs.writeFileSync(sourceMapPath, smContent);
        }
//        if(cfg.delTemp) core4cc.rmdirSyncRecursive(tempDir);
    });
};

exports.run = run;
exports.cfg = pluginCfg;