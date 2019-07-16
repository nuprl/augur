var PluginCfg = require("../obj/PluginCfg");
var OptCfg = require("../obj/OptCfg");
var path = require("path");
var fs = require("fs");
var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var pluginCfg = new PluginCfg(consts.F_UPDATE, msgCode.DESC_UPDATE, {length : 0});
var respOptCfg = new OptCfg(consts.OPT_REGISTRY, msgCode.DESC_OPT_REGISTRY, {length : "0,1"});
var versionOptCfg = new OptCfg(consts.OPT_VERSION, msgCode.DESC_OPT_VERSION, {length : 1});
pluginCfg.opts = [respOptCfg, versionOptCfg];
var exec = require("child_process").exec;

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    var wsPath =currDir;
    if(args.length == 1){
        if(core4cc.isAbsolute(args[0])) wsPath = args[0];
        else wsPath = path.join(currDir, args[0]);
    }
    var nmPath = path.join(wsPath, "node_modules");
    var regStr = "";
    if(opts[consts.OPT_REGISTRY]){
        regStr = opts[consts.OPT_REGISTRY][0] || "http://registry.cnpmjs.org";
        regStr = ' --registry "' + regStr + '" ';
    }
    var versionStr = "*";//version
    if(opts[consts.OPT_VERSION]){
        versionStr = opts[consts.OPT_VERSION][0] || versionStr;
    }
    core4cc.log(msgCode.UPDATING);
    var pkgPath = path.join(wsPath, "package.json");
    if(!fs.existsSync(pkgPath)){
        var content = fs.readFileSync(path.join(__dirname, "../../", consts.TEMP_INSTALL_PACKAGE_PATH)).toString();
        content = content.replace(/\[\%name\%\]/g, path.basename(wsPath).toLowerCase());
        fs.writeFileSync(pkgPath, content);
    }

    var contentJson = require(pkgPath);
    var dependencies = contentJson.dependencies || {};
    dependencies["cocos2d-html5"] = versionStr;
    updatePackage(pkgPath, dependencies);

    exec("npm " + regStr + "  update cocos2d-html5", function(err, stdout, stderr){
        if(stderr) console.log(stderr);
        if(stdout) console.log(stdout);
        if(err) return console.log(err);

        contentJson = require(pkgPath);
        dependencies = contentJson.dependencies || {};
        var coreCocos = require(path.join(nmPath, "cocos2d-html5/cocos.json"));
        var modules = coreCocos.modules || [];
        for(var i = 0, li = modules.length; i < li; i++){
            var module = modules[i];
            dependencies[module] = versionStr;
        }
        updatePackage(pkgPath, dependencies);

        exec("npm" + regStr + "  update", function(err1, stdout1, stderr1){
            console.log(stderr1);
            console.log(stdout1);
            if(err1) return console.error(err1);
        });
    })
};

function updatePackage(pkgPath, dependencies){
    var content = fs.readFileSync(pkgPath).toString();
    var tempArr = [];
    for (var key in dependencies) {
        tempArr.push('        "' + key + '" : "' + dependencies[key] + '"');
    }
    content = content.replace(/"dependencies"[\s]*:[\s]*\{[\s]*[\w\d\s\*."\-_:\+,]+\}/, '"dependencies" : {\r\n' + tempArr.join(',\r\n') + "\r\n    }");
    fs.writeFileSync(pkgPath, content);
};
exports.run = run;
exports.cfg = pluginCfg;