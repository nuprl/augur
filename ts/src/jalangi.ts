// tslint:disable:max-line-length
// tslint:disable:ban-types [Function]
declare global {
    const J$: Sandbox;
}
export interface Sandbox {
    analysis: Analyzer;
    iidToLocation(iid: number): string;
}

interface ExceptionVal {
    exception: any;
}

type Accessor = string | number;

// for more info:
// https://github.com/Samsung/jalangi2/blob/master/src/js/runtime/analysisCallbackTemplate.js
export interface Analyzer {
    invokeFunPre?(iid: number, f: Function, receiver: Object, args: any[], isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number): void;
    invokeFun?(iid: number,  f: Function, receiver: Object, args: any[], result: any, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number): void;
    literal?(iid: number, val: any, hasGetterSetter: boolean): void;
    forinObject?(iid: number, val: any): void;
    declare?(iid: number, name: string, val: any, isArgument: boolean, argumentIndex: number, isCatchParam: boolean): void;
    getFieldPre?(iid: number, receiver: Object, offset: Accessor, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean): void;
    getField?(iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean): void;
    putFieldPre?(iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean): void;
    putField?(iid: number, receiver: Object, offset: Accessor, val: any, isComputed: boolean, isOpAssign: boolean): void;
    read?(iid: number, name: string, val: any, isGlobal: boolean, isScriptLocal: boolean): void;
    write?(iid: number, name: string, val: any, lhs: any, isGlobal: boolean, isScriptLocal: boolean): void;
    _return?(iid: number, val: any): void;
    _throw?(iid: number, val: any): void;
    _with?(iid: number, val: any): void;
    functionEnter?(iid: number, f: Function, receiver: Object, args: any[]): void;
    functionExit?(iid: number,  returnVal: any, wrappedExceptionVal?: ExceptionVal): void;
    scriptEnter?(iid: number, instrumentedFileName: string, originalFileName: string): void;
    scriptExit?(iid: number, wrappedExceptionVal?: ExceptionVal): void;
    binaryPre?(iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean): void;
    binary?(iid: number, op: string, left: any, right: any, result: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean): void;
    unaryPre?(iid: number, op: string, left: any): void;
    unary?(iid: number, op: string, left: any, result: any): void;
    conditional?(iid: number, result: any): void;
    instrumentCodePre?(iid: number, code, isDirect: boolean): void;
    instrumentCode?(iid: number, newCode, newAst, isDirect: boolean): void;
    endExpression?(iid: number): void;
    endExecution?(): void;
    runInstrumentedFunctionBody?(iid: number, f: Function, functionIid: number, functionSid: number): void;
    onReady?(cb: () => void): void;
}

export type main = (sandbox: Sandbox) => void;
