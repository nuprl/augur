// tslint:disable:max-line-length
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

// for more info:
// https://github.com/Samsung/jalangi2/blob/master/src/js/runtime/analysisCallbackTemplate.js
export interface Analyzer {
    invokeFunPre?(iid: number, f, base, args: any[], isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number): void;
    invokeFun?(iid: number,  f, base, args: any[], result, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number): void;
    literal?(iid: number, val, hasGetterSetter: boolean): void;
    forinObject?(iid: number, val): void;
    declare?(iid: number, name: string, val, isArgument: boolean, argumentIndex: number, isCatchParam: boolean): void;
    getFieldPre?(iid: number, base, offset, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean): void;
    getField?(iid: number, base, offset, val, isComputed: boolean, isOpAssign: boolean, isMethodCall: boolean): void;
    putFieldPre?(iid: number, base, offset, val, isComputed: boolean, isOpAssign: boolean): void;
    putField?(iid: number, base, offset, val, isComputed: boolean, isOpAssign: boolean): void;
    read?(iid: number, name: string, val, isGlobal, isScriptLocal): void;
    write?(iid: number, name: string, val, lhs, isGlobal, isScriptLocal): void;
    _return?(iid: number, val): void;
    _throw?(iid: number, val): void;
    _with?(iid: number, val): void;
    functionEnter?(iid: number, func, receiver, args: any[]): void;
    functionExit?(iid: number,  returnVal, wrappedExceptionVal?: ExceptionVal): void;
    scriptEnter?(iid: number, instrumentedFileName: string, originalFileName: string): void;
    scriptExit?(iid: number, wrappedExceptionVal?: ExceptionVal): void;
    binaryPre?(iid: number, op: string, left, right, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean): void;
    binary?(iid: number, op: string, left, right, result, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean): void;
    unaryPre?(iid: number, op: string, left): void;
    unary?(iid: number, op: string, left, result): void;
    conditional?(iid: number, result): void;
    instrumentCodePre?(iid: number, code, isDirect: boolean): void;
    instrumentCode?(iid: number, newCode, newAst, isDirect: boolean): void;
    endExpression?(iid: number): void;
    endExecution?(): void;
    runInstrumentedFunctionBody?(iid: number, f, functionIid: number, functionSid: number): void;
    onReady?(cb: () => void): void;
}

export type main = (sandbox: Sandbox) => void;
