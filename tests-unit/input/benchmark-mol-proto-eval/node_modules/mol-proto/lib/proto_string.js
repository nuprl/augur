'use strict';


var __ = require('./proto_object');


/**
 * - [firstUpperCase](#firstUpperCase)
 * - [firstLowerCase](#firstLowerCase)
 * - [toRegExp](#toRegExp)
 * - [toFunction](#toFunction)
 * - [toDate](#toDate)
 * - [toQueryString](#toQueryString)
 * - [fromQueryString](#fromQueryString)
 * - [jsonParse](#jsonParse)
 * - [hashCode](#hashCode)
 * - [unPrefix](#unPrefix)
 * - [format](#format)
 */
 var stringMethods = module.exports = {
    firstUpperCase: firstUpperCase,
    firstLowerCase: firstLowerCase,
    toRegExp: toRegExp,
    toFunction: toFunction,
    toDate: toDate,
    toQueryString: toQueryString,
    fromQueryString: fromQueryString,
    jsonParse: jsonParse,
    hashCode: hashCode,
    unPrefix: unPrefix,
    format: format
};


/**
 * Returns string with the first character changed to upper case.
 *
 * @param {String} self A string that will have its first character replaced
 */
function firstUpperCase() {
    return this ? this[0].toUpperCase() + this.slice(1) : this;
}


/**
 * Returns string with the first character changed to lower case.
 *
 * @param {String} self A string that will have its first character replaced
 */
function firstLowerCase() {
    return this ? this[0].toLowerCase() + this.slice(1) : this;
}


/**
 * Converts string created by `toString` method of RegExp back to RegExp
 *
 * @param {String} self string containing regular expression including enclosing "/" symbols and flags
 * @return {RegExp}
 */
function toRegExp() {
    var rx = this.match(regexpStringPattern);
    if (rx) return new RegExp(rx[1], rx[2]);
}
var regexpStringPattern = /^\/(.*)\/([gimy]*)$/;


/**
 * Converts string created by `toString` method of function back to function
 *
 * @param {String} self string containing full function code
 * @return {Function}
 */
function toFunction() {
    var func;
    var code = 'func = ' + this + ';';
    try {
        eval(code);
        return func;
    } catch(e) {
        return;
    }
}


/**
 * Converts string to date in a safe way so that the resiult is undefined if date is invalid
 *
 * @param {String|Date} self string or date object to convert to VALID date
 * @return {[type]} [description]
 */
function toDate() {
    if (! this) return;
    try {
        var date = new Date(this);
    } catch (e) {}
    if (date && date.getTime && !isNaN(date.getTime()))
        return date;
}


/**
 * Convert params object to a url style query string (without "?")
 * 
 * @param {Object} self The object hash to be converted
 * @param {Function} encode optional function used to encode data, encodeURIComponent is used if not specified
 * @return {String} the resulting query string
 */
function toQueryString(encode) {
    var qs = ''
        , params = this || {}
        , encode = encode || encodeURIComponent;

    __.eachKey.call(params, function(value, key) {
        qs += key + '=' + encode(value) + '&';
    });
    
    return qs.slice(0, -1);
}


/**
 * Convert url style query string (without "?") into object hash
 * 
 * @param {String} self The string to be converted
 * @param {Function} decode optional decode function, decodeURIComponent will be used if not supplied
 * @return {Object} The resulting object hash
 */
function fromQueryString(decode) {
    var pairs = this.split('&')
        , results = {}
        , decode = decode || decodeURIComponent;

    pairs.forEach(function(pair) {
        var splitPair = pair.split('=');
        if (splitPair.length < 2) return;
        var key = splitPair[0]
            , value = decode(splitPair[1] || '');
        if (!key) return;
        results[key] = value;
    });

    return results;
}


/**
 * Safe JSON.parse, returns undefined if JSON.parse throws an exception
 *
 * @param {String} self JSON string representation of object
 * @return {Object|undefined}
 */
function jsonParse() {
    try {
        return JSON.parse(this);
    } catch (e) {}
}


/**
 * Dan Bernstein's algorythm to create hash from string
 *
 * @param {String} self string to convert to hash
 * @return {Number}
 */
function hashCode() {
    var hash = 5381
        , str = this
        , len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash;
}


/**
 * Removes given prefix from the string. If string does not begin from the prefix, returns undefined
 * 
 * @param {String} self
 * @return {String}
 */
function unPrefix(str) {
    if (this.indexOf(str) == 0)
        return this.replace(str, '');
}


/**
 * Regex used to identify format vars
 * @type {RegExp}
 */
var formatRegexp = /\$[0-9]+|\$\$/g;

/**
 * String formatting utility to swap out tokens for variables.
 * @param  {String} this The string to be formatted 
 * @param  {Array}  args The values to be formatted
 * @return {String}      The formatted string
 */
function format() { // , ... arguments
    var str = this;
    var args = arguments;
    return str.replace(formatRegexp, function (item) {
        if (item == '$$') return '$';
        item = item.slice(1);
        return args[item - 1];
    });
};
