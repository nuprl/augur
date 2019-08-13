// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {AbstractMachine, TaintDescription, RunSpecification} from "../types";
import logger from "./logger";
import {sameDescription} from "../utils";
import BooleanMachine from "./BooleanMachine";

enum States {
    FunctionCall,
    None,
}

export default abstract class JSMachine<T> implements AbstractMachine<T> {
    private taintStack: T[] = [];
    private varTaintMap: Map<string, T> = new Map();
    private spec: RunSpecification;
    private objects: Map<any, {}>;
    private state: States = States.None;
    private stateCounter: number = 0;
    private flows: Set<TaintDescription> = new Set();
    private pc: T;

    /**
     * Returns the taint marking associated with a completely clean value.
     */
    abstract getUntaintedValue(): T;

    /**
     * Join two taint labels. The resulting label should represent the union
     * of the two given labels.
     */
    abstract join(a: T, b: T): T;

    /**
     * Checks a sink with a taint mark. Does the given sink accept the given taint?
     */
    abstract check(sink: TaintDescription, taint: T): boolean;

    /**
     * Produce an initial taint mark for a given description. This mark should
     * describe this description's affiliation with any sinks.
     *
     * For example, it could return a boolean T/F to represent its status as a
     * sink. It could also return some value to represent which sink it
     * describes.
     */
    abstract produceMark(description: TaintDescription): T;

    constructor(spec: RunSpecification) {
        // logger.info(sources, sinks);
        this.spec = spec;
        this.objects = new Map();
        this.pc = this.getUntaintedValue();
        this.getTaint = this.getTaint.bind(this);
    }

    public push(v: T, description: TaintDescription) {
        this.resetState();
        logger.info("push", v);
        this.taintStack.push(v);
    }

    public pop(description: TaintDescription) {
        this.resetState();
        logger.info("pop");
        this.taintStack.pop();
    }

    public readVar(s: string, description: TaintDescription) {
        this.resetState();
        const r = this.join(this.produceMark(description),
            this.varTaintMap.get(s));
        this.taintStack.push(r);
        logger.info("read", s, r);
        return r;
    }

    public writeVar(s: string, description: TaintDescription) {
        this.resetState();
        // Do not pop off the stack for a write
        const v = this.join(this.produceMark(description),
            this.taintStack[this.taintStack.length - 1]);
        logger.info("write", s, v);
        this.varTaintMap.set(s, v);
        this.reportPossibleFlow(description, v);
        this.reportPossibleImplicitFlow(description, v);
        // logger.info("wrote", this.varTaintMap.get(s));
    }

    public readProperty(o: any, s: Accessor, description: TaintDescription) {
        this.resetState();
        const isSource = this.isSource({name: s.toString()});
        const objectTaintMap = this.objects.get(o);

        // If objectTaintMap is defined, and it contains a defined taint mark
        // for this property, this will be its value. Otherwise, it will be
        // untainted.
        const propertyTaint =  (objectTaintMap && objectTaintMap[s])
            || this.getUntaintedValue();

        // Then join this with its initial marking
        let r = this.join(this.produceMark(description),
            propertyTaint)

        logger.info("readprop", o, s, r);
        this.taintStack.push(r);
        return r;
    }

    public writeProperty(o: any, s: Accessor, description: TaintDescription) {
        this.resetState();
        if (!this.objects.has(o)) {
            this.objects.set(o, {});
        }

        const storedTaint = this.taintStack.pop();
        let objectTaintMap = this.objects.get(o);
        objectTaintMap[s] = this.join(this.produceMark(description), storedTaint);

        this.reportPossibleFlow(description, objectTaintMap[s]);
        this.reportPossibleImplicitFlow(description, objectTaintMap[s]);

        logger.info("writeprop", o, s, objectTaintMap[s]);
    }

    public unaryOp(description: TaintDescription): void {
        this.resetState();

        logger.info("unaryOp");
        // no-op. Unary operations on values do not change their taint status.
    }

    public binaryOp(description: TaintDescription): void {
        this.resetState();

        // Combine the taint markings of the two operands
        this.taintStack.push(
            this.join(this.taintStack.pop(), this.taintStack.pop())
        );

        logger.info("binaryOp");
    }

    public initVar(s: string, description: TaintDescription) {
        if (this.state === States.FunctionCall && this.stateCounter > 0) {
            const v = this.taintStack.pop();
            logger.info("init function arg", s, v);
            this.varTaintMap.set(s, v);
            this.stateCounter -= 1;
        } else {
            logger.info("initVar called but not an argument: " + s);
            this.varTaintMap.set(s, this.produceMark({name: s}));
            this.resetState();
        }
    }

    public builtin(name: string, actualArgs: number, description: TaintDescription) {
        this.resetState();
        logger.info("builtin", name, actualArgs);
        let args = [];

        for (let i = 0; i < actualArgs; i++) {
            args.push(this.taintStack.pop());
        }

        args.forEach((v) => this.reportPossibleFlow(description, v));
    }

    public conditional(s: any, description: TaintDescription): void {
        this.resetState();
        logger.info("conditional", s);

        // no peek operation...
        this.pc = this.taintStack[this.taintStack.length - 1];
    }

    public conditionalEnd(): void {
        this.resetState();
    }

    public functionCall(name: string, expectedArgs: number, actualArgs: number, description: TaintDescription) {
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
            this.taintStack.push(this.join(v, this.produceMark(description))));
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

    private reportPossibleImplicitFlow(description: TaintDescription, taintMarking: T) {
        // no sensitive upgrade check
        // TODO: figure out how this should work generally
        return;
    }

    // When a value with taint marking T flows into a construct with the given
    // description
    private reportPossibleFlow(description: TaintDescription, taintMarking: T): void {
        // Check to see if this is a sink, and that it accepts the given
        // marking
        let sinkDescription = this.getSink(description);
        if (sinkDescription !== undefined && this.check(description, taintMarking)) {
            console.log("tainted value flowed into sink "
                + JSON.stringify(description)
                + "!");
            this.flows.add(sinkDescription);
        }
    }

    private resetState() {
        this.state = States.None;
        this.stateCounter = 0;
    }

    protected getSink(description: TaintDescription): TaintDescription {
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
    const abstractMachine = new BooleanMachine(options);
    const compiledOutput = require(path);
    console.log(JSON.stringify(compiledOutput));
    compiledOutput.drive(abstractMachine);
    return abstractMachine.getTaint();
}
