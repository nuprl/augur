#!/usr/bin/env node

'use strict';

import wos from '../index.js';

let argv = {};
let processArgv = process.argv.slice(2);
let firstPrint = true;

// Create a dictionary of argvs
for (let i in processArgv) {
  argv[ processArgv[i] ] = true;
}

if (argv.name) {
  let verbose = argv['-v'] || argv['--verbose'];

  printOut(wos.getOSName(verbose));
}

if (argv['-p']) {
  printOut(wos.platform);
}

if (argv['-arch']) {
  printOut(wos.arch);
}

// Default output if none arg is passed
if (firstPrint || argv['-help']) {
  printOut(`Usage: wos [name] [-p] [-arch] [-v] [--verbose] [-help]

    Node What Operation System - Utility for operation system informations
  `)
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
