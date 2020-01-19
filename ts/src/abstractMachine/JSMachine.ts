// do not remove the following comment

// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {
    AbstractMachine,
    DynamicDescription,
    StaticDescription,
    RunSpecification,
    VariableDescription
} from "../types";
import logger from "./logger";
import {descriptionSubset} from "../utils";
import Operation from "./operation";
import {getNativeModel, useNativeImplementation} from "../native/native";

export default abstract class JSMachine<V, F> implements AbstractMachine {
    taintStack: V[] = [];
    varTaintMap: Map<VariableDescription, V> = new Map();
    spec: RunSpecification;

    // maps all dynamic descriptions of objects to:
    // an object whose property names match the original objects', and whose
    // values are taint descriptions.
    objects: Map<DynamicDescription, {[name: string]: V}>;

    flows: Set<F> = new Set();
    pc: V;
    functionCallStack: Array<StaticDescription>;
    returnValue: V;

    argsLeftToProcess: number = 0;

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
    abstract reportPossibleFlow(description: StaticDescription, taintMarking: V): void;

    /**
     * Produce an initial taint mark for a given description. This mark should
     * describe this description's affiliation with any sources.
     *
     * For example, it could return a boolean T/F to represent its status as a
     * source. It could also return some value to represent which source it
     * describes.
     */
    abstract produceMark(description: StaticDescription): V;

