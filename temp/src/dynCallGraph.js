/*
 * Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved.
 */

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

var fs = require('fs');

(function(sandbox){
  function DynCG() {


    class Logger {
      constructor(fileName){
        this.fileName = fileName;
        fs.openSync(fileName, "w"); // create empty file
      }

      log(s){
        fs.appendFileSync(this.fileName, s + "\n");
      }

    }

    let cg = new Map();
    let iidToLocation = new Map();
    let lastCallsite = undefined;
    let logger = new Logger(J$.initParams.outputFile);

    function addCallee(callsite, callee) {
      callsite = callsite === undefined ? "GraalVM" : callsite;
      cg.has(callsite) ? cg.get(callsite).add(callee) : cg.set(callsite, new Set([callee]));
    }

    this.invokeFunPre = function(iid, f, base, args, isConstructor, isMethod) {
      iidToLocation.set(iid, J$.iidToLocation(iid));
      lastCallsite = iid;
    };

    this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod) {
      lastCallsite = undefined;
    }

    this.functionEnter = function (iid, func, receiver, args) {
      iidToLocation.set(iid, J$.iidToLocation(iid));
      addCallee(lastCallsite, iid);
    };

    this.endExecution = function() {
      //Output location information
      iidToLocation.forEach(function (value, key) {
        logger.log(`// ${key}: ${value}`);
      });

      //Output dynamic call graph in Dot format
      logger.log("digraph {");
      cg.forEach(function (value, key) {
        value.forEach(function (callee) {
          logger.log(`  ${key} -> ${callee};`);
        })
      });
      logger.log("}");
    };

  }
  sandbox.analysis = new DynCG();
})(J$);