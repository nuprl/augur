import {Analyzer, Receiver, Invoked, NPCallbacks, Sandbox} from "../nodeprof";
import { AbstractMachine } from "../types";
import JSWriter from "../abstractMachine/JSWriter";
import logger from "./logger";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// The actual "analysis" registered with NodeProf. This is the first stop for
// all instrumentation callbacks. Most of these callbacks are passed literally
// to an abstract machine, which is responsible for performing any actual
// analysis.
export default class Analysis implements Analyzer {
    private sandbox: Sandbox;
    private state: AbstractMachine = new JSWriter();

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name, type) => {
        this.state.initVar(name);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // logger.info("literal", val, hasGetterSetter);
        if (typeof val === "object") {
            const keys = [];

            // This works as long as there's no number keys
            for (const k in val) {
                if (val.hasOwnProperty(k)) {
                    keys.push(k);
                }
            }

            keys.reverse();

            logger.info("keys", keys);

            for (const k of keys) {
                this.state.writeProperty(val, k);
            }
        }
        logger.info("val", val);
        this.state.push(false);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        this.state.readVar(name);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        this.state.writeVar(name);
    }

    // public endExpression: NPCallbacks.endExpression = (iid) => {
    //     this.state.pop();
    // }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        this.state.binaryOp();
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        this.state.unaryOp();
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        this.state.readProperty(receiver, offset);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        this.state.writeProperty(receiver, offset);
    }

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args) => {
        this.state.functionCall(f.name, f.length, args.length);
    }

    public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
        this.state.builtin("eval", 1); // eval always takes a single arg
    }

    public builtinEnter: NPCallbacks.builtinEnter = (name: string, f: Invoked, receiver: Receiver, args: any[]) => {
        if (name.includes("eval")) {
            console.log("built in encountered: " + name);
        }
        if (name === "exec" || name === "eval") {
            this.state.functionCall(name, f.length, args.length);
        }
    }

    public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
        this.state.conditional(result);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        this.state.endExecution();
    }
}
