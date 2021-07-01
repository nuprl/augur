// do not remove the following comment

// JALANGI DO NOT INSTRUMENT

import {Accessor, ExceptionVal} from "../nodeprof";
import {
    AbstractMachine,
    DynamicDescription, Location, RawVariableDescription,
    RunSpecification,
    ShadowObject, SourceSpan, SourcePosition,
    StaticDescription,
    VariableDescription
} from "../types";
import logger from "./logger";
import {descriptionSubset} from "../utils";
import Operation from "./operation";
import {useNativeImplementationPost, useNativeImplementationPre} from "../native/native";

export default abstract class JSMachine<V, F> implements AbstractMachine {

    /**
     * The stack of taint values for the current execution context. Almost
     * all AbstractMachine instructions will manipulate or read from this stack.
     * Taint values involved in intermediate computations will be stored here.
     */
    taintStack: V[] = [];

    /**
     * A mapping of all bound variables to their corresponding taint values.
     * For example, if a variable "x" is tainted, there will be an entry in
     * this map similar to:
     *    "x" => tainted
     *
     * Variables in ALL scopes are tracked in this map. Variables in
     * different scopes with the same name will NOT conflict in this map,
     * because a "VariableDescription" describes a variable in a specific
     * concrete function execution.
     */
    varTaintMap: Map<VariableDescription, V> = new Map();

    /**
     * The specification of taint sources and sinks, supplied by the user.
     */
    spec: RunSpecification;

    /**
     * A mapping of all objects in the program to their "shadow objects".
     * For example, if the program we're analyzing is:
     *    let exampleObject = {property: "user input"};
     *    (where "user input" a tainted value)
     *  there will be an entry in this map that roughly corresponds to:
     *    "obj1" => {property: tainted}
     *
     *  See the documentation for ShadowObject for more information.
     */
    private objects: Map<DynamicDescription, ShadowObject<V>>;

    /**
     * TODO: document
     */
    private nativeModelSavedValues: Array<any> = [];

    flows: Set<F> = new Set();
    pc: V;
    functionCallStack: Array<StaticDescription>;
    returnValue: V;

    argsLeftToProcess: number = 0;

    lastObjectAccessed: V;

    /**
     * Used to keep track of the initial arguments given to each function in
     * the current call stack.
     *
     * Whenever a function is entered, the taint values of its arguments
     * should be pushed to this stack. Whenever a function exits, this stack
     * should be popped.
     *
     * ALL arguments given to the function should be pushed, not just ones
     * that the argument maps to named parameters. For example, in this code:
     *
     *     function add(x) {
     *         return arguments[0] + arguments[1]; // ignores named parameter x
     *     }
     *     add(1, 2); // returns 3
     *
     * The taint values for BOTH arguments should be pushed to this stack.
     *
     * It's necessary to keep track of these taint values in case the
     * program accesses the "arguments" variable, which represents an
     * indexable array into the function's arguments.
     */
    functionArgsStack: Array<Array<V>>;

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

    functionTree: Map<number, StaticDescription[]> = new Map<number, StaticDescription[]>();
    taintTree: Map<number, V[]> = new Map<number, V[]>();
    functionArgsTree: Map<number, Array<Array<V>>> = new Map<number, Array<Array<V>>>();
    ROOTID: number = 0;

    // promiseMap: Map<DynamicDescription, ShadowObject<V>> = new Map<DynamicDescription, ShadowObject<V>>()
    promiseMap: Map<any, ShadowObject<V>> = new Map<any, ShadowObject<V>>()

    constructor(spec: RunSpecification) {
        // logger.info(sources, sinks);
        this.spec = spec;
        this.objects = new Map();
        this.pc = this.getUntaintedValue();
        // this.functionCallStack = [{name: "program start"}];
        this.getTaint = this.getTaint.bind(this);
        this.lastObjectAccessed = this.getUntaintedValue();
        // this.functionArgsStack = [[]];

        this.functionTree.set(this.ROOTID, [{name: "program start"}])
        this.taintTree.set(this.ROOTID, []);
        this.functionArgsTree.set(this.ROOTID, [[]]);
    }

    private adviceWrap<I, O>(impl: (input: I) => O): Operation<I, O> {
        let wrappedOperationClass = class extends Operation<I, O> {
            protected implementation(input: I): O {
                return impl(input);
            }
        };

        return new wrappedOperationClass();
    }

    public callstackPush(frame: StaticDescription, ): void {
        // this.functionCallStack.push(frame);
        this.functionTree.get(this.ROOTID).push(frame);
        this.functionEnterAdvice.push(null);
        this.functionExitAdvice.push(null);
    }

    public callstackPop(): void {
        // this.functionCallStack.pop();
        this.functionTree.get(this.ROOTID).pop();
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
                // 1. set up `arguments` variable in shadow memory.
                // let actualArgsValues = this.taintStack.slice(this.taintStack.length - actualArgs);
                let actualArgsValues = this.taintTree.get(this.ROOTID).slice(
                    this.taintTree.get(this.ROOTID).length - actualArgs);

                // this.functionArgsStack.push(actualArgsValues);
                this.functionArgsTree.get(this.ROOTID).push(actualArgsValues);

                // 2. Ensure the right number of arguments is present on
                // `taintStack`.

                if (expectedArgs != actualArgs) {
                    let difference = Math.abs(expectedArgs - actualArgs);
                    // let operation = (actualArgs > expectedArgs)
                    //     ? (() => this.taintStack.pop())
                    //     : (() => this.taintStack.push(this.getUntaintedValue()));
                    let operation = (actualArgs > expectedArgs)
                        ? (() => this.taintTree.get(this.ROOTID).pop())
                        : (() => this.taintTree.get(this.ROOTID).push(this.getUntaintedValue()));

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
                // const functionInvocationTaint =
                //     this.join(this.taintStack[this.taintStack.length - expectedArgs - 1],
                //         this.produceMark(description));
                const functionInvocationTaint =
                    this.join(this.taintTree.get(this.ROOTID)[
                        this.taintTree.get(this.ROOTID).length - expectedArgs - 1],
                        this.produceMark(description));

                for (let i = this.taintTree.get(this.ROOTID).length - expectedArgs; i < this.taintTree.get(this.ROOTID).length; i++) {
                    this.reportPossibleFlow(description, this.taintTree.get(this.ROOTID)[i]);
                    this.taintTree.get(this.ROOTID)[i] =
                        this.join(this.taintTree.get(this.ROOTID)[i], functionInvocationTaint);
                }

                // for (let i = this.taintStack.length - expectedArgs; i < this.taintStack.length; i++) {
                //     this.reportPossibleFlow(description, this.taintStack[i]);
                //     this.taintStack[i] = this.join(this.taintStack[i], functionInvocationTaint);
                // }

                // get arguments from the stack
                // let args = this.taintStack.splice(this.taintStack.length - expectedArgs);
                // args.reverse();
                // this.taintStack.push(...args);

                let args = this.taintTree.get(this.ROOTID).splice(
                    this.taintTree.get(this.ROOTID).length - expectedArgs);
                args.reverse();
                this.taintTree.get(this.ROOTID).push(...args);

                // prepare the machine to declare the named parameters to
                // this function
                this.argsLeftToProcess = expectedArgs;
            }
        );
    public functionInvokeStart = this.functionInvokeStartOp.wrapper;

