'use strict';

var util = require('util');
var styles = {
    //styles
    'bold': ['\u001b[1m', '\u001b[22m'],
    'italic': ['\u001b[3m', '\u001b[23m'],
    'underline': ['\u001b[4m', '\u001b[24m'],
    'inverse': ['\u001b[7m', '\u001b[27m'],
    //grayscale
    'white': ['\u001b[37m', '\u001b[39m'],
    'grey': ['\u001b[90m', '\u001b[39m'],
    'black': ['\u001b[30m', '\u001b[39m'],
    //colors
    'blue': ['\u001b[34m', '\u001b[39m'],
    'cyan': ['\u001b[36m', '\u001b[39m'],
    'green': ['\u001b[32m', '\u001b[39m'],
    'magenta': ['\u001b[35m', '\u001b[39m'],
    'red': ['\u001b[31m', '\u001b[39m'],
    'yellow': ['\u001b[33m', '\u001b[39m']
};

var logger = function (prefix, level) {
    return {
        level: level,
        color: styles.grey,

        logLevel: function (level) {
            this.level = level;
        },

        trace: function (message) {
            if (this.level <= levels.TRACE) {
                this.color = styles.grey;
                this._print(util.format.apply(null, arguments));
            }
        },

        info: function (message) {
            if (this.level <= levels.INFO) {
                this.color = styles.white;
                this._print(util.format.apply(null, arguments));
            }
        },

        debug: function (message) {
            if (this.level <= levels.DEBUG) {
                this.color = styles.green;
                this._print(util.format.apply(null, arguments));
            }
        },
        warn: function (message) {
            if (this.level <= levels.WARN) {
                this.color = styles.yellow;
                this._print(util.format.apply(null, arguments));
            }
        },

        error: function (message) {
            if (this.level <= levels.ERROR) {
                this.color = styles.red;
                this._print(util.format.apply(null, arguments));
            }
        },

        _print: function (message) {
            console.log(this.color[0] + ( '[' + prefix + ']: ') + message + this.color[1]);
        }
    };
};
var levels = module.exports.levels = {
    TRACE: 0,
    INFO: 1,
    DEBUG: 2,
    WARN: 3,
    ERROR: 4,
    FATAL: 5,
    SILENT: 6
};

module.exports.level = 0;
module.exports.Logger = function Logger(prefix, level) {
    if (prefix.lastIndexOf('/') > -1) {
        prefix = prefix.slice(prefix.lastIndexOf('/') + 1);
    }
    level = level ? level : module.exports.level;
    return new logger(prefix, level);
};

