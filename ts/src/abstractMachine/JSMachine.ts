// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {AbstractMachine, TaintDescription, RunSpecification} from "../types";
import logger from "./logger";
import {descriptionSubset} from "../utils";
import Operation from "./operation";

enum States {
    FunctionCall,
    None,
}

export default abstract class JSMachine<V, F> implements AbstractMachine {
    private taintStack: V[] = [];
    private varTaintMap: Map<string, V> = new Map();
    private spec: RunSpecification;
    private objects: Map<any, any>;
    private state: States = States.None;
    private stateCounter: number = 0;
    private flows: Set<F> = new Set();
    private pc: V;
    public callStack: Array<TaintDescription>;
    private lastPoppedValue: V;

    /**
     * Returns the taint marking associated with a completely clean value.
     */
    abstract getUntaintedValue(): V;

    /**
     * Join two taint labels. The resulting label should represent the union
     * of the two given labels.
     */
    abstract join(a: V, b: V): V;

    // When a value with taint marking T flows into a construct with the given
    // description
    abstract reportPossibleFlow(description: TaintDescription, taintMarking: V): void;

    /**
     * Produce an initial taint mark for a given description. This mark should
     * describe this description's affiliation with any sinks.
     *
     * For example, it could return a boolean T/F to represent its status as a
     * sink. It could also return some value to represent which sink it
     * describes.
     */
    abstract produceMark(description: TaintDescription): V;

    constructor(spec: RunSpecification) {
        // logger.info(sources, sinks);
        this.spec = spec;
        this.objects = new Map();
        this.pc = this.getUntaintedValue();
        this.callStack = [{name: "program start"}];
        this.getTaint = this.getTaint.bind(this);
    }

    private adviceWrap<I, O>(impl: (input: I) => O): Operation<I, O> {
        let wrappedOperationClass = class extends Operation<I, O> {
            protected implementation(input: I): O {
                return impl(input);
            }
        };

        let wrappedOperation = new wrappedOperationClass();

        return wrappedOperation;
    }

    public reportFlow(flow: F) {
        console.log("tainted value flowed into sink "
            + JSON.stringify(flow)
            + "!");
        this.flows.add(flow);
    }

    public functionReturnOp: Operation<[string, TaintDescription], void> =
        this.adviceWrap(
        (input) => {
            this.callStack.pop();
            this.taintStack.push(this.lastPoppedValue);
        });

    public functionReturn = this.functionReturnOp.execute;

    public literal(description: TaintDescription): void {
        this.push(this.produceMark(description), description);
    }

    public push(v: V, description: TaintDescription) {
        this.resetState();
        logger.info("push", v);
        this.taintStack.push(v);
    }

    public pop(description: TaintDescription) {
        this.resetState();
        logger.info("pop");
        this.lastPoppedValue = this.taintStack.pop();
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
        // TODO: fix this hack!
        // this.pop(description);
        // logger.info("wrote", this.varTaintMap.get(s));
    }

    public readProperty(o: any, s: Accessor, description: TaintDescription) {
        this.resetState();
        const isSource = this.isSource(description);
        const objectTaintMap = this.objects.get(o);

        // If objectTaintMap is defined, and it contains a defined taint mark
        // for this property, this will be its value. Otherwise, it will
        // default to the taint value of the parent object. If it doesn't
        // exist, it will be untainted.
        const propertyTaint =  (objectTaintMap && objectTaintMap[s])
            || this.varTaintMap.get(o) || this.getUntaintedValue();

        // Then join this with its initial marking
        let r = this.join(this.produceMark(description),
            propertyTaint);

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
        let v = this.join(this.taintStack[this.taintStack.length - 1], this.produceMark(description));

        // If we're currently processing function arguments
        if (this.state === States.FunctionCall && this.stateCounter > 0) {
            // pop the argument
            this.taintStack.pop();

            // subtract 1 from the amount of arguments left to process
            this.stateCounter -= 1;

            // track taint based on the function we are entering
            v = this.join(v, this.produceMark(this.currentFunction()));
        }

        logger.info("init var", s, v);

        // actually set the taint value of the variable
        this.varTaintMap.set(s, v);

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

    public conditional(description: TaintDescription): void {
        this.resetState();

        // no peek operation...
        const abstractValue = this.taintStack[this.taintStack.length - 1];

        logger.info("conditional", abstractValue);

        this.pc = abstractValue;
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
                tempStack.push(this.getUntaintedValue());
            }
        }

        logger.debug("funcall, temp stack:", tempStack);
        // tempStack.reverse();

        // Is this function a sink, and did any tainted values flow into it?
        tempStack.forEach(
            (mark) => this.reportPossibleFlow(description, mark));

        // The stack contains an extra taint value for the function we're
        // entering. Pop it and join it with the taint value for the function
        // invocation to produce the taint value for "entering the function".
        const functionInvocationTaint =
            this.join(this.taintStack.pop(),
                this.produceMark(description));

        // Push the actual arguments to taintStack
        tempStack.forEach((v) =>
            this.taintStack.push(this.join(v, functionInvocationTaint)));
        logger.debug("funcall, new stack:", this.taintStack);
        this.state = States.FunctionCall;
        this.stateCounter = expectedArgs;
        this.callStack.push(description);
    }

    public endExecution() {
        // do nothing.
    }

    public getTaint(): F[] {
        return [...this.flows];
    }

    private reportPossibleImplicitFlow(description: TaintDescription, taintMarking: V) {
        // no sensitive upgrade check
        // TODO: figure out how this should work generally
        return;
    }

    private currentFunction(): TaintDescription {
        return this.callStack[this.callStack.length - 1];
    }

    private resetState() {
        this.state = States.None;
        this.stateCounter = 0;
    }

    protected getSink(description: TaintDescription): TaintDescription {
        return this.spec.sinks.find((sink) => descriptionSubset(sink, description));
    }

    protected isSource(description: TaintDescription): boolean {
        return this.spec.sources.some((source) => descriptionSubset(source, description));
    }

    protected isSink(description: TaintDescription): boolean {
        return this.spec.sinks.some((sink) => descriptionSubset(sink, description));
    }
}
