import { Analyzer, main, NPCallbacks, Sandbox } from "../nodeprof";
import MyLogger from "./mylogger";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class DynCG implements Analyzer {
  private sandbox: Sandbox;

  // @ts-ignore
  private cg : Map = new Map();
  // @ts-ignore
  private iidToLocation : Map = new Map();
  private lastCallsite = undefined;
  // @ts-ignore
  private logger : MyLogger = new MyLogger(J$.initParams.outputFile);

  constructor(sandbox: Sandbox) {
    this.sandbox = sandbox;
  }

  private addCallee(callsite, callee) {
    callsite = callsite === undefined ? "GraalVM" : callsite;
    this.cg.has(callsite) ? this.cg.get(callsite).add(callee) : this.cg.set(callsite, new Set([callee]));
  }

  public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethn, functionIid, functionSid) => {
    this.iidToLocation.set(iid, J$.iidToLocation(iid));
    this.lastCallsite = iid;
  }

  public invokeFun: NPCallbacks.invokeFun = (iid,  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid) => {
    this.lastCallsite = undefined;
  }

  public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
    this.iidToLocation.set(iid, J$.iidToLocation(iid));
    this.addCallee(this.lastCallsite, iid);
  }

  public endExecution: NPCallbacks.endExecution = () => {
    //Output location information
    const logger = this.logger;
    this.iidToLocation.forEach(function (value, key) {
      logger.log(`// ${key}: ${value}`);
    });

    //Output dynamic call graph in Dot format
    logger.log("digraph {");
    this.cg.forEach(function (value, key) {
      value.forEach(function (callee) {
        logger.log(`  ${key} -> ${callee};`);
      })
    });
    logger.log("}");
  }
}
