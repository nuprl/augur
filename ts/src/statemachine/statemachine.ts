// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import logger from "../logger";
import { Accessor } from "../nodeprof";
import { StateMachine } from "../types";

export interface Options {
    sources: string[];
    sinks: string[];
}

export default class InstructionRunner implements StateMachine {
    private state: boolean[] = [];
    private varTaintMap: Map<string, boolean> = new Map();
    private sources: Set<string>;
    private sinks: Set<string>;
    private objects: Map<any, {}>;

    constructor({ sources, sinks }: Options) {
        // logger.info(sources, sinks);
        this.sources = new Set(sources);
        this.sinks = new Set(sinks);
        this.objects = new Map();
        this.getTaint = this.getTaint.bind(this);
    }

    public push(v: boolean) {
        logger.info("push", v);
        this.state.push(v);
    }

    public readVar(s: string) {
        const r = this.sources.has(s) || this.varTaintMap.get(s);
        this.state.push(r);
        logger.info("read", s, r);
        return r;
    }

    public writeVar(s: string) {
        const v = this.sources.has(s) || this.state.pop();
        logger.info("write", s, v);
        this.varTaintMap.set(s, v);
        // logger.info("wrote", this.varTaintMap.get(s));
    }

    public readProperty(o: any, s: Accessor) {
        const r = this.sources.has(s.toString()) || this.objects.get(o)[s];
        logger.info("readprop", s, r);
        this.state.push(r);
        return r;
    }

    public writeProperty(o: any, s: Accessor) {
        if (!this.objects.has(o)) {
            this.objects.set(o, {});
        }

        const storedTaint = this.state.pop();
        this.objects.get(o)[s] = this.sources.has(s.toString()) || storedTaint;

        logger.info("writeprop", s, this.objects.get(o)[s]);
    }

    public getTaint(): string[] {
        const self = this;
        return [...self.sinks]
            .filter((s) => self.varTaintMap.get(s));
    }
}
