var fs = require('fs');
var path = require('path');

/**
 * Desc: handler for file formatter.
 * @param opts
 * @param fmtMap
 * @constructor
 */
function Handler(opts, fmtMap){
    this.opts = opts || {};
    this.fmtMap = fmtMap || {};

    this.fmt = function(filePath){
        var key = path.basename(filePath);
        if(fmtMap[key]) fmtMap[key](filePath, this.opts);
    }
}

/**
 * Desc: pub formatter.
 * @param filePath
 * @param opts
 */
function pubFmt(filePath, opts){
    var content = fs.readFileSync(filePath).toString();
    for (var key in opts) {
        if(key == null) continue;
        var regExp = new RegExp("\\[\\%" + key + "\\%\\]", "gi");
        content = content.replace(regExp, opts[key]);
    }
    fs.writeFileSync(filePath, content);
}

exports.Handler = Handler;
exports.pubFmt = pubFmt;
