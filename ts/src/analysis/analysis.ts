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

    // Tracks which kind of functions are native throughout instrumentation
    // This means the isNative() will only need to be called once instead of twice when entering a new function.
    private isNativeMap: Map<string, boolean> = new Map<string, boolean>();
    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name: RawVariableDescription, type: string) => {
        this.shadowMemory.declare(name);
        this.state.initVar([this.shadowMemory.getFullVariableName(name),
            {type: "declaration",
            location: parseIID(iid),
            name: name}]);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
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
        this.state.writeVar([this.shadowMemory.getFullVariableName(name),
            {type: "variable",
            location: parseIID(iid),
            name: name}]);
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
       console.log("endStatement: " + type);
        this.state.pop(
            [{type: "expr",
            location: parseIID(iid)}]);
    }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        this.state.binary([
            {type: "expr",
            location: parseIID(iid)}]);
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        this.state.unary([
            {type: "expr",
            location: parseIID(iid)}]);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        this.shadowMemory.initialize(receiver);
        this.state.readProperty([this.shadowMemory.getShadowID(receiver),
            offset as PropertyDescription,
            isMethodCall,
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
        if (this.isNativeMap.get(f.name) || this.isNative(f)) {
            this.isNativeMap.set(f.name, true);
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
            this.isNativeMap.set(f.name, false);
            this.state.functionInvokeStart([this.shadowMemory.getShadowID(f),
                f.length,
                args.length,
                // this.shadowMemory.getShadowID(receiver),
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
        if (this.isNativeMap.get(f.name)) {
            this.state.builtinExit([this.shadowMemory.getShadowID(f), returnValueName, description]);
        } else {
            this.state.functionInvokeEnd([this.shadowMemory.getShadowID(f), description]);
        }
    }

    public functionEnter: NPCallbacks.functionEnter = (iid: number, f: Invoked, receiver: Receiver, args: any[]) => {
        let functionName = this.shadowMemory.getShadowID(f);
        this.functionCallStack.push(functionName);
        this.state.functionEnter([functionName, args.length, {type: "functionEnter", location: parseIID(iid)}]);
    }

    public functionExit: NPCallbacks.functionExit = (iid: number,  returnVal: any, wrappedExceptionVal?: ExceptionVal) => {
        let f = this.functionCallStack.pop();
        this.state.functionExit([f, f.length, {type: "expr", location: parseIID(iid)}]);
    }

    public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
        // TODO: properly design a mechanism to track taint with eval
        // this.state.builtin(["eval", 1, {type: "builtin", location: parseIID(iid)};]);
        // eval always takes a single arg
    }

    public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
        // this.state.conditional({type: "expr", location: parseIID(iid)};);
        }

    public endExecution: NPCallbacks.endExecution = () => {
        this.state.endExecution([]);
    }

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
