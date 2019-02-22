import { Analyzer, NPCallbacks, Sandbox } from "./nodeprof";
import StateMachine from "./statemachine";
import { Spec } from "./types";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state: StateMachine;

    constructor(sandbox: Sandbox, { sinks, sources }: Spec) {
        this.sandbox = sandbox;
        // console.log("sinks", sinks, "sources", sources);
        this.state = new StateMachine({ sinks, sources });
    }

    public literal: NPCallbacks.literal = (iid, val, hasGetterSetter) => {
        this.state.push(false);
    }

    public read: NPCallbacks.read = (iid, name, val, isGlobal, isScriptLocal) => {
        this.state.readvar(name);
    }

    public write: NPCallbacks.write = (iid, name, val, originalValue, isGlobal, isScriptLocal) => {
        this.state.writevar(name);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        const taints = this.state.getTaint();
        const output = {
            taints,
        };

        console.log(output);
    }
}
