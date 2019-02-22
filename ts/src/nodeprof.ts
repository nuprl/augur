// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// tslint:disable:max-line-length
// tslint:disable:no-namespace
// tslint:disable:ban-types [Function]
declare global {
    const J$: Sandbox;
}

export interface AnalyzerOptions {
    excludes?: string;
}

export interface Sandbox {
    analysis: Analyzer;
    iidToLocation(iid: number): string;
    addAnalysis(analysis: Analyzer, options?: AnalyzerOptions): void;
}

export interface ExceptionVal {
    exception: any;
}

export type Accessor = string | number;

// for more info:
// https://github.com/Samsung/jalangi2/blob/master/src/js/runtime/analysisCallbackTemplate.js

/**
 * Note: None of the return types are currently annotated correctly because we don't care at the moment.
 */
export namespace NPCallbacks {
    export type invokeFunPre = (iid: number, f: Function, receiver: Object, args: any[], isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number) => void;
    export type invokeFun = (iid: number,  f: Function, receiver: Object, args: any[], result: any, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number) => void;
    export type literal = (iid: number, val: any, hasGetterSetter: boolean) => void;
    export type getFieldPre = (iid: number, receiver: Object, offset: Accessor, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean) => void;
    export type getField = (iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean) => void;
    export type putFieldPre = (iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean) => void;
    export type putField = (iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean) => void;
    export type read = (iid: number, name: string, val: any, isGlobal: boolean, isScriptLocal: boolean) => void;
    export type write = (iid: number, name: string, val: any, originalValue: any, isGlobal: boolean, isScriptLocal: boolean) => void;
    export type functionEnter = (iid: number, f: Function, receiver: Object, args: any[]) => void;
    export type functionExit = (iid: number,  returnVal: any, wrappedExceptionVal?: ExceptionVal) => void;
    export type binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => void;
    export type binary = (iid: number, op: string, left: any, right: any, result: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => void;
    export type unaryPre = (iid: number, op: string, left: any) => void;
    export type unary = (iid: number, op: string, left: any, result: any) => void;
    export type conditional = (iid: number, result: any) => void;
    export type endExecution = () => void;

    // Nodeprof only functions
    export type builtinEnter = (name: string, f: Function, receiver: Object, args: any[]) => void;
    export type builtinExit = (name: string, returnVal: any) => void;
    export type evalFunctionPre = (iid: number, f: Function, receiver: Object, args: any[]) => void;
    export type evalFunctionPost = (iid: number, f: Function, receiver: Object, args: any[], ret: any) => void;
    export type evalPre = (iid: number, str: string) => void;
    export type evalPost = (iid: number, str: string) => void;

    // Not yet supported by Nodeprof
    // type forinObject = (iid: number, val: any) => void;
    // type declare = (iid: number, name: string, val: any, isArgument: boolean, argumentIndex: number, isCatchParam: boolean) => void;
    // type _return = (iid: number, val: any) => void;
    // type _throw = (iid: number, val: any) => void;
    // type _with = (iid: number, val: any) => void;
    // type endExpression = (iid: number) => void;
    // type onReady = (cb: () => void) => void;

    // Jalangi only due to implementation
    // type = runInstrumentedFunctionBody = (iid: number, f: Function, functionIid: number, functionSid: number) => void;
    // type = instrumentCodePre = (iid: number, code, isDirect: boolean) => void;
    // type = instrumentCode = (iid: number, newCode, newAst, isDirect: boolean) => void;
    // type = scriptEnter = (iid: number, instrumentedFileName: string, originalFileName: string) => void;
    // type = scriptExit = (iid: number, wrappedExceptionVal?: ExceptionVal) => void;
}
export interface Analyzer {
    invokeFunPre?: NPCallbacks.invokeFunPre;
    invokeFun?: NPCallbacks.invokeFun;
    literal?: NPCallbacks.literal;
    getFieldPre?: NPCallbacks.getFieldPre;
    getField?: NPCallbacks.getField;
    putFieldPre?: NPCallbacks.putFieldPre;
    putField?: NPCallbacks.putField;
    read?: NPCallbacks.read;
    write?: NPCallbacks.write;
    functionEnter?: NPCallbacks.functionEnter;
    functionExit?: NPCallbacks.functionExit;
    binaryPre?: NPCallbacks.binaryPre;
    binary?: NPCallbacks.binary;
    unaryPre?: NPCallbacks.unaryPre;
    unary?: NPCallbacks.unary;
    conditional?: NPCallbacks.conditional;
    endExecution?: NPCallbacks.endExecution;

    // Nodeprof only functions
    builtinEnter?: NPCallbacks.builtinEnter;
    builtinExit?: NPCallbacks.builtinExit;
    evalFunctionPre?: NPCallbacks.evalFunctionPre;
    evalFunctionPost?: NPCallbacks.evalFunctionPost;
    evalPre?: NPCallbacks.evalPre;
    evalPost?: NPCallbacks.evalPost;
}

export type main = (sandbox: Sandbox) => void;
