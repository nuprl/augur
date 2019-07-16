var PluginCfg = require("../obj/PluginCfg");
var path = require("path");
var fs = require("fs");
var core4cc = require("../core/core4cc");
var msgCode = require("../../cfg/msgCode");
var consts = require("../../cfg/consts");

var blank1 = "            ";

var pluginCfg = new PluginCfg(consts.F_HELP, msgCode.DESC_HELP, {length : 0});

/**
 * Desc: Run plugin.
 * @param currDir
 * @param args
 * @param opts
 */
function run(currDir, args, opts){
    pluginCfg.valid(currDir, args, opts);
    var files = fs.readdirSync(__dirname);
    for(var i = 0, li = files.length; i < li; i++){
        var file = files[i];
        if(path.extname(file).toLowerCase() != ".js") continue;
        var pluginName = path.basename(file, ".js");
        var _pluginCfg = require("./" + file).cfg;
        var str1 = "\033[1;36;1m" + pluginName + "\033[0m";
        str1 += blank1.substring(pluginName.length);
        var descs = _pluginCfg.descs;
        for(var j = 0, lj = descs.length; j < lj; j++){
            var desc = descs[j];
            var c = j == 0 ? str1 : blank1;
            c += desc;
            console.log(c);
        }
        console.log();
        var opts = _pluginCfg.opts;
        for(var j = 0, lj = opts.length; j < lj; j++){
            var opt = opts[j];
            var optName = opt.name;
            var descs = opt.descs;
            var lk = Math.max(1, descs.length);
            for(var k = 0; k < lk; k++){
                var c = blank1;
                if(k == 0){
                    c = "  \033[1;32;1m" + optName + "\033[0m" + blank1.substring(optName.length + 2);
                }
                c += descs[k] || "";
                console.log(c);
            }
            console.log();
        }
        console.log(blank1 + "----------------------------------------------------------");
    }
};

exports.run = run;
exports.cfg = pluginCfg;