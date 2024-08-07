// The actual "analysis" registered with NodeProf. This is the first stop for
// all instrumentation callbacks. Most of these callbacks are passed literally
// to an abstract machine, which is responsible for performing any actual
// analysis.

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
    RunSpecification,
    ShadowMemory, SourcePosition, SourceSpan,
    StaticDescription,
} from "../types";
import JSWriter from "../abstractMachine/JSWriter";
import logger from "./logger";
import {createAbstractMachine, parseIID, parseSpec} from "../utils";
import WeakMapShadow from "./shadow/weakMapShadow";
import {useNativeRecorder, getModelledFunctionNames} from "../native/native";
import SourcedBooleanMachine from "../abstractMachine/SourcedBooleanMachine";

import { readFileSync } from "fs";

// Load polyfills, incl. critical polyfills for Promise functions.
require("../native/polyfill");

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analysis implements Analyzer {
    private sandbox: Sandbox;
    
    // The spec file, in case of live analysis.
    private spec: RunSpecification;

    // The state machine. A JSWriter in case of offline analysis, JSMachine in case of live analysis.
    private state: AbstractMachine;

    public promiseMap: Map<any, DynamicDescription> = new Map<any, DynamicDescription>();
    public asyncPromiseMap: Map<any, DynamicDescription> = new Map<any, DynamicDescription>();

    // The names of all modelled functions for which we need no instrumentation.
    private modelledFunctionNames : string[] = getModelledFunctionNames();

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

    // Keeps track of whether or not we are in the main event loop. 
    // NOTE: currently unused.
    private eventLoopOver: Boolean = false;

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;

        // Parse in spec if we're running live
        // @ts-ignore
        this.spec = J$.initParams.live? parseSpec(J$.initParams.specPath) : undefined;

        // @ts-ignore
        this.state = J$.initParams.live === "true" ? createAbstractMachine(this.spec, true, J$.initParams.outputFile) : new JSWriter();

        // @ts-ignore
        console.error(`Analysis created. Live = ${J$.initParams.live}`);
    }

    public declare: NPCallbacks.declare = (iid, name: RawVariableDescription, type: string) => {
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
        if (typeof val === "object") {

            this.shadowMemory.initialize(val);

            const keys = [];

            // This works as long as there's no number keys
            // Originally placed key in the back of the array then reversed it.
            // Now adds each val to the front of the array using unshift()
            for (const k in val) {
                if (val.hasOwnProperty(k)) {
                     keys.unshift(k);
                }
            }

            logger.info("keys", keys);
            for (const k of keys) {
                this.state.writeProperty([this.shadowMemory.getShadowID(val), k as PropertyDescription, {}]);
            }
        }
        logger.info("val", val);
        this.state.literal([{
            type: "literal",
            location: parseIID(iid)
        }]);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        let description: StaticDescription = {
            type: "variable",
            location: parseIID(iid),
            name: name
        };
        this.state.readVar([this.shadowMemory.getFullVariableName(name), description]);

        if (name === "arguments") {
            this.state.initializeArgumentsObject([this.shadowMemory.getShadowID(val), description]);
        }
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        this.state.writeVar([this.shadowMemory.getFullVariableName(name), {
            type: "variable",
            location: parseIID(iid),
            name: name
        }]);
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
        this.state.pop([{
            type: "expr",
            location: parseIID(iid)
        }]);
    }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        this.state.binary([{
            type: "expr",
            location: parseIID(iid)
        }]);
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        this.state.unary([{
            type: "expr",
            location: parseIID(iid)
        }]);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        this.shadowMemory.initialize(receiver);
        this.state.readProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            isMethodCall,
            isComputed,
            {type: "expr", location: parseIID(iid)}]);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        this.shadowMemory.initialize(receiver);
        this.state.writeProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            {type: "expr", location: parseIID(iid)}]);
    };

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethod) => {
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
            // TODO: make sure this works using regular builtins and reassigned builtins

            let functionShadowID = this.shadowMemory.getShadowID(f);
            let receiverShadowID = this.shadowMemory.getShadowID(receiver);

            this.state.builtin([
                functionShadowID,
                receiverShadowID,
                args.length,
                useNativeRecorder(this, functionShadowID, receiverShadowID, receiver, args, isMethod, description),
                isMethod,
                description]);
        } else {
            this.isNativeMap.set(f, false);

            // Get dynamic shadowIDs for all args, and pass that to the abstract machine.
            // Need this to track taint resulting from function invocations.
            const shadowIDs : any[] = [];

            // NOTE: Computing shadowIDs for all function calls is time-consuming, especially when they are only
            // needed very rarely. Perhaps we should consider having a list of functions for which we intend
            // to track taint, and make that available to the analysis, to speed this up?
            // if (["findOne", "findAll"].indexOf(f.name) > -1) {

            for (const arg of args) {
                // For each object argument...
                if (typeof arg === 'object' &&
                    arg !== null) {
                    shadowIDs.push(this.shadowMemory.getShadowID(arg));
                    const objectsToProcess = [arg];
                    // Recursively get shadowIDs of any sub-objects.
                    while (objectsToProcess.length > 0) {
                        const thisArg = objectsToProcess.pop();
                        for (const field in thisArg) {
                            if (typeof thisArg[field] === 'object' &&
                                thisArg[field] !== null &&
                                shadowIDs.indexOf(this.shadowMemory.getShadowID(thisArg[field])) == -1) {
                                // This check prevents pollution with `undefined` shadowIDs.
                                if (typeof thisArg[field] === 'object' &&
                                thisArg[field] !== null) {
                                    if (this.shadowMemory.getShadowID(thisArg[field]))
                                        shadowIDs.push(this.shadowMemory.getShadowID(thisArg[field]));
                                    objectsToProcess.push(thisArg[field]);
                                }
                            }
                        }
                    }
                }
            }
            this.state.functionInvokeStart([this.shadowMemory.getShadowID(f),
                f.length,
                args.length,
                shadowIDs,
                description]);
        }
    }

    public _return: NPCallbacks._return = (iid, val) => {
        this.state.functionReturn([
            this.functionCallStack[this.functionCallStack.length - 1],
            {type: "functionReturn", location: parseIID(iid)}]);
    }

    public invokeFun: NPCallbacks.invokeFun = (iid: number,  f: Invoked, receiver: Receiver, args: any[], result: any, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number) => {
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
            // This is needed as invokeFun is the callback for function invocation ending.
            // Currently, we model this in a different way---for the Sequelize example, we simply
            // put taint in the returned object and have that propagate through accesses.
            //
            // const shadowIDsInReturn = [];
            // if (f.name === "findOne") {
            //     shadowIDsInReturn.push(this.shadowMemory.getShadowID(result));
            //     const objectsToProcess = [result];
            //     while (objectsToProcess.length > 0) {
            //         const obj = objectsToProcess.pop();
            //         if (typeof obj === 'object' && obj !== null) {
            //             // Check fields.
            //             for (const field in obj) {
            //                 // If it's an object, add it, and get its shadowID
            //                 if (typeof obj[field] === 'object' && obj[field] !== null) {
            //                     objectsToProcess.push(obj[field]);
            //                     shadowIDsInReturn.push(this.shadowMemory.getShadowID(obj[field]));
            //                 }
            //             }
            //         }
            //     }
            // }
            this.state.functionInvokeEnd([this.shadowMemory.getShadowID(f), [], description]);
        }
    }

    public functionEnter: NPCallbacks.functionEnter = (iid: number, f: Invoked, receiver: Receiver, args: any[]) => {

        let functionName = this.shadowMemory.getShadowID(f);
        this.functionCallStack.push(functionName);
        this.state.functionEnter([functionName, args.length, {type: "functionEnter", location: parseIID(iid)}]);

        // The following if-statement defines special functionality for functions
        // that are executed as part of the promise wrapper.
        //
        if (f.name === "augur_executingReaction") {
            this.state.promiseReaction([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        // executingRejection is called when the rejection begins executing (e.g., somePromise.catch(rejection))
        } else if (f.name === "augur_executingRejection") {
            this.state.promiseReject([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        // executingFinally is called when the finally clause begins executing (e.g., somePromise.finally(foo))
        } else if (f.name === "augur_executingFinally") {
            // TODO: Implement this properly.
            this.state.promiseReaction([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        // getResolveFor is used to figure out the taint when `resolve` is called in a promise executor 
        } else if (f.name === "augur_getResolveFor") {
            this.state.promiseResolve([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        // getRejectFor is used to figure out the taint when `reject` is called in a promise executor 
        } else if (f.name === "augur_getRejectFor") {
            this.state.promiseReject([iid, this.shadowMemory.getFullVariableName("augur_v"),
                "promise^" + args[0] as DynamicDescription, {type: "functionEnter", location: parseIID(iid)}])
        }
    }

    public functionExit: NPCallbacks.functionExit = (iid: number, returnVal: any, wrappedExceptionVal?: ExceptionVal) => {
        let f = this.functionCallStack.pop();
        if (f === "global@1") {
            this.eventLoopOver = true;
        }
        this.state.functionExit([f, f.length, {type: "expr", location: parseIID(iid)}]);
    }

    public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
        // TODO: properly design a mechanism to track taint with eval
        // this.state.builtin(["eval", 1, {type: "builtin", location: parseIID(iid)};]);
        // eval always takes a single arg
    }

    public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
    }

    public endExecution: NPCallbacks.endExecution = () => {
        this.state.endExecution([]);
    }

    public asyncFunctionEnter:  NPCallbacks.asyncFunctionEnter = (iid: number) => {
        this.state.asyncFunctionEnter([{type: "asyncFunctionEnter", location: parseIID(iid)}])
    }

    public asyncFunctionExit: NPCallbacks.asyncFunctionExit = (iid: number, result: any, exceptionVal: ExceptionVal) => {
        this.state.asyncFunctionExit([iid, this.getAsyncPromiseId(result), result, exceptionVal, {type: "asyncFunctionExit", location: parseIID(iid)}])
    }

    public awaitPre: NPCallbacks.awaitPre = (iid: number, promiseOrAwaitedVal: any) => {
        this.shadowMemory.awaitPre(iid);
        this.state.awaitPre([iid, this.getPromiseId(promiseOrAwaitedVal), promiseOrAwaitedVal,
            {type: "awaitPre", location: parseIID((iid))}]);
    }

    public awaitPost: NPCallbacks.awaitPost = (iid: number, promiseOrValAwaited: any, valResolveOrRejected: any, isPromiseRejected: boolean) => {
        // We attempted to track taint on objects that were inside of Promises returned by async functions specified as sources,
        // but that's handled separately now. TODO: Update API and remove this.
        const shadowIDs : any[] = [];

        // TODO: Make the abstract machine instruction argument names reflect what's actually going on.
        this.shadowMemory.awaitPost(iid);
        this.state.awaitPost([iid, this.getPromiseId(promiseOrValAwaited), shadowIDs, {} /* JSON.stringify(valResolveOrRejected) */,
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
            // TODO: Not sure how happy I am about this currently. We might run into functions which share a name with
            // functions we want to model.
            this.modelledFunctionNames.indexOf(fun.name) > -1;
    }

    getPromiseId(p: any) {
        if (p != undefined && p.augur_pid != undefined) {
            return 'promise^' + p.augur_pid  as DynamicDescription;
        } else {
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
