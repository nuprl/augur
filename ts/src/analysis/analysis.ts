import {
    Analyzer,
    Receiver,
    Invoked,
    NPCallbacks,
    Sandbox,
    ExceptionVal
} from "../nodeprof";
import {
    AbstractMachine,
    DynamicDescription, Location,
    PropertyDescription,
    RawVariableDescription,
    ShadowMemory, SourcePosition, SourceSpan,
    StaticDescription,
} from "../types";
import JSWriter from "../abstractMachine/JSWriter";
import logger from "./logger";
import {parseIID} from "../utils";
import WeakMapShadow from "./shadow/weakMapShadow";
import {useNativeRecorder, getModelledFunctionNames} from "../native/native";
import { isModuleBlock } from "typescript";

// TODO: document this
// load in polyfills
require("../native/polyfill");

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// The actual "analysis" registered with NodeProf. This is the first stop for
// all instrumentation callbacks. Most of these callbacks are passed literally
// to an abstract machine, which is responsible for performing any actual
// analysis.
export default class Analysis implements Analyzer {
    private sandbox: Sandbox;
    private state: AbstractMachine = new JSWriter();

    public promiseMap: Map<any, DynamicDescription> = new Map<any, DynamicDescription>();
    public asyncPromiseMap: Map<any, DynamicDescription> = new Map<any, DynamicDescription>();

    // The names of all modelled functions for which we need no instrumentation.
    private modelledFunctionNames : string[] = getModelledFunctionNames();

    // A stack of booleans indicating if we are skipping the currently executing function.
    // It's a stack b/c we can't stop Augur from analyzing things inside of a skipped function,
    // so we may encouter arbitrarily many functions we want to skip.
    private inModelledFunction : boolean[] = [];

    // keeping track of the functions entered and exited using the
    // `functionEnter` and `functionExit` callbacks. this is because the
    // `functionExit` callback doesn't provide the function that is
    // being exited.
    private functionCallStack: DynamicDescription[] = ["global" as DynamicDescription];

    // shadow memory
    public shadowMemory: ShadowMemory = new WeakMapShadow();

    // Tracks which kind of functions are native throughout instrumentation
    // This means the isNative() will only need to be called once instead of twice when entering a new function.
    private isNativeMap: WeakMap<Invoked, boolean> = new WeakMap<Invoked, boolean>();

