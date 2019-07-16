var fs = require("fs");
var path = require("path");

var delStart = -1;
var stack = [];//stack for "(" and ")"
var strStack = [];//stack for string

/**
 * Desc: Jump blank.
 * @param content
 * @param startIndex
 * @returns {Number|number|length|*|Buffer.length}
 * @private
 */
function _jumpBlank(content, startIndex){
    var l = content.length;
    if(startIndex >= l) return l
    var index = content.substring(startIndex).search(/\S/);
    return index < 0 ? l : startIndex + index;
};
/**
 * Desc: Jump string.
 * @param content
 * @param startIndex
 * @returns {*}
 * @private
 */
function _doStrStack(content, startIndex){
    var index = startIndex, l = content.length;
    while(index < l){
        var c = content.substring(index, index+1);
        if(c == strStack[0]) {
            return index + 1;
        }
        index += c=="\\" ? 2 : 1;
    }
    return l;
}
/**
 * Desc: Handle "(" and ")", make index after ")".
 * @param content
 * @param startIndex
 * @returns {*}
 * @private
 */
function _doStack(content, startIndex){
    var index = _jumpBlank(content, startIndex);
    if(index >= content.length) return content.length;
    var c = content.substring(index, index+1);
    if(c == "'" || c == '"') {
        strStack.push(c);
        index = _doStrStack(content, index + 1);
        strStack.pop();
        index = _doStack(content, index);
        return index;
    }
    if(c == "(") {
        stack.push(c);
        index = _doStack(content, index+1);
        return index;
    }else if(c == ")"){
        stack.pop();
        if(stack.length == 0) return index+1;
        return _doStack(content, index+1);
    }else if(c == "\\"){
        return _doStack(content, index+2);
    }else {
        return _doStack(content, index+1);
    }
}
/**
 * Desc: handle "if", no use currently.
 * @param content
 * @param startIndex
 * @param pre
 * @returns {Number|number|length|*|Buffer.length}
 * @private
 */
function _doIf(content, startIndex, pre){
//    console.log("doIf");
    var index = _jumpBlank(content, startIndex);
    if(content.substring(index, index+1) != "(") return index;
    delStart = startIndex - pre.length;
    index = _doStack(content, startIndex);
    index = _jumpBlank(content, index);
    if(index >= content.length) return content.length;
    var c = content.substring(index, index+1);
    if(c == "{"){//if "{"
        delStart = -1;//restart
    }
    return index;
}
/**
 * Desc: handle "else", no use currently.
 * @param content
 * @param startIndex
 * @param pre
 * @returns {Number|number|length|*|Buffer.length}
 * @private
 */
function _doElse(content, startIndex, pre){
//    console.log("_doElse");
    var index = _jumpBlank(content, startIndex);
    if(content.substring(index).search(/if/) == 0){
        index = _jumpBlank(content, index + 2);
    }
    if(content.substring(index, index+1) != "(") return index;
    delStart = startIndex - pre.length;
    index = _doStack(content, startIndex);
    index = _jumpBlank(content, index);
    if(index >= content.length) return content.length;
    var c = content.substring(index, index+1);
    if(c == "{"){//if "{"
        delStart = -1;//restart
    }
    return index;
}
/**
 * Desc: handle "for", no use currently.
 * @param content
 * @param startIndex
 * @param pre
 * @returns {*}
 * @private
 */
function _doFor(content, startIndex, pre){
//    console.log("_doFor");
    delStart = startIndex - pre.length;
    var index = _doStack(content, startIndex);
    index = _jumpBlank(content, index);
    if(index >= content.length) return content.length;
    var c = content.substring(index, index+1);
    if(c == "{"){//if "{"
        delStart = -1;//restart
    }
    return index;
}
/**
 * Desc: Handle log.
 * @param content
 * @param startIndex
 * @param pre
 * @returns {*}
 * @private
 */
function _doLog(content, startIndex, pre){
    delStart = delStart >= 0 ? delStart : startIndex - pre.length;
    if(content.substring(startIndex).trim().substring(0, 1) == "=") return -1;
    var index = _doStack(content, startIndex);
    index = _jumpBlank(content, index);
    if(index >= content.length) return content.length;
    var c = content.substring(index, index+1);
    index = c == ";" ? index + 1 : index;
    return index;
}
var funcMap = {
//    "if" : _doIf,
//    "else" : _doElse,
//    "for" : _doFor,
    "console.log" : _doLog,
    "cc.log" : _doLog
};
/**
 * Desc: Jump comment.
 * @param content
 * @param startIndex
 * @returns {*}
 */
function delComment(content, startIndex){
    var c = content.substring(startIndex, startIndex + 2);
    var l = content.length;
    if(c == "//"){
        var index = content.substring(startIndex).search(/\n/);
        return index >= 0 ? startIndex + index + 3 : l;
    }else if(c == "/*"){
        var index = content.substring(startIndex + 2).search(/\*\//);
        return index >= 0 ? startIndex + index + 4 : l;
    }
    return startIndex;
}
/**
 * Desc: Delete code with roles.
 * @param content
 * @returns {*}
 * @private
 */
function _delCode(content){
    var index = 0, l = content.length;
    while(index < l){
        index = _jumpBlank(content, index);
        if(index >= l) break;
        index = delComment(content, index);
        if(index >= l) break;
        var index2 = content.substring(index).search(/[ \n\(\{]/);
        if(index2 == 0){
            index ++;
            continue;
        }
        if(index + index2 >= l-1 || index2 < 0) break;
        var key = content.substring(index, index + index2);
        if(funcMap[key]) {
            var tempIndex = funcMap[key](content, index+index2, key);
//            console.log("--->" + key + ":" + delStart + "  " + tempIndex);
            if(delStart >= 0){
                content = content.substring(0, index) + ";" + content.substring(tempIndex);
                continue;
            }
        }
        index += index2;
    }
//    console.log(content)
    return content;
}

module.exports = function(file, tempFile){
    console.log("delCode--->" + file + "--->" + tempFile);
    var content = _delCode(fs.readFileSync(file).toString());
    tempFile = tempFile || file;
    fs.writeFileSync(tempFile, content);
};
