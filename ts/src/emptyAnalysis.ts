import { Analyzer, main, NPCallbacks, Sandbox } from "./nodeprof";
import StateMachine from "./statemachine";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    public sandbox: Sandbox;

    constructor(sandbox) {
        this.sandbox = sandbox;
    }
    public invokeFunPre = (iid, f, receiver, args, isConstructor, isMethn, functionIid, functionSid) => {
        console.log("invokeFunPre", f, receiver, args, isConstructor, isMethn, functionIid, functionSid);
    }
    public invokeFun = (iid,  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid) => {
        console.log("invokeFun",  f, receiver, args, result, isConstructor, isMethod, functionIid, functionSid);
    }
    public literal = (iid, val, hasGetterSetter) => {
        console.log("literal", val, hasGetterSetter);
    }
    public getFieldPre = (iid, receiver, offset, isComputed, isOpAssign, isMethodCall) => {
        console.log("getFieldPre", receiver, offset, isComputed, isOpAssign, isMethodCall);
    }
    public getField = (iid, receiver, offset, val, isComputed, isOpAssin, isMethodCall) => {
        console.log("getField", receiver, offset, val, isComputed, isOpAssin, isMethodCall);
    }
    public putFieldPre = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        console.log("putFieldPre", receiver, offset, val, isComputed, isOpAssin);
    }
    public putField = (iid, receiver, offset, val, isComputed, isOpAssin) => {
        console.log("putField", receiver, offset, val, isComputed, isOpAssin);
    }
    public read = (iid, name, val, isGlobal, isScriptLocal) => {
        console.log("read", name, val, isGlobal, isScriptLocal);
    }
    public write = (iid, name, val, originalValue, isGlobal, isScriptLocan) => {
        console.log("write", name, val, originalValue, isGlobal, isScriptLocan);
    }
    public functionEnter = (iid, f, receiver, args) => {
        console.log("functionEnter", f, receiver, args);
    }
    public functionExit = (iid,  returnVal, wrappedExceptionVal?) => {
        console.log("functionExit",  returnVal, wrappedExceptionVal);
    }
    public binaryPre = (iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) => {
        console.log("binaryPre", op, left, right, isOpAssign, isSwitchCaseComparison, isComputed);
    }
    public binary = (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) => {
        console.log("binary", op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed);
    }
    public unaryPre = (iid, op, left) => {
        console.log("unaryPre", op, left);
    }
    public unary = (iid, op, left, result) => {
        console.log("unary", op, left, result);
    }
    public conditional = (iid, result) => {
        console.log("conditional", result);
    }
    public endExecution = () => {
        console.log("endExecution");
    }
    public forinObject = (iid, val) => {
        console.log("forinObject", val);
    }
    public declare = (iid, name, val, isArgument, argumentIndex, isCatchParam) => {
        console.log("declare", name, val, isArgument, argumentIndex, isCatchParam);
    }
    public _return = (iid, val) => {
        console.log("_return", val);
    }
    public _throw = (iid, val) => {
        console.log("_throw", val);
    }
    public _with = (iid, val) => {
        console.log("_with", val);
    }
    public endExpression = (iid) => {
        console.log("endExpression");
    }
}

const main: main = (sandbox) => {
    // console.log("initializing...");
    sandbox.analysis = (new Analyze(sandbox));
};

main(J$);
