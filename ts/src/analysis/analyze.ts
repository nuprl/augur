import logger from "../logger";
import { Analyzer, NPCallbacks, Sandbox } from "../nodeprof";
import InstructionWriter from "./instruction-writer";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state = new InstructionWriter();

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name, val, isArgument, argumentIndex, isCatchParam) => {
        logger.info("declare", iid, name, val, isArgument, argumentIndex, isCatchParam);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // logger.info("literal", val, hasGetterSetter);
        if (typeof val === "object") {
            const keys = [];

            // This works as long as there's no number keys
            // tslint:disable-next-line:forin
            for (const k in val) {
                keys.push(k);
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

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, rec, args, isC, isM, funId, funSid) => {
        // logger.info(f);
    }

    public getField: NPCallbacks.getField = (iid, receiver, offset, val, isComputed, isOpAssign, isMethodCall) => {
        this.state.readProperty(receiver, offset);
        // if (offset === "log") {
        // }
    }

    public putField: NPCallbacks.putField = (iid, receiver, offset, val, isComputed, isOpAssign) => {
        this.state.writeProperty(receiver, offset);
    }

    // public builtinEnter: NPCallbacks.builtinEnter = (name, f, receiver, args) => {
    //     if (name.indexOf("of") > -1) {
    //         logger.info(name, args);
    //     }
    // }
    // public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
    //     logger.info(iid, f, receiver, args);
    // }

    public endExecution: NPCallbacks.endExecution = () => {
        process.stdout.write(this.state.generate());
    }
}
