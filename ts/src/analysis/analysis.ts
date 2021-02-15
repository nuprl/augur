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
    DynamicDescription,
    PropertyDescription,
    RawVariableDescription,
    ShadowMemory,
    StaticDescription,
    VariableDescription
} from "../types";
import JSWriter from "../abstractMachine/JSWriter";
import logger from "./logger";
import {parseIID} from "../utils";
import WeakMapShadow from "./shadow/weakMapShadow";
import {useNativeRecorder} from "../native/native";
const {performance} = require('perf_hooks');

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

    // keeping track of the functions entered and exited using the
    // `functionEnter` and `functionExit` callbacks. this is because the
    // `functionExit` callback doesn't provide the function that is
    // being exited.
    private functionCallStack: DynamicDescription[] = ["global" as DynamicDescription];

    // shadow memory
    public shadowMemory: ShadowMemory = new WeakMapShadow();

    private isNativeMap: Map<string, boolean> = new Map<string, boolean>();
    private time: number = 0;
    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name: RawVariableDescription, type: string) => {
       // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "declaration",
        //     location: parseIID(iid),
        //     name: name};
        this.shadowMemory.declare(name);
        this.state.initVar([this.shadowMemory.getFullVariableName(name),
            {type: "declaration",
            location: parseIID(iid),
            name: name}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Declare Time: " + diff);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "literal",
        //     location: parseIID(iid)};

        // logger.info("literal", val, hasGetterSetter);
        if (typeof val === "object") {

            this.shadowMemory.initialize(val);

            const keys = [];

            // This works as long as there's no number keys
            // for (const k in val) {
            //     if (val.hasOwnProperty(k)) {
            //         keys.push(k);
            //     }
            // }
            //
            // keys.reverse();
            for (const k in val) {
                if (val.hasOwnProperty(k)) {
                    keys[keys.length - 1] = k;
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
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Literal Time: " + diff);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {
        //     type: "variable",
        //     location: parseIID(iid),
        //     name: name};
        this.state.readVar([this.shadowMemory.getFullVariableName(name), {
            type: "variable",
            location: parseIID(iid),
            name: name}]);

        if (name === "arguments") {
            this.state.initializeArgumentsObject([this.shadowMemory.getShadowID(val), {
                type: "variable",
                location: parseIID(iid),
                name: name}]);
        }
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Read Time: " + diff);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "variable",
        //     location: parseIID(iid),
        //     name: name};
        this.state.writeVar([this.shadowMemory.getFullVariableName(name),
            {type: "variable",
            location: parseIID(iid),
            name: name}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Write Time: " + diff);
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
     //   console.log("endStatement: " + type);
        this.state.pop(
            [{type: "expr",
            location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Endstmnt Time: " + diff);
    }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
        this.state.binary([
            {type: "expr",
            location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("Binarypre Time: " + diff);
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
        this.state.unary([
            {type: "expr",
            location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("UnaryPre Time: " + diff);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
        this.shadowMemory.initialize(receiver);
        this.state.readProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            isMethodCall,
            {type: "expr", location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("getField Time: " + diff);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
        this.shadowMemory.initialize(receiver);
        this.state.writeProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            {type: "expr", location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("PutField Time: " + diff);
    };

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethod) => {
        // let start: number = performance.now()/1000;
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
        // if (this.isNative(f)) {
        if (this.isNativeMap.get(f.name) || this.isNative(f)) {
            this.isNativeMap.set(f.name, true);
            // TODO: make sure this works using regular builtins and
            //  reassigned builtins

            let functionShadowID = this.shadowMemory.getShadowID(f);
            let receiverShadowID = this.shadowMemory.getShadowID(receiver);
        //    console.error(this.shadowMemory.getFullVariableName("arguments"));

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
            this.isNativeMap.set(f.name, false);
            this.state.functionInvokeStart([this.shadowMemory.getShadowID(f),
                f.length,
                args.length,
                // this.shadowMemory.getShadowID(receiver),
                description]);
        }
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("InvokeFunPre Time: " + diff);
    }

    public _return: NPCallbacks._return = (iid, val) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "functionReturn",
        //     location: parseIID(iid)};

        this.state.functionReturn([
            this.functionCallStack[this.functionCallStack.length - 1],
            {type: "functionReturn", location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("_return Time: " + diff);
    }

    public invokeFun: NPCallbacks.invokeFun = (iid: number,  f: Invoked, receiver: Receiver, args: any[], result: any, isConstructor: boolean, isMethod: boolean, functionIid: number, functionSid: number) => {
        // let start: number = performance.now()/1000;
        let description: StaticDescription = {type: "functionReturn",
            location: parseIID(iid)};
        if (f.name && f.name != "") {
            description.name = f.name;
        }

        let returnValueName = this.shadowMemory.getShadowID(result);

        this.shadowMemory.functionExit();
        // if (this.isNative(f)) {
        if (this.isNativeMap.get(f.name)) {
            this.state.builtinExit([this.shadowMemory.getShadowID(f), returnValueName, description]);
        } else {
            this.state.functionInvokeEnd([this.shadowMemory.getShadowID(f), description]);
        }
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("invokeFun Time: " + diff);
    }

    public functionEnter: NPCallbacks.functionEnter = (iid: number, f: Invoked, receiver: Receiver, args: any[]) => {
        // let start: number = performance.now()/1000;
        // let description: StaticDescription = {type: "functionEnter",
        //     location: parseIID(iid)};
        let functionName = this.shadowMemory.getShadowID(f);
        this.functionCallStack.push(functionName);
        this.state.functionEnter([functionName, args.length, {type: "functionEnter", location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("FunctionEnter Time: " + diff);
    }

    public functionExit: NPCallbacks.functionExit = (iid: number,  returnVal: any, wrappedExceptionVal?: ExceptionVal) => {
        // let start: number = performance.now()/1000;
        let f = this.functionCallStack.pop();
        // let description: StaticDescription = {type: "expr",
        //     location: parseIID(iid)};
        this.state.functionExit([f, f.length, {type: "expr", location: parseIID(iid)}]);
        // let diff = performance.now() / 1000 - start;
        // this.time += diff
        // console.log("FunctionExit Time: " + diff);
    }

    // public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
    //     let start: number = performance.now()/1000;
    //     let description: StaticDescription = {type: "builtin",
    //         location: parseIID(iid)};
    //     // TODO: properly design a mechanism to track taint with eval
    //     // this.state.builtin(["eval", 1, description]);
    //     // eval always takes a single arg
    //     let diff = performance.now() / 1000 - start;
    //     this.time += diff
    //     console.log("EvalPre Time: " + diff);    }

    // public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
    //     let start: number = performance.now()/1000;
    //     let description: StaticDescription = {type: "expr",
    //         location: parseIID(iid)};
    //     // this.state.conditional(description);
    //     let diff = performance.now() / 1000 - start;
    //     this.time += diff
    //     console.log("Conditional Time: " + diff);    }

    public endExecution: NPCallbacks.endExecution = () => {
        let start: number = performance.now()/1000;
        this.state.endExecution([]);
        let diff = performance.now() / 1000 - start;
        this.time += diff
        console.log("EndExecution Time: " + diff);
        console.error("Total Callback Time: " + this.time);
        console.log("After Analysis: " + performance.now() / 1000)
    }

    // returns the name that should be used to refer to the given value.
    // it will return one of the three, prioritized by the following order:
    //
    // 1. if `val` is an object, and has a valid shadow identifier, its
    // shadow identifier will be returned.
    // 2. if `name` is not undefined, it will be returned.
    // 3. if `val` is an object, the result of invoking `toString` on it
    // will be returned.
    // 4. `undefined` will be returned.
    /*
    private getName(val: any, name: string): DynamicDescription {
        // if val is an object
        if (typeof val === "object") {
            let shadowID = this.shadowMemory.getShadowID(val);
            // and has a valid shadow id
            if (shadowID !== undefined) {
                // return it
                return shadowID;
            }
        }
        // otherwise, if a name was provided
        if (name !== undefined) {
            // return it
            return name;
        }
        // otherwise, just turn the object into a string and return it
        return val.toString();
    }
     */

    // TODO: fix this hack with real instrumentation
    private isNative(fun: Function): boolean {
        // apparently this kinda stuff isn't very slow
        // https://stackoverflow.com/questions/6598945/detect-if-function-is-native-to-browser
        // but doesn't cover all 1592624 of the corner cases

        // actually that stackoverflow post is a terrible experiment and
        // doesn't represent real code
        return /\{\s+\[native code\]/
            .test(Function.prototype.toString.call(fun));
    }
}