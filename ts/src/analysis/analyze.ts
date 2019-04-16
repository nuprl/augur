import { Analyzer, NPCallbacks, Sandbox } from "../nodeprof";
import StateMachine from "../statemachine";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state = new StateMachine({
        sinks: process.env.SINKS.split(","),
        sources: process.env.SOURCES.split(","),
    });

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public declare: NPCallbacks.declare = (iid, name, val, isArgument, argumentIndex, isCatchParam) => {
        console.log("declare", iid, name, val, isArgument, argumentIndex, isCatchParam);
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // console.log("literal", val, hasGetterSetter);
        if (typeof val === "object") {
            const keys = [];

            // This works as long as there's no number keys
            // tslint:disable-next-line:forin
            for (const k in val) {
                keys.push(k);
            }

            keys.reverse();

            console.log("keys", keys);

            for (const k of keys) {
                this.state.writeProperty(val, k);
            }
        }
        console.log("val", val);
        this.state.push(false);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        this.state.readvar(name);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        this.state.writevar(name);
    }

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, rec, args, isC, isM, funId, funSid) => {
        // console.log(f);
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
    //         console.log(name, args);
    //     }
    // }
    // public functionEnter: NPCallbacks.functionEnter = (iid, f, receiver, args) => {
    //     console.log(iid, f, receiver, args);
    // }

    public endExecution: NPCallbacks.endExecution = () => {
        const taints = this.state.getTaint()
            .sort((a, b) => a.localeCompare(b));
        process.stderr.write(JSON.stringify(taints, null, 2));
    }
}
