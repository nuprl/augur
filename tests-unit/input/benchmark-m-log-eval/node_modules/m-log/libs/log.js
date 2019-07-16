module.exports = new(function() {

    'use strict';
    var colors = require('colors');
    var colorTheme = {
        silly: 'rainbow',
        info: 'white',
        input: 'magenta',
        verbose: ['yellow', 'bgBlue'],
        prompt: ['grey', 'bold'],
        data: 'grey',
        help: 'blue',
        warn: 'yellow',
        debug: 'red',
        error: ['red', 'underline']
    }

    this.setColorTheme = function(colorTheme) {
      for(var i in colorTheme){
        // console.log('i', i);
        var theme = "";
        if(typeof colorTheme[i] === 'string'){
          theme = '"'+colorTheme[i] + '"';
          eval('colors.setTheme({' + i + ':' + theme + '});');
        }else{
          var v = "";
          var aryVal = (colorTheme[i]).toString().split(',');
          for (var x=0; x < aryVal.length; x++){
            if(x > 0) v += ',';
            v += '"' + aryVal[x] + '"';
          }
          eval('theme = {' + i + ':['+ v +']}');
          colors.setTheme(theme);
        }
      }
    }
    this.setColorTheme(colorTheme);
    this.getColorTheme = function() {
      return colorTheme;
    }

    var format = require('date-format');
    var DateTimeformat = '[hh:mm:ss.SSS]';
    this.setDateTimeformat = function(format) {
      DateTimeformat = format;
    }
    this.getDateTimeformat = function() {
      return DateTimeformat;
    }
    this.getTime = function(){
      return format.asString(DateTimeformat, new Date());
    }

    var isDebuggable = true;
    this.setDebuggable = function(bool) {
      isDebuggable = bool;
    }

    // Always Output
    this.out = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        console.log(n);
    }
    this.silly = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).silly);
        }
    }
    this.info = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).info);
        }
    }
    this.input = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).input);
        }
    }
    this.verbose = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).verbose);
        }
    }
    this.prompt = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).prompt);
        }
    }
    this.data = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).data);
        }
    }
    this.help = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).help);
        }
    }
    this.warn = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).warn);
        }
    }
    this.debug = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).debug);
        }
    }
    this.error = function(msg) {
        var n = ""
        for (var i = 0; i < arguments.length; i++) {
            if (i > 0) n += ',';
            n += JSON.stringify(arguments[i]);
        }
        if (isDebuggable) {
            console.log((this.getTime() + n).error);
        }
    }
})();
