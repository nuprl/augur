import { Analyzer, NPCallbacks, Sandbox } from "./nodeprof";
import StateMachine from "./statemachine";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private sandbox: Sandbox;
    private state = new StateMachine({ sources: ["a"], sinks: ["z"]});

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
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

        if (taints.length) {
            console.log("taints:\n", taints.join("\n"));
        } else  {
            console.log("no taints in sink");
        }
    }
}
