import { Analyzer, NPCallbacks, Sandbox } from "../nodeprof";
import { StateMachine } from "../types";
import InstructionWriter from "./instruction-writer";
import logger from "./logger";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// The actual "analysis" registered with NodeProf. This is the first stop for
// all instrumentation callbacks. Most of these callbacks are passed literally
// to an abstract machine, which is responsible for performing any actual
// analysis.
export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state: StateMachine = new InstructionWriter();

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

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        this.state.readProperty(receiver, offset);
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        this.state.writeProperty(receiver, offset);
    }

    public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
        this.state.functionCall(f.length, args.length);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        this.state.endExecution();
    }
}
