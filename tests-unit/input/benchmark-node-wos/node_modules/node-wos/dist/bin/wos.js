#!/usr/bin/env node


'use strict';

var _index = require('../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = {};
var processArgv = process.argv.slice(2);
var firstPrint = true;

// Create a dictionary of argvs
for (var i in processArgv) {
  argv[processArgv[i]] = true;
}

if (argv.name) {
  var verbose = argv['-v'] || argv['--verbose'];

  printOut(_index2.default.getOSName(verbose));
}

if (argv['-p']) {
  printOut(_index2.default.platform);
}

if (argv['-arch']) {
  printOut(_index2.default.arch);
}

// Default output if none arg is passed
if (firstPrint || argv['-help']) {
  printOut('Usage: wos [name] [-p] [-arch] [-v] [--verbose] [-help]\n\n    Node What Operation System - Utility for operation system informations\n  ');
}

process.stdout.write('\n');

function printOut(stdout) {
  if (firstPrint) {
    process.stdout.write(stdout);
    firstPrint = false;
  } else {
    process.stdout.write('\t'.concat(stdout));
  }
}
