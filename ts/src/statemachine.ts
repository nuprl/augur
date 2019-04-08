// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "./nodeprof";

export interface Options {
    sources: string[];
    sinks: string[];
}

export default class StateMachine {
    private state: boolean[] = [];
    private varTaintMap: Map<string, boolean> = new Map();
    private sources: Set<string>;
    private sinks: Set<string>;
    private objects: Map<any, {}>;

    constructor({ sources, sinks }: Options) {
        // console.log(sources, sinks);
        this.sources = new Set(sources);
        this.sinks = new Set(sinks);
        this.objects = new Map();
        this.getTaint = this.getTaint.bind(this);
    }

    public push(v: boolean) {
        console.log("push", v);
        this.state.push(v);
    }

    public readvar(s: string) {
        const r = this.sources.has(s) || this.varTaintMap.get(s);
        this.state.push(r);
        console.log("read", s, r);
        return r;
    }

    public writevar(s: string) {
        const v = this.sources.has(s) || this.state.pop();
        console.log("write", s, v);
        this.varTaintMap.set(s, v);
        // console.log("wrote", this.varTaintMap.get(s));
    }

    public readProperty(o: any, s: Accessor) {
        const r = this.sources.has(s.toString()) || this.objects.get(o)[s];
        console.log("readprop", s, r);
        this.state.push(r);
        return r;
    }

    public writeProperty(o: any, s: Accessor) {
        if (!this.objects.has(o)) {
            this.objects.set(o, {});
        }

        const storedTaint = this.state.pop();
        this.objects.get(o)[s] = this.sources.has(s.toString()) || storedTaint;

        console.log("writeprop", s, this.objects.get(o)[s]);
    }

    public getTaint(): string[] {
        const self = this;
        return [...self.sinks]
            .filter((s) => self.varTaintMap.get(s));
    }
}
