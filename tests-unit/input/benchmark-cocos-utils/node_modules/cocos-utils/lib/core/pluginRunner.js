
var path = require("path");
var fs = require("fs");
var core4cc = require("./core4cc");
var msgCode = require("../../cfg/msgCode");

/**
 * Desc: Get plugin by name.
 * @param name
 * @returns {*}
 */
function getPlugin(name){
    //TODO get from custom first

    //get from cocos-utils
    var pluginPath = path.join(__dirname, "../", "plugins", name + ".js");
    if(!fs.existsSync(pluginPath)) return null;
    return require(pluginPath);
}

/**
 * Desc: Run plugin.
 * @param option
 */
function run(option){
    var pluginName = option.name;
    var plugin = getPlugin(pluginName);
    core4cc.assert(plugin, msgCode.PLUGIN_NOT_EXISTS, {name : pluginName});
    plugin.run(option.currDir, option.args, option.opts);
}

exports.run = run;