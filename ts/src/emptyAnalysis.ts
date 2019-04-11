import { Analyzer, main, NPCallbacks, Sandbox } from "./nodeprof";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    public sandbox: Sandbox;

    constructor(sandbox) {
        this.sandbox = sandbox;
    }
    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethn, functionIid, functionSid) => {
        console.log("invokeFunPre", f, receiver, args, isConstructor, isMethn, functionIid, functionSid);
    }
    public invokeFun: NPCallbacks.invokeFun = (iid,  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid) => {
        console.log("invokeFun",  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid);
    }
    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        console.log("literal", val, hasGetterSetter);
    }
    public getFieldPre: NPCallbacks.getFieldPre = (iid, receiver, offset, isComputed, isOpAssign, isMethodCall) => {
        console.log("getFieldPre", receiver, offset, isComputed, isOpAssign, isMethodCall);
    }
    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssin, isMethodCall) => {
        console.log("getField", receiver, offset, val, isComputed, isOpAssin, isMethodCall);
    }
    public putFieldPre: NPCallbacks.putFieldPre = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        console.log("putFieldPre", receiver, offset, val, isComputed, isOpAssin);
    }
    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        console.log("putField", receiver, offset, val, isComputed, isOpAssin);
    }
    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        console.log("read", name, val, isGlobal, isScriptLocal);
    }
    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocan) => {
        console.log("write", name, val, originalValue, isGlobal, isScriptLocan);
    }
    public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
        console.log("functionEnter", f, receiver, args);
    }
    public functionExit: NPCallbacks.functionExit = (iid,  returnVal, wrappedExceptionVal?) => {
        console.log("functionExit",  returnVal, wrappedExceptionVal);
    }
    public binaryPre: NPCallbacks.binaryPre = (iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) => {
        console.log("binaryPre", op, left, right, isOpAssign, isSwitchCaseComparison, isComputed);
    }
    public binary: NPCallbacks.binary = (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) => {
        console.log("binary", op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed);
    }
    public unaryPre: NPCallbacks.unaryPre = (iid, op, left) => {
        console.log("unaryPre", op, left);
    }
    public unary: NPCallbacks.unary = (iid, op, left, result) => {
        console.log("unary", op, left, result);
    }
    public conditional: NPCallbacks.conditional = (iid, result) => {
        console.log("conditional", result);
    }
    public endExecution: NPCallbacks.endExecution = () => {
        console.log("endExecution");
    }
    public forinObject: NPCallbacks.forinObject = (iid, val) => {
        console.log("forinObject", val);
    }
    public declare: NPCallbacks.declare = (iid, name, val, isArgument, argumentIndex, isCatchParam) => {
        console.log("declare", name, val, isArgument, argumentIndex, isCatchParam);
    }
    public _return: NPCallbacks._return = (iid, val) => {
        console.log("_return", val);
    }
    public _throw: NPCallbacks._throw = (iid, val) => {
        console.log("_throw", val);
    }
    public _with: NPCallbacks._with = (iid, val) => {
        console.log("_with", val);
    }
    public endExpression: NPCallbacks.endExpression = (iid) => {
        console.log("endExpression");
    }
}

const main: main = (sandbox) => {
    // console.log("initializing...");
    sandbox.analysis = (new Analyze(sandbox));
};

main(J$);