    private eventLoopOver: Boolean = false;

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name: RawVariableDescription, type: string) => {
        if (this.inModelledFunction.length > 0) return;

        if (this.eventLoopOver) {
            // call shadow memory to get correct scope
        }
        this.shadowMemory.declare(name);
        this.state.initVar([this.shadowMemory.getFullVariableName(name),
            {type: "declaration",
            location: parseIID(iid),
            name: name}]);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        if (this.inModelledFunction.length > 0) return;

        // logger.info("literal", val, hasGetterSetter);
        if (typeof val === "object") {

            this.shadowMemory.initialize(val);

            const keys = [];

            // This works as long as there's no number keys
            // Originally placed key in the back of the array then reversed it.
            // Now adds each val to the front of the array using unshift()
            for (const k in val) {
                if (val.hasOwnProperty(k)) {
                   // this.state.writeProperty([this.shadowMemory.getShadowID(val), k as PropertyDescription, {}]);
                     keys.unshift(k);
                }
            }

            logger.info("keys", keys);
             for (const k of keys) {
                 this.state.writeProperty([this.shadowMemory.getShadowID(val), k as PropertyDescription, {}]);
             }
        }
        logger.info("val", val);
        this.state.literal(
            [{type: "literal",
            location: parseIID(iid)}]);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        if (this.inModelledFunction.length > 0) return;

        let description: StaticDescription = {
            type: "variable",
            location: parseIID(iid),
            name: name};
        this.state.readVar([this.shadowMemory.getFullVariableName(name), description]);

        if (name === "arguments") {
            this.state.initializeArgumentsObject([this.shadowMemory.getShadowID(val), description]);
        }
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        if (this.inModelledFunction.length > 0) return;

        this.state.writeVar([this.shadowMemory.getFullVariableName(name),
            {type: "variable",
            location: parseIID(iid),
            name: name}]);
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
        if (this.inModelledFunction.length > 0) return;

       console.log("endStatement: " + type);
        this.state.pop(
            [{type: "expr",
            location: parseIID(iid)}]);
    }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        if (this.inModelledFunction.length > 0) return;

        this.state.binary([
            {type: "expr",
            location: parseIID(iid)}]);
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        if (this.inModelledFunction.length > 0) return;

        this.state.unary([
            {type: "expr",
            location: parseIID(iid)}]);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        if (this.inModelledFunction.length > 0) return;

        this.shadowMemory.initialize(receiver);
        this.state.readProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            isMethodCall,
            {type: "expr", location: parseIID(iid)}]);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        if (this.inModelledFunction.length > 0) return;

        this.shadowMemory.initialize(receiver);
        this.state.writeProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            {type: "expr", location: parseIID(iid)}]);
    };

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethod) => {
        if (this.inModelledFunction.length > 0) return;

        let description: StaticDescription = {type: "functionInvocation",
            location: parseIID(iid)};

        this.shadowMemory.initialize(receiver);
        this.shadowMemory.initialize(f);
        this.shadowMemory.functionEnter(f);
        this.shadowMemory.declare("this" as RawVariableDescription);
        this.shadowMemory.declare("arguments" as RawVariableDescription);

        if (f.name && f.name != "") {
            description.name = f.name;
        }
        // Checks if the function is a native function or that it exists in the map already
        // since the same function can be invoked multiple times throughout a program.
        if (this.isNativeMap.get(f) || this.isNative(f)) {
            this.isNativeMap.set(f, true);
            // TODO: make sure this works using regular builtins and
            //  reassigned builtins

            let functionShadowID = this.shadowMemory.getShadowID(f);
            let receiverShadowID = this.shadowMemory.getShadowID(receiver);
            // console.error(this.shadowMemory.getFullVariableName("arguments"));

            this.state.builtin(
                [functionShadowID,
                    receiverShadowID,
                    args.length,
                    // TODO: should this be description.name?
                    //       we need a way to correctly name buiiltins
                    useNativeRecorder(this, functionShadowID, receiverShadowID, receiver, args, isMethod, description),
                    isMethod,
                    description]);
        } else {
            this.isNativeMap.set(f, false);
            // Get dynamic shadowIDs for all args, and pass that to the abstract machine.
            const shadowIDs = [];
            for (const arg of args) {
                shadowIDs.push(this.shadowMemory.getShadowID(arg));
                if (typeof arg === 'object' &&
                    arg !== null) {
                    const objectsToProcess = [arg];
                    // Recursively get shadowIDs of sub-objects.
                    while (objectsToProcess.length > 0) {
                        const thisArg = objectsToProcess.pop();
                        for (const field in thisArg) {
                            // This check prevents pollution with `undefined` shadowIDs
                            if (this.shadowMemory.getShadowID(thisArg[field]))
                                shadowIDs.push(this.shadowMemory.getShadowID(thisArg[field]));
                            if (typeof thisArg[field] === 'object' &&
                                thisArg[field] !== null) {
                                    objectsToProcess.push(thisArg[field]);
                                }
                        }
                    }
                }
            }
            this.state.functionInvokeStart([this.shadowMemory.getShadowID(f),
                f.length,
                args.length,
                shadowIDs,
                // this.shadowMemory.getShadowID(receiver),
                description]);
        }
    }

    public _return: NPCallbacks._return = (iid, val) => {
        if (this.inModelledFunction.length > 0) {
            return;
        }
        const shadowIDsInReturn = [this.shadowMemory.getShadowID(val)];
        const objectsToProcess = [val];
        while (objectsToProcess.length > 0) {
            const obj = objectsToProcess.pop();
            if (typeof obj === 'object' && obj !== null) {
                // Check fields.
                for (const field in obj) {
                    // If it's an object, add it, and get its shadowID
                    if (typeof obj[field] === 'object' && obj[field] !== null) {
                        objectsToProcess.push(obj[field]);
                        shadowIDsInReturn.push(this.shadowMemory.getShadowID(obj[field]));
                    }
                }
            }
        }
        this.state.functionReturn([
            this.functionCallStack[this.functionCallStack.length - 1],
            shadowIDsInReturn,
            {type: "functionReturn", location: parseIID(iid)}]);
    }

    public invokeFun: NPCallbacks.invokeFun = (iid: number,  f: Invoked, receiver: Receiver, args: any[], result: any, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number) => {
        // Check if this is a modelled function.
        // console.log('[!!] invokeFun...');
        // console.log('[!!] f.name: ' + f.name);
        // console.log('this.modelledFunctionNames:');
        // console.log(this.modelledFunctionNames);
        if (this.modelledFunctionNames.indexOf(f.name) > -1) {
            // If so, we're leaving a function that was skipped.
            // console.log('[!!] Popping in invokeFun!');
            this.inModelledFunction.pop();
        }
        // Should we (continue to) skip stuff?
        if (this.modelledFunctionNames.length > 0) {
            return;
        }
        let description: StaticDescription = {type: "functionReturn",
            location: parseIID(iid)};
        if (f.name && f.name != "") {
            description.name = f.name;
        }

        let returnValueName = this.shadowMemory.getShadowID(result);

        this.shadowMemory.functionExit();
        if (this.isNativeMap.get(f)) {
            this.state.builtinExit([this.shadowMemory.getShadowID(f), returnValueName, description]);
        } else {
            this.state.functionInvokeEnd([this.shadowMemory.getShadowID(f), description]);
        }
    }

    public functionEnter: NPCallbacks.functionEnter = (iid: number, f: Invoked, receiver: Receiver, args: any[]) => {
        // Should we skip this?
        if (this.inModelledFunction.length > 0)
            return;

        let functionName = this.shadowMemory.getShadowID(f);
        this.functionCallStack.push(functionName);
        this.state.functionEnter([functionName, args.length, {type: "functionEnter", location: parseIID(iid)}]);
        // The following if-statement defines special functionality for functions
        // that are executed as part of the promise wrapper.
        //
        // getTaintFor is used when we need to get the taint for promise resolution 
        // - (e.g., when it's resolved value is needed)
        // getResolveFor is used to figure out the taint when `resolve` is called in a promise executor 
        // - (essentially, we intercept the call to resolve)
        if (f.name === "augur_executingReaction") {
            this.state.promiseReaction([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        } else if (f.name === "augur_executingRejection") {
            this.state.promiseReject([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        } else if (f.name === "augur_executingFinally") {
            // ???
            this.state.promiseReaction([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        } else if (f.name === "augur_getResolveFor") {
            this.state.promiseResolve([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        } else if (f.name === "augur_getRejectFor") {
            this.state.promiseReject([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        }

        // Lastly, check if we should begin skipping.
        if (this.modelledFunctionNames.indexOf(f.name) > -1) {
            console.log('[!!] Pushing in functionEnter!');
            this.inModelledFunction.push(true);
        }
    }

    public functionExit: NPCallbacks.functionExit = (iid: number, returnVal: any, wrappedExceptionVal?: ExceptionVal) => {
        if (this.inModelledFunction.length > 0) return;

        let f = this.functionCallStack.pop();
        if (f === "global@1") {
            this.eventLoopOver = true;
        }
        this.state.functionExit([f, f.length, {type: "expr", location: parseIID(iid)}]);
    }

    public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
        if (this.inModelledFunction.length > 0) return;

        // TODO: properly design a mechanism to track taint with eval
        // this.state.builtin(["eval", 1, {type: "builtin", location: parseIID(iid)};]);
        // eval always takes a single arg
    }

    public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
        if (this.inModelledFunction.length > 0) return;

        // this.state.conditional({type: "expr", location: parseIID(iid)};);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        if (this.inModelledFunction.length > 0) return;

        console.log('[!!] Ending execution!');
        this.state.endExecution([]);

        // Stupid hack: waiting before ending, for stragglers.
        // ACTUALLY we can't do this...
        // setTimeout(() => { 
        //     console.log('[!!] Ending execution for real!');
        //     this.state.endExecution([]);
        // }, 0);
    }

    public asyncFunctionEnter:  NPCallbacks.asyncFunctionEnter = (iid: number) => {
        if (this.inModelledFunction.length > 0) return;

        this.state.asyncFunctionEnter([{type: "asyncFunctionEnter", location: parseIID(iid)}])
    }

    public asyncFunctionExit: NPCallbacks.asyncFunctionExit = (iid: number, result: any, exceptionVal: ExceptionVal) => {
        if (this.inModelledFunction.length > 0) return;

        console.log("asyncExit: " + result)
        this.state.asyncFunctionExit([iid, this.getAsyncPromiseId(result),  result, exceptionVal, {type: "asyncFunctionExit", location: parseIID(iid)}])
    }

    public awaitPre: NPCallbacks.awaitPre = (iid: number, promiseOrAwaitedVal: any) => {
        if (this.inModelledFunction.length > 0) return;

        this.shadowMemory.awaitPre(iid);
        console.log('awaitPre: ' + JSON.stringify(promiseOrAwaitedVal));
        console.log('awaitPre: this.getPromiseId(promiseOrAwaitedVal) ' + this.getPromiseId(promiseOrAwaitedVal));
        this.state.awaitPre([iid, this.getPromiseId(promiseOrAwaitedVal), promiseOrAwaitedVal,
            {type: "awaitPre", location: parseIID((iid))}]);
    }

    public awaitPost: NPCallbacks.awaitPost = (iid: number, promiseOrValAwaited: any, valResolveOrRejected: any, isPromiseRejected: boolean) => {
        if (this.inModelledFunction.length > 0) return;

        this.shadowMemory.awaitPost(iid);
        this.state.awaitPost([iid, this.getPromiseId(promiseOrValAwaited), promiseOrValAwaited, valResolveOrRejected,
            {type: "awaitPost", location: parseIID((iid))}]);
    }

    // TODO: fix this hack with real instrumentation
    private isNative(fun: Function): boolean {
        // apparently this kinda stuff isn't very slow
        // https://stackoverflow.com/questions/6598945/detect-if-function-is-native-to-browser
        // but doesn't cover all 1592624 of the corner cases

        // actually that stackoverflow post is a terrible experiment and
        // doesn't represent real code
        return /\{\s+\[native code\]/
            .test(Function.prototype.toString.call(fun)) ||
            // TODO: Not sure how happy I am about this currently. This could cause issues if, e.g.,
            //       the 
            this.modelledFunctionNames.indexOf(fun.name) > -1;
    }

    getPromiseId(p: any) {
        // console.log('[!!] p.augur_pid: ' + p.augur_pid);
        if (p != undefined && p.augur_pid != undefined) {
            // console.log('[!!] True');
            return 'promise^' + p.augur_pid  as DynamicDescription;
        } else {
            // console.log('[!!] False');
            return this.getAsyncPromiseId(p);
        }
    }

    getAsyncPromiseId(p: any) {
        if (!this.asyncPromiseMap.has(p)) {
            this.asyncPromiseMap.set(p, ("async^" + this.asyncPromiseMap.size.toString()) as DynamicDescription);
        }
        return this.asyncPromiseMap.get(p);
    }
}
