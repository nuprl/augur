// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

export interface Options {
    sources: string[];
    sinks: string[];
}

export default class StateMachine {
    private state: boolean[] = [];
    private varTaintMap: Map<string, boolean> = new Map();
    private sources: Set<string>;
    private sinks: Set<string>;

    constructor({ sources, sinks }: Options) {
        // console.log(sources, sinks);
        this.sources = new Set(sources);
        this.sinks = new Set(sinks);
    }

    public push(v: boolean) {
        // console.log("push", v);
        this.state.push(v);
    }

    public readvar(s: string) {
        const r = this.sources.has(s) || this.varTaintMap.get(s);
        this.state.push(r);
        // console.log("read", s, r);
        return r;
    }

    public writevar(s: string) {
        const v = this.sources.has(s) || this.state.pop();
        // console.log("write", s, v);
        this.varTaintMap.set(s, v);
        // console.log("wrote", this.varTaintMap.get(s));
    }

    public getTaint(): string[] {
        return [...this.sinks]
            .filter((s) => this.varTaintMap.get(s));
    }
}
