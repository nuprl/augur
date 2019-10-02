import {Analyzer, Receiver, Invoked, NPCallbacks, Sandbox} from "../nodeprof";
import {AbstractMachine, TaintDescription} from "../types";
import JSWriter from "../abstractMachine/JSWriter";
import logger from "./logger";
import {parseIID} from "../utils";

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
        let description: TaintDescription = {type: "declaration",
            location: parseIID(iid),
            name: name};

        this.state.initVar([name, description]);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        let description: TaintDescription = {type: "literal",
            location: parseIID(iid)};

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
                this.state.writeProperty([val, k, {}]);
            }
        }
        logger.info("val", val);
        this.state.literal([description]);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        let description: TaintDescription = {type: "variable",
            location: parseIID(iid),
            name: name};
        this.state.readVar([name, description]);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        let description: TaintDescription = {type: "variable",
            location: parseIID(iid),
            name: name};
        this.state.writeVar([name, description]);
    }

    public endStatement: NPCallbacks.endStatement = (iid, type) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        console.log("endStatement: " + type);
        this.state.pop([description]);
    }

    public binaryPre: NPCallbacks.binaryPre = (iid: number, op: string, left: any, right: any, isOpAssign: boolean, isSwitchCaseComparison: boolean, isComputed: boolean) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        this.state.binary([description]);
    }

    public unaryPre: NPCallbacks.unaryPre = (iid: number, op: string, left: any) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        this.state.unary([description]);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        this.state.readProperty([receiver, offset, description]);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        this.state.writeProperty([receiver, offset, description]);
    }

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args) => {
        let description: TaintDescription = {type: "functionInvocation",
            location: parseIID(iid)};
        if (f.name && f.name != "") {
            description.name = f.name;
        }
        this.state.functionCall([f.name, f.length, args.length, description]);
    }

    public invokeFun: NPCallbacks.invokeFun = (iid: number, f: Invoked) => {
        let description: TaintDescription = {type: "functionReturn",
        location: parseIID(iid)};
        if (f.name && f.name != "") {
            description.name = f.name;
        }
        this.state.functionReturn([f.name, description]);
    }

    public evalPre: NPCallbacks.evalPre = (iid: number, str: string) => {
        let description: TaintDescription = {type: "builtin",
            location: parseIID(iid)};
        this.state.builtin(["eval", 1, description]);
        // eval always takes a single arg
    }

    public builtinEnter: NPCallbacks.builtinEnter = (name: string, f: Invoked, receiver: Receiver, args: any[]) => {
        if (name === "exec" || name === "eval") {
            this.state.builtin([name, args.length,
                {location: {fileName: "builtins are broken"}, type: "builtin"}]);
        }
    }

    public builtinExit: NPCallbacks.builtinExit = (name: string, returnVal: any) => {
        if (name === "exec" || name === "eval") {
            this.state.builtinExit([name,
                {location: {fileName: "builtins are broken"}, type: "builtin"}]);
        }
    }

    public conditional: NPCallbacks.conditional = (iid: number, result: any) => {
        let description: TaintDescription = {type: "expr",
            location: parseIID(iid)};
        // this.state.conditional(description);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        this.state.endExecution([]);
    }
}
