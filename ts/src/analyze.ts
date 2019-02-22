import { Analyzer, NPCallbacks, Sandbox } from "./nodeprof";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export default class Analyze implements Analyzer {
    private callCount = new Map();
    private iidToLocation = new Map();
    private sandbox: Sandbox;

    constructor(sandbox: Sandbox) {
        this.sandbox = sandbox;
    }

    public functionEnter: NPCallbacks.functionEnter = (iid, func, receiver, args) => {
        this.iidToLocation.set(iid, this.sandbox.iidToLocation(iid));

        if (!this.callCount.has(iid)) {
            this.callCount.set(iid, 0);
        }

        this.callCount.set(iid, this.callCount.get(iid) + 1);
    }

    public endExecution: NPCallbacks.endExecution = () => {
        this.callCount.forEach((value, key) => {
            console.log(`[${key}]:\t${value}\t(${this.iidToLocation.get(key)})`);
        });
    }
}
