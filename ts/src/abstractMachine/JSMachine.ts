// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {AbstractMachine, TaintDescription, RunSpecification} from "../types";
import logger from "./logger";
import {sameDescription} from "../utils";

enum States {
    FunctionCall,
    None,
}

export default class JSMachine implements AbstractMachine {
    private taintStack: boolean[] = [];
    private varTaintMap: Map<string, boolean> = new Map();
    private spec: RunSpecification;
    private objects: Map<any, {}>;
    private state: States = States.None;
    private stateCounter: number = 0;
    private flows: Set<TaintDescription> = new Set();

    constructor(spec: RunSpecification) {
        // logger.info(sources, sinks);
        this.spec = spec;
        this.objects = new Map();
        this.getTaint = this.getTaint.bind(this);
    }

    public push(v: boolean) {
        this.resetState();
        logger.info("push", v);
        this.taintStack.push(v);
    }

    public pop() {
        this.resetState();
        logger.info("pop");
        this.taintStack.pop();
    }

    public readVar(s: string) {
        this.resetState();
        let description: TaintDescription = {name: s, type: "variable"};
        const r = this.isSource(description) || this.varTaintMap.get(s);
        this.taintStack.push(r);
        logger.info("read", s, r);
        return r;
    }

    public writeVar(s: string) {
        this.resetState();
        let description: TaintDescription = {name: s, type: "variable"};
        // Do not pop off the stack for a write
        const v = this.isSource(description) || this.taintStack[this.taintStack.length - 1];
        logger.info("write", s, v);
        this.varTaintMap.set(s, v);
        this.reportPossibleFlow(description, v);
        // logger.info("wrote", this.varTaintMap.get(s));
    }

    public readProperty(o: any, s: Accessor) {
        this.resetState();
        const isSource = this.isSource({name: s.toString()});
        const storedTaint = this.objects.get(o);
        const r = isSource || (storedTaint && storedTaint[s]);
        logger.info("readprop", s, r);
        this.taintStack.push(r);
        return r;
    }

    public writeProperty(o: any, s: Accessor) {
        this.resetState();
        if (!this.objects.has(o)) {
            this.objects.set(o, {});
        }

        const storedTaint = this.taintStack.pop();
        let objectMap = this.objects.get(o);
        objectMap[s] = this.isSource({name: s.toString()}) || storedTaint;

        this.reportPossibleFlow({name: s.toString()}, objectMap[s]);

        logger.info("writeprop", s, objectMap[s]);
    }

    public unaryOp(): void {
        this.resetState();

        logger.info("unaryOp");
        // no-op. Unary operations on values do not change their taint status.
    }

    public binaryOp(): void {
        this.resetState();

        // Combine the taint markings of the two operands
        this.taintStack.push(
            this.taintStack.pop() || this.taintStack.pop()
        );

        logger.info("binaryOp");
    }

    public initVar(s: string) {
        if (this.state === States.FunctionCall && this.stateCounter > 0) {
            const v = this.taintStack.pop();
            logger.info("init function arg", s, v);
            this.varTaintMap.set(s, v);
            this.stateCounter -= 1;
        } else {
            logger.info("initVar called but not an argument: " + s);
            this.varTaintMap.set(s, this.isSource({name: s}));
            this.resetState();
        }
    }

    public builtin(name: string, actualArgs: number) {
        this.resetState();
        logger.info("builtin", name, actualArgs);
        let description: TaintDescription = {name: name, type: "builtin"};
        let args = [];

        for (let i = 0; i < actualArgs; i++) {
            args.push(this.taintStack.pop());
        }

        args.forEach((v) => this.reportPossibleFlow(description, v));
    }

    public functionCall(name: string, expectedArgs: number, actualArgs: number) {
        logger.info("funcall", name, expectedArgs, actualArgs);
        logger.debug("funcall, cur stack:", this.taintStack);
        let description: TaintDescription = {name: name, type: "function"};
        const tempStack = [];

        // Pop off the actual arguments given to this function from taintStack
        for (let i = 0; i < actualArgs; i++) {
            tempStack.push(this.taintStack.pop());
        }

        // If not enough arguments were supplied, they will be "undefined".
        // This value is *untainted*, so push the untainted marker.
        if (expectedArgs > actualArgs) {
            const diff = expectedArgs - actualArgs;

            for (let i = 0; i < diff; i++) {
                tempStack.push(false);
            }
        }

        logger.debug("funcall, temp stack:", tempStack);
        // tempStack.reverse();

        // Is this function a sink, and did any tainted values flow into it?
        tempStack.forEach(
            (mark) => this.reportPossibleFlow(description, mark));

        // Push the actual arguments to taintStack
        tempStack.forEach((v) =>
            this.taintStack.push(v || this.isSource(description)));
        logger.debug("funcall, new stack:", this.taintStack);
        this.state = States.FunctionCall;
        this.stateCounter = expectedArgs;
    }

    public endExecution() {
        // do nothing.
    }

    public getTaint(): TaintDescription[] {
        return [...this.flows];
    }

    private reportPossibleFlow(description: TaintDescription, taintMarking: boolean): void {
        // Check taint marking *first*
        if (taintMarking) {
            // If it's tainted, then check to see if this is a sink
            let sinkDescription = this.getSink(description);
            if (sinkDescription !== undefined) {
                console.log("tainted value flowed into sink "
                    + JSON.stringify(description)
                    + "!");
                this.flows.add(sinkDescription);
            }
        }
    }

    private resetState() {
        this.state = States.None;
        this.stateCounter = 0;
    }

    private getSink(description: TaintDescription): TaintDescription {
        return this.spec.sinks.find((sink) => sameDescription(sink, description));
    }

    private isSource(description: TaintDescription): boolean {
        return this.spec.sources.some((source) => sameDescription(source, description));
    }

    private isSink(description: TaintDescription): boolean {
        return this.spec.sinks.some((sink) => sameDescription(sink, description));
    }

}

export function executeInstructionsFromFile(path: string, options: RunSpecification) {
    console.log(path, options);
    const abstractMachine = new JSMachine(options);
    const compiledOutput = require(path);
    console.log(JSON.stringify(compiledOutput));
    compiledOutput.drive(abstractMachine);
    return abstractMachine.getTaint();
}
