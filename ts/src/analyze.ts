import { Analyzer, NPCallbacks, Sandbox } from "./nodeprof";
import StateMachine from "./statemachine";

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

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        // console.log("literal", val, hasGetterSetter);
        // if (typeof val === "object") {
        //     const keys = Object.keys(val);

        //     // This works as long as there's no number keys
        //     for (let i = keys.length - 1; i >= 0; i--) {
        //         this.state.writeProperty(val, keys[i]);
        //     }

        //     this.state.push(false);
        // }

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

    public endExecution: NPCallbacks.endExecution = () => {
        const taints = this.state.getTaint()
            .sort((a, b) => a.localeCompare(b));
        process.stderr.write(JSON.stringify(taints, null, 2));
    }
}