    public functionInvokeEndOp: Operation<[string, StaticDescription], void> =
        this.adviceWrap(
            ([name, description]) => {
                // this.functionArgsStack.pop();
                this.functionArgsTree.get(this.ROOTID).pop();


                // we need to come up with a taint value to use for the
                // value of this function application. the first thing we do
                // is make sure we taint this value if the user asked to
                // taint all return values from this function.
                let returnTaintValue = this.produceMark(description);

                // if the function actually returned a value, the taint
                // value needs to reflect that
                if (this.returnValue) {
                    returnTaintValue =
                        this.join(returnTaintValue, this.returnValue);
                }
                // if the function didn't explicitly return a value, it
                // returns undefined, which will be untainted. so we won't
                // touch the return taint value.

                // push the return taint value to the stack
                this.push([returnTaintValue, description]);

                // clean out return value
                this.returnValue = undefined;
            }
        );
    public functionInvokeEnd = this.functionInvokeEndOp.wrapper;

    public functionEnterAdvice: {(name: string, actualArgs: number, description: StaticDescription): void}[] = [];
    public functionEnterOp: Operation<[string, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, description]) => {

                if (description.location.fileName === "eval") {
                    console.log("eval time");
                }

                if (this.checkPromiseWrapper(description.location, 2, 5)) {
                    console.log("Entering Then!")
                } else if (this.checkPromiseWrapper(description.location, 8, 3)) {
                    console.log("Entering Resolve!")
                }
                let advice = this.functionEnterAdvice[this.functionEnterAdvice.length - 2];
                if (advice != null) {
                    advice(name, actualArgs, description);
                    return;
                }

                this.callstackPush(description);

                // pop the value of the function
                // let functionTaint = this.taintStack.pop();
                let functionTaint = this.taintTree.get(this.ROOTID).pop();

                // report possible flows from callee perspective
                this.reportPossibleFlow(description, functionTaint);
            }
        );
    public functionEnter = this.functionEnterOp.wrapper;

    public functionExitAdvice: {(name: string, actualArgs: number, description: StaticDescription): void}[] = [];
    public functionExitOp: Operation<[string, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, description]) => {
                let advice = this.functionExitAdvice[this.functionExitAdvice.length - 2];
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
                // this.returnValue = this.taintStack[this.taintStack.length - 1];
                this.returnValue = this.taintTree.get(this.ROOTID)[
                this.taintTree.get(this.ROOTID).length - 1];
                // we shouldn't pop this manually. a discardValue
                // instruction should be generated by NodeProf right after
                // the return callback.
                // this.taintStack.pop();

                //IGNORE pop() function above!
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
                // this.taintStack.push(v);
                this.taintTree.get(this.ROOTID).push(v);
            }
        );

    public push = this.pushOp.wrapper;

    public popOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
                logger.info("pop");
                // this.taintStack.pop();
                this.taintTree.get(this.ROOTID).pop();
            }
        );

    public pop = this.popOp.wrapper;

    public readVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                this.resetState();
                const r = this.join(this.produceMark(description),
                    this.varTaintMap.get(s));
                // this.taintStack.push(r);
                this.taintTree.get(this.ROOTID).push(r);
                logger.info("read", s, r);
            });

    public readVar = this.readVarOp.wrapper;

    public writeVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                this.resetState();
                const v = this.join(this.produceMark(description),
                    this.taintTree.get(this.ROOTID)[
                    this.taintTree.get(this.ROOTID).length - 1]);
                // Do not pop off the stack for a write
                // const v = this.join(this.produceMark(description),
                //     this.taintStack[this.taintStack.length - 1]);
                logger.info("write", s, v);
                this.varTaintMap.set(s, v);
                this.reportPossibleFlow(description, v);
                this.reportPossibleImplicitFlow(description, v);
            }
        );

    public writeVar = this.writeVarOp.wrapper;

    public readPropertyOp: Operation<[DynamicDescription, Accessor, boolean, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, isMethod, description]) => {
                this.resetState();
                const isSource = this.isSource(description);
                const objectTaintMap = this.getShadowObject(o);

                // If objectTaintMap contains a defined taint mark
                // for this property, this will be its value. Otherwise, it will
                // be untainted.
                const propertyTaint = objectTaintMap[s]
                    || this.getUntaintedValue();

                // Then join this with its initial marking
                let r = this.join(this.produceMark(description),
                    propertyTaint);

                // if we're not going to perform a method call using this
                // property, we want to throw away the value of the object
                // itself, which is currently sitting at the top of the stack.
                // if this is a method call, we want to keep the base
                // object's value on the stack, as we will use it later in
                // functionInvokeStart.
                // if (!isMethod) {
                    // When reading a property of an object, the value of the
                    // object is discarded and replaced with the projection.
                    // Discard the object's value on the taint stack.
                // TODO: document this
                //     this.lastObjectAccessed = this.taintStack.pop();
                this.lastObjectAccessed = this.taintTree.get(this.ROOTID).pop();
                // }

                logger.info("readprop", o, s, r);
                // this.taintStack.push(r);
                this.taintTree.get(this.ROOTID).push(r);
            }
        );

    public readProperty = this.readPropertyOp.wrapper;

    public writePropertyOp: Operation<[DynamicDescription, Accessor, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, description]) => {
                this.resetState();

                // const storedTaint = this.taintStack.pop();
                const storedTaint = this.taintTree.get(this.ROOTID).pop();
                let objectTaintMap = this.getShadowObject(o);
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
                // this.taintStack.push(
                //     this.join(this.taintStack.pop(), this.taintStack.pop())
                // );
                this.taintTree.get(this.ROOTID).push(this.join(
                    this.taintTree.get(this.ROOTID).pop(),
                    this.taintTree.get(this.ROOTID).pop()));
                logger.info("binaryOp");
            }
        );

    public binary = this.binaryOp.wrapper;

    public initVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                // let v = this.join(this.taintStack[this.taintStack.length - 1], this.produceMark(description));
                let v = this.join(this.taintTree.get(this.ROOTID)[
                this.taintTree.get(this.ROOTID).length - 1], this.produceMark(description));

                if (this.argsLeftToProcess > 0) {
                    // this.taintStack.pop();
                    this.taintTree.get(this.ROOTID).pop();
                    this.argsLeftToProcess--;
                }

                logger.info("init var", s, v);

                // actually set the taint value of the variable
                this.varTaintMap.set(s, v);
            }
        );

    public initVar = this.initVarOp.wrapper;

    public builtinOp: Operation<[DynamicDescription, DynamicDescription, number, any, boolean, StaticDescription], void> =
        this.adviceWrap(
            ([name, receiver, actualArgs, extraRecords, isMethod, description]) => {
                this.resetState();
                logger.info("builtin", name, actualArgs);

                // if this is a method, push the value of the base object
                // (that we saved earlier)
                if (isMethod) {
                    this.push([this.lastObjectAccessed, description]);
                }

                let saved = useNativeImplementationPre(this, name, receiver, actualArgs, extraRecords, isMethod, description);

                this.nativeModelSavedValues.push(saved);
            }
        );

    public builtin = this.builtinOp.wrapper;

    public builtinExitOp: Operation<[DynamicDescription, DynamicDescription, StaticDescription], void> =
        this.adviceWrap(
            ([name, returnValueName, description]) => {
                this.resetState();
                logger.info("builtinExit", name);

                // retrieve saved information from implementationPre
                let saved = this.nativeModelSavedValues.pop();

                useNativeImplementationPost(this, name, returnValueName, saved, description);
            }
        );

    public builtinExit = this.builtinExitOp.wrapper;

    public conditionalOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
                const abstractValue = this.taintTree.get(this.ROOTID)[
                this.taintTree.get(this.ROOTID).length - 1];

                // no peek operation...
                // const abstractValue = this.taintStack[this.taintStack.length - 1];

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

    public initializeArgumentsObjectOp: Operation<[DynamicDescription, StaticDescription], void> =
        this.adviceWrap(
            ([argumentsObject, description]) => {
               this.resetState();

               // only initialize the "arguments" variable if we haven't already
               if (!this.objects.has(argumentsObject)) {
                   // peek into function args stack
                   // let argsValues = this.functionArgsStack[this.functionArgsStack.length - 1];
                   let argsValues = this.functionArgsTree.get(this.ROOTID)[this.functionArgsTree.get(this.ROOTID).length - 1]

                   // take the values of the arguments and SET that as the
                   // shadow object for the "arguments" variable.

                   // "as unknown as ShadowObject<V>" is just a typescript hack.
                   // the `argsValues` object will be an array of abstract
                   // values of type V, and this will technically fit the shape
                   // of ShadowObject<V>. but typescript will not believe it.
                   this.objects.set(argumentsObject, argsValues as unknown as ShadowObject<V>);
               }
            }
        );
    public initializeArgumentsObject = this.initializeArgumentsObjectOp.wrapper;

    public endExecution() {
        // do nothing.
    }

    public asyncFunctionEnterOp: Operation<[StaticDescription], void> =
        this.adviceWrap(([description]) => {

        });
    public asyncFunctionEnter = this.asyncFunctionEnterOp.wrapper;

    public asyncFunctionExitOp: Operation<[number, DynamicDescription, any, ExceptionVal, StaticDescription], void> =
        this.adviceWrap(([iid, promiseId, result, exceptionVal, description]) => {
            let v = this.taintTree.get(this.ROOTID)[this.taintTree.get(this.ROOTID).length - 1];
            this.promiseMap.set(result, {resolve: v , reject: v})
        });
    public asyncFunctionExit = this.asyncFunctionExitOp.wrapper;

    public awaitPreOp: Operation<[number, DynamicDescription, any, StaticDescription], void> =
        this.adviceWrap(([id, promiseId, promiseOrValAwaited, description]) => {
            if (!this.promiseMap.has(promiseOrValAwaited)) {
                let v = this.taintTree.get(this.ROOTID)[this.taintTree.get(this.ROOTID).length - 1];
                this.promiseMap.set(promiseOrValAwaited, {resolve: v , reject: v})
            }
            this.setMachineState(this.ROOTID, id);
        });
    public awaitPre = this.awaitPreOp.wrapper;

    public awaitPostOp: Operation<[number, DynamicDescription, any, any, StaticDescription], void> =
        this.adviceWrap(([id, promiseId, promiseOrValAwaited, resolveOrRejectedVal, description]) => {
            this.setMachineState(id, this.ROOTID);
            let resolveField = Object.keys(this.promiseMap.get(promiseOrValAwaited))[0]
            this.taintTree.get(this.ROOTID).push(this.promiseMap.get(promiseId)[resolveField]);

        });
    public awaitPost = this.awaitPostOp.wrapper;

    private setMachineState(from: number, to: number) {
        this.functionTree.set(to, [...this.functionTree.get(from)]);
        this.taintTree.set(to, [...this.taintTree.get(from)]);
        this.functionArgsTree.set(to, [...this.functionArgsTree.get(from)])
    }

    public getTaint(): F[] {
        return [...this.flows];
    }

    public initializeShadowObject(obj: DynamicDescription): void {
        if (!this.objects.has(obj)) {
            this.objects.set(obj, Object.create(null));
        }
    }

    public getShadowObject(obj: DynamicDescription): ShadowObject<V> {
        // ensure the shadow object is initialize
        this.initializeShadowObject(obj);
        return this.objects.get(obj);
    }

    private reportPossibleImplicitFlow(description: StaticDescription, taintMarking: V) {
        // no sensitive upgrade check
        // TODO: figure out how this should work generally
        return;
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

    private checkPromiseWrapper(loc: Location, startln: number, startcol: number): boolean {
        if (loc.fileName === "polyfill.js") {
            let position: SourceSpan = loc.pos;
            if (typeof position == 'number') {
                return position === startln;
            } else if (position instanceof Array) {
                return position === [startln, startcol];
            } else {
                let start: SourcePosition = position.start;
                let end: SourcePosition = position.end;

                if (typeof start == 'number') {
                    return start === startln
                } else {
                    return start[0] === startln && start[1] === startcol;
                }
            }
        }
        return false;
    }
}