    constructor(spec: RunSpecification) {
        // logger.info(sources, sinks);
        this.spec = spec;
        this.objects = new Map();
        this.pc = this.getUntaintedValue();
        this.functionCallStack = [{name: "program start"}];
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

    public callstackPush(frame: StaticDescription): void {
        this.functionCallStack.push(frame);
        this.functionEnterAdvice.push(null);
        this.functionExitAdvice.push(null);
    }

    public callstackPop(): void {
        this.functionCallStack.pop();
        this.functionEnterAdvice.pop();
        this.functionExitAdvice.pop();
    }

    public installAdvice(adviceStack: Array<Function>, f: Function): void {
        adviceStack[adviceStack.length - 1] = f;
    }

    public reportFlow(flow: F) {
        console.log("tainted value flowed into sink "
            + JSON.stringify(flow)
            + "!");
        this.flows.add(flow);
    }

    public functionInvokeStartOp: Operation<[string, number, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, expectedArgs, actualArgs, description]) => {
                // 1. Ensure the right number of arguments is present on
                // `taintStack`.

                /*
                if (actualArgs > expectedArgs) {
                    let difference = expectedArgs - actualArgs;
                    for (let i = 0; i < difference; i++) {
                        this.taintStack.pop();
                    }
                } else if (expectedArgs > actualArgs) {
                    let difference = actualArgs - expectedArgs;
                    for (let i = 0; i < difference; i++) {
                        this.taintStack.push(this.getUntaintedValue());
                    }
                } */

                if (expectedArgs != actualArgs) {
                    let difference = Math.abs(expectedArgs - actualArgs);
                    let operation = (actualArgs > expectedArgs)
                        ? (() => this.taintStack.pop())
                        : (() => this.taintStack.push(this.getUntaintedValue()));

                    for (let i = 0; i < difference; i++) {
                        operation();
                    }
                }

                // 2. Report possible taint flows into this function

                // We want to track a dependency between each arguments and
                // both:
                // - the function we're entering
                // - the invocation of the function.
                //
                // The stack contains an extra taint value for the function
                // we're entering. Pop it and join it with the taint value for
                // the function invocation to produce the taint value for
                // "entering the function".
                const functionInvocationTaint =
                    this.join(this.taintStack[this.taintStack.length - expectedArgs - 1],
                        this.produceMark(description));

                for (let i = this.taintStack.length - expectedArgs; i < this.taintStack.length; i++) {
                    this.reportPossibleFlow(description, this.taintStack[i]);
                    this.taintStack[i] = this.join(this.taintStack[i], functionInvocationTaint);
                }

                // reverse order of arguments
                let args = this.taintStack.splice(this.taintStack.length - expectedArgs);
                args.reverse();
                this.taintStack.push(...args);

                this.argsLeftToProcess = expectedArgs;

                /*
                const tempStack = [];

                // Pop off the actual arguments given to this function from taintStack
                for (let i = 0; i < actualArgs; i++) {
                    tempStack.unshift(this.taintStack.pop());
                }

                // If not enough arguments were supplied, they
                // will be "undefined". This value is *untainted*,
                // so push the untainted marker.
                if (expectedArgs > actualArgs) {
                    const diff = expectedArgs - actualArgs;

                    for (let i = 0; i < diff; i++) {
                        tempStack.push(this.getUntaintedValue());
                    }
                }

                // Report possible flows of arguments into this function,
                // from the caller-perspective.
                tempStack.forEach(
                    (mark) => this.reportPossibleFlow(description, mark));

                // Push the actual arguments to taintStack
                tempStack.forEach((v) =>
                    this.taintStack.push(this.join(v, functionInvocationTaint)));
                */
            }
        );
    public functionInvokeStart = this.functionInvokeStartOp.wrapper;

    public functionInvokeEndOp: Operation<[string, StaticDescription], void> =
        this.adviceWrap(
            ([name, description]) => {
                this.push([this.returnValue, description]);
            }
        );
    public functionInvokeEnd = this.functionInvokeEndOp.wrapper;

    public functionEnterAdvice: {(name: string, actualArgs: number, description: StaticDescription): void}[] = [];
    public functionEnterOp: Operation<[string, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, description]) => {
                let advice = this.functionEnterAdvice[this.functionEnterAdvice.length - 1];
                if (advice != null) {
                    advice(name, actualArgs, description);
                    return;
                }

                this.callstackPush(description);

                // pop the value of the function
                this.taintStack.pop();

                // TODO: report possible flows from callee perspective
            }
        );
    public functionEnter = this.functionEnterOp.wrapper;

    public functionExitAdvice: {(name: string, actualArgs: number, description: StaticDescription): void}[] = [];
    public functionExitOp: Operation<[string, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, description]) => {
                let advice = this.functionExitAdvice[this.functionExitAdvice.length - 1];
                if (advice != null) {
                    advice(name, actualArgs, description);
                    return;
                }

                this.callstackPop();
            }
        );
    functionExit = this.functionExitOp.wrapper;

    public functionReturnOp: Operation<[string, StaticDescription], void> =
        this.adviceWrap(
            (input) => {
                this.returnValue = this.taintStack[this.taintStack.length - 1];
            });
    public functionReturn = this.functionReturnOp.wrapper;

    public literalOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.push([this.produceMark(description), description]);
            });

    public literal = this.literalOp.wrapper;

    public pushOp: Operation<[V, StaticDescription], void> =
        this.adviceWrap(
            ([v, description]) => {
                this.resetState();
                logger.info("push", v);
                this.taintStack.push(v);
            }
        );

    public push = this.pushOp.wrapper;

    public popOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
                logger.info("pop");
                this.taintStack.pop();
            }
        );

    public pop = this.popOp.wrapper;

    public readVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                this.resetState();
                const r = this.join(this.produceMark(description),
                    this.varTaintMap.get(s));
                this.taintStack.push(r);
                logger.info("read", s, r);
            });

    public readVar = this.readVarOp.wrapper;

    public writeVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
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
        );

    public writeVar = this.writeVarOp.wrapper;

    public readPropertyOp: Operation<[DynamicDescription, Accessor, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, description]) => {
                this.resetState();
                const isSource = this.isSource(description);
                const objectTaintMap = this.objects.get(o);

                // If objectTaintMap is defined, and it contains a defined taint mark
                // for this property, this will be its value. Otherwise, it will
                // be untainted.
                const propertyTaint = (objectTaintMap && objectTaintMap[s])
                    || this.getUntaintedValue();

                // Then join this with its initial marking
                let r = this.join(this.produceMark(description),
                    propertyTaint);

                // When reading a property of an object, the value of the
                // object is discarded and replaced with the projection.
                // Discard the object's value on the taint stack.
                this.taintStack.pop();

                logger.info("readprop", o, s, r);
                this.taintStack.push(r);
            }
        );

    public readProperty = this.readPropertyOp.wrapper;

    public writePropertyOp: Operation<[DynamicDescription, Accessor, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, description]) => {
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
        );

    public writeProperty = this.writePropertyOp.wrapper;

    public unaryOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();

                logger.info("unaryOp");
                // no-op. Unary operations on values do not change their taint status.
            }
        );

    public unary = this.unaryOp.wrapper;

    public binaryOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            (description) => {
                this.resetState();

                // Combine the taint markings of the two operands
                this.taintStack.push(
                    this.join(this.taintStack.pop(), this.taintStack.pop())
                );

                logger.info("binaryOp");
            }
        );

    public binary = this.binaryOp.wrapper;

    public initVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                let v = this.join(this.taintStack[this.taintStack.length - 1], this.produceMark(description));

                if (this.argsLeftToProcess > 0) {
                    this.taintStack.pop();
                    this.argsLeftToProcess--;
                }

                logger.info("init var", s, v);

                // actually set the taint value of the variable
                this.varTaintMap.set(s, v);
            }
        );

    public initVar = this.initVarOp.wrapper;

    public builtinOp: Operation<[string, number, any, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, extraRecords, description]) => {
                this.resetState();
                logger.info("builtin", name, actualArgs);

                useNativeImplementation(this, description.name, actualArgs, extraRecords, description);
            }
        );

    public builtin = this.builtinOp.wrapper;

    public builtinExitOp: Operation<[string, StaticDescription], void> =
        this.adviceWrap(
            ([name, description]) => {
                this.resetState();
                logger.info("builtinExit", name);
            }
        );

    public builtinExit = this.builtinExitOp.wrapper;

    public conditionalOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();

                // no peek operation...
                const abstractValue = this.taintStack[this.taintStack.length - 1];

                logger.info("conditional", abstractValue);

                this.pc = abstractValue;
            }
        );

    public conditional = this.conditionalOp.wrapper;

    public conditionalEndOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
            }
        );

    public conditionalEnd = this.conditionalEndOp.wrapper;

    public endExecution() {
        // do nothing.
    }

    public getTaint(): F[] {
        return [...this.flows];
    }

    private reportPossibleImplicitFlow(description: StaticDescription, taintMarking: V) {
        // no sensitive upgrade check
        // TODO: figure out how this should work generally
        return;
    }

    private currentFunction(): StaticDescription {
        return this.functionCallStack[this.functionCallStack.length - 1];
    }

    private resetState() {
        // this.state = States.None;
        // this.stateCounter = 0;
    }

    protected getSink(description: StaticDescription): StaticDescription {
        return this.spec.sinks.find((sink) => descriptionSubset(sink, description));
    }

    protected isSource(description: StaticDescription): boolean {
        return this.spec.sources.some((source) => descriptionSubset(source, description));
    }

    protected isSink(description: StaticDescription): boolean {
        return this.spec.sinks.some((sink) => descriptionSubset(sink, description));
    }
}
