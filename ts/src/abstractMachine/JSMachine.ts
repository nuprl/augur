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
import * as bunyan from "bunyan";
import createLogger from "./logger";
import {descriptionMatchesTaintSpec, descriptionSubset} from "../utils";
import Operation from "./operation";
import {useNativeImplementationPost, useNativeImplementationPre} from "../native/native";
import * as fs from 'fs'; // For output during live logging sessions.

const debug = false;
const promiseDebug = false;
const promiseDebugMap = false;

export default abstract class JSMachine<V, F> implements AbstractMachine {

    /**
     * Are we logging live? If so, we will write taint flows directly to the output file.
     * If not, we write all instructions to the output file, instead.
     */
    liveLogging: boolean = false;

    /**
     * The output file path, used only if we are live logging.
     */
    outputFilePath: string;

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
     * Contains information passed from native model 
     * implementationPre's to implementationPost's.
     */
    private nativeModelSavedValues: Array<any> = [];

    flows: Set<F> = new Set();
    pc: V;
    functionCallStack: Array<StaticDescription>;
    returnValue: V;

    argsLeftToProcess: number = 0;

    lastObjectAccessed: V;

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

    // TODO: Matt comment
    functionTree: Map<number, StaticDescription[]> = new Map<number, StaticDescription[]>();

    /**
     * The tree of taint values for the current execution context. Almost
     * all AbstractMachine instructions will manipulate or read from this stack.
     * Taint values involved in intermediate computations will be stored here.
     */
    taintTree: Map<number, V[]> = new Map<number, V[]>();

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
    functionArgsTree: Map<number, Array<Array<V>>> = new Map<number, Array<Array<V>>>();

    // TODO: Matt comment
    ROOTID: number = 0;

    // TODO: Matt comment
    promiseMap: Map<any, ShadowObject<V>> = new Map<any, ShadowObject<V>>()

    // TODO: Matt comment
    asyncPromiseMap: Map<any, ShadowObject<V>> = new Map<any, ShadowObject<V>>()

    logger: bunyan;

    constructor(spec: RunSpecification, liveLogging = false, outputFilePath: string = "") {
        this.spec = spec;
        this.objects = new Map();
        this.pc = this.getUntaintedValue();
        this.getTaint = this.getTaint.bind(this);
        this.lastObjectAccessed = this.getUntaintedValue();
        this.outputFilePath = outputFilePath;
        this.liveLogging = liveLogging;

        this.functionTree.set(this.ROOTID, [{name: "program start"}])
        this.taintTree.set(this.ROOTID, []);
        this.functionArgsTree.set(this.ROOTID, [[]]);

        this.logger = createLogger(spec);
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
        this.functionTree.get(this.ROOTID).push(frame);
        this.functionEnterAdvice.push(null);
        this.functionExitAdvice.push(null);
    }

    public callstackPop(): void {
        this.functionTree.get(this.ROOTID).pop();
        this.functionEnterAdvice.pop();
        this.functionExitAdvice.pop();
    }

    public installAdvice(adviceStack: Array<Function>, f: Function): void {
        adviceStack.push(f);
    }

    public reportFlow(flow: F) {
        if (this.liveLogging) {
            fs.appendFileSync(this.outputFilePath,
            JSON.stringify(flow, (key, value) =>
            value instanceof Set ? [...value] : value, 4)
            + "\n");
        }

        this.logger.info("tainted value flowed into sink "
            + JSON.stringify(flow, (key, value) =>
                value instanceof Set ? [...value] : value)
            + "!");

        this.flows.add(flow);
    }

    public functionInvokeStartOp: Operation<[string, number, number, DynamicDescription[], StaticDescription], void> =
        this.adviceWrap(
            ([name, expectedArgs, actualArgs, argShadowIDs, description]) => {
                // 1. set up `arguments` variable in shadow memory.
                let actualArgsValues = this.taintTree.get(this.ROOTID).slice(
                    this.taintTree.get(this.ROOTID).length - actualArgs).map(v => this.sanitize(v, description));

                this.functionArgsTree.get(this.ROOTID).push(actualArgsValues);

                // 2. Ensure the right number of arguments is present on
                // `taintStack`.

                if (expectedArgs != actualArgs) {
                    // What is the difference between # of expected and actual args?
                    let difference = Math.abs(expectedArgs - actualArgs);

                    // Decide whether to add or subtract args
                    let operation = (actualArgs > expectedArgs)
                        ? (() => this.taintTree.get(this.ROOTID).pop())
                        : (() => {
                            return this.taintTree.get(this.ROOTID).push(this.getUntaintedValue())
                        });

                    // Add or subtract until it matches
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
                    this.join(this.taintTree.get(this.ROOTID)[
                        this.taintTree.get(this.ROOTID).length - expectedArgs - 1],
                        this.produceMark(description));

                // We check if the function is defined as a recursive sink.
                // If it is, we will deeply check all arguments for taintedness.
                const sinkConfig = this.getConfigForSink(description);
                const isRecursive = sinkConfig && sinkConfig.config && sinkConfig.config.recursive;
                if (isRecursive) {
                    for (const argShadowID of argShadowIDs) {
                        // Check the obj. that argShadowIDs[i] refers to for (recursive) taint.
                        const argObj = this.getShadowObject(argShadowID);
                        for (const field in argObj) {
                            this.reportPossibleFlow(description, argObj[field]);
                        }
                    }
                }
                for (let i = this.taintTree.get(this.ROOTID).length - expectedArgs, j = 0; i < this.taintTree.get(this.ROOTID).length; i++, j++) {
                    this.reportPossibleFlow(description, this.taintTree.get(this.ROOTID)[i]);
                    this.taintTree.get(this.ROOTID)[i] =
                        this.join(this.taintTree.get(this.ROOTID)[i], functionInvocationTaint);
                }

                // Take function args off stack
                let args = this.taintTree.get(this.ROOTID).splice(
                    this.taintTree.get(this.ROOTID).length - expectedArgs);
                // Reverse them
                args.reverse();
                // Sanitize them if necessary
                args = args.map(v => this.sanitize(v, description))
                // Push them back onto stack
                this.taintTree.get(this.ROOTID).push(...args);

                // prepare the machine to declare the named parameters to this function
                this.argsLeftToProcess = expectedArgs;

                this.logger.info("func invoke start: " + this.taintTree.get(0))
            }
        );
    public functionInvokeStart = this.functionInvokeStartOp.wrapper;

    public functionInvokeEndOp: Operation<[string, DynamicDescription[], StaticDescription], void> =
        this.adviceWrap(
            ([name, shadowIDs, description]) => {
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
                        this.sanitize(this.join(returnTaintValue, this.returnValue), description);
                }

                // We also need to check if we should apply taint differently.
                // This is related to the "config" option in the taint spec.
                if (shadowIDs) {
                    let taintInfo = this.getConfigForSource(description);
                    // For the "recursive" taint configuration:
                    if (taintInfo && taintInfo.config && taintInfo.config.recursive) {
                        // TODO: This doesn't go deep enough.
                        for (const shadowID of shadowIDs) {
                            const returnedObj = this.getShadowObject(shadowID);
                            const keys = Object.keys(returnedObj);
                            for (const k of keys) {
                                // TODO: Will this correctly identify taint sources for the ORM application?
                                returnedObj[k] = this.produceMark(description);
                            }
                        }
                    }
                }

                // if the function didn't explicitly return a value, it
                // returns undefined, which will be untainted. so we won't
                // touch the return taint value.

                // push the return taint value to the stack
                this.push([returnTaintValue, description]);

                // clean out return value
                this.returnValue = undefined;

                this.logger.info("func invoke end: " + this.taintTree.get(0))
            }
        );
    public functionInvokeEnd = this.functionInvokeEndOp.wrapper;

    public functionEnterAdvice: {(name: string, actualArgs: number, description: StaticDescription): void}[] = [];
    public reactionAdvice: {(p: any): void}[] = [];
    public functionEnterOp: Operation<[string, number, StaticDescription], void> =
        this.adviceWrap(
            ([name, actualArgs, description]) => {

                if (description.location.fileName === "eval") {
                    this.logger.info("eval time");
                }
                let advice = this.functionEnterAdvice[this.functionEnterAdvice.length - 2];
                if (advice != null) {
                    advice(name, actualArgs, description);
                    return;
                }

                this.callstackPush(description);

                // pop the value of the function
                let functionTaint = this.taintTree.get(this.ROOTID).pop();

                // report possible flows from callee perspective
                this.reportPossibleFlow(description, functionTaint);

                this.logger.info("func enter: " + this.taintTree.get(0))
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

                this.logger.info("func exit: " + this.taintTree.get(0))
            }
        );
    functionExit = this.functionExitOp.wrapper;

    public functionReturnOp: Operation<[string, StaticDescription], void> =
        this.adviceWrap(
            ([name, description]) => {
                // Save taint for return value in this.returnValue, which is read in functionInvokeEnd above.
                this.returnValue =
                    this.sanitize(
                        this.taintTree.get(this.ROOTID)[this.taintTree.get(this.ROOTID).length - 1],
                        description);

                // we shouldn't pop this manually. a discardValue
                // instruction should be generated by NodeProf right after
                // the return callback.

                this.logger.info("func return: " + this.taintTree.get(0));
            });
    public functionReturn = this.functionReturnOp.wrapper;

    public literalOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                // Compute the taint for this literal
                let taintValue: V = this.sanitize(this.produceMark(description), description);

                this.push([taintValue, description]);

                this.logger.info("literal: " + this.taintTree.get(0))
            });

    public literal = this.literalOp.wrapper;

    public pushOp: Operation<[V, StaticDescription], void> =
        this.adviceWrap(
            ([v, description]) => {
                this.resetState();
                this.logger.info("push", v);
                this.taintTree.get(this.ROOTID).push(v);
            }
        );

    public push = this.pushOp.wrapper;

    public popOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
                this.logger.info("pop");
                this.taintTree.get(this.ROOTID).pop();
            }
        );

    public pop = this.popOp.wrapper;

    public readVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                this.resetState();

                // Alexi: For some reason, it can happen that we read uninitialized taint, even in seeminly simple programs.
                //        Not yet sure if this is indicative of a larger problem, as if taint is
                //        undefined, then it wasn't specified and thus is likely to be false.
                //
                //        The fact that we can read things before taint is initialized, though, suggests
                //        that there is some funky stuff going on. 
                if (this.varTaintMap.get(s) === undefined) {
                    this.varTaintMap.set(s, this.getUntaintedValue());
                }

                let advice = this.reactionAdvice.pop();
                if (advice != null) {
                    advice(s);
                } else {
                    // Compute the taint value for this variable
                    const taintValue: V = this.sanitize(this.join(this.produceMark(description),
                        this.varTaintMap.get(s)), description);

                    // Push taint value to stack
                    this.taintTree.get(this.ROOTID).push(taintValue);
                    this.logger.info("read", s, taintValue);
                }

                this.logger.info("readVar: " + s + " " + this.taintTree.get(0))
            });

    public readVar = this.readVarOp.wrapper;

    public writeVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                this.resetState();

                const taintValue: V = this.sanitize(this.join(this.produceMark(description),
                    this.taintTree.get(this.ROOTID)[
                    this.taintTree.get(this.ROOTID).length - 1]), description);

                // Do not pop off the stack for a write
                this.logger.info("write", s, taintValue);
                this.varTaintMap.set(s, taintValue);
                this.reportPossibleFlow(description, taintValue);
                
                this.logger.info("write", s, taintValue);
                this.varTaintMap.set(s, taintValue);
                this.reportPossibleFlow(description, taintValue);

                this.logger.info("write var: " + s + " " + this.taintTree.get(0) )
            }
        );

    public writeVar = this.writeVarOp.wrapper;

    public readPropertyOp: Operation<[DynamicDescription, Accessor, boolean, boolean, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, isMethod, isComputed, description]) => {
                this.resetState();
                const isSource = this.isSource(description);
                const objectTaintMap = this.getShadowObject(o);
                let taintForComputedProperty : V = this.getUntaintedValue();

                // if we're not going to perform a method call using this
                // property, we want to throw away the value of the object
                // itself, which is currently sitting at the top of the stack.
                // if this is a method call, we want to keep the base
                // object's value on the stack, as we will use it later in
                // functionInvokeStart.
                
                // When reading a property of an object, the value of the
                // object is discarded and replaced with the projection.
                // Discard the object's value on the taint stack.
                // if (!isMethod) { ... }

                // If the property is computed (e.g., o[0] or o["a"], as opposed to o.a) ...
                if (isComputed) {
                    // ... pop its taint off the stack, to uncover the object's taint.
                    taintForComputedProperty = this.taintTree.get(this.ROOTID).pop();
                }
                // Pop taint for the object.
                this.lastObjectAccessed = this.taintTree.get(this.ROOTID).pop();

                // If objectTaintMap contains a defined taint mark
                // for this property, this will be its value. Otherwise, it will
                // be untainted.
                // 
                // Note: if the object is tainted, taint all accesses.
                const propertyTaint = this.join(objectTaintMap[s], this.lastObjectAccessed);

                // Then join this with its initial marking
                let r = this.join(this.produceMark(description),
                    propertyTaint);

                this.logger.info("readprop", o, s, r);
                this.taintTree.get(this.ROOTID).push(r);
            }
        );
    public readProperty = this.readPropertyOp.wrapper;

    public writePropertyOp: Operation<[DynamicDescription, Accessor, StaticDescription], void> =
        this.adviceWrap(
            ([o, s, description]) => {
                this.resetState();

                const storedTaint = this.taintTree.get(this.ROOTID).pop();
                let objectTaintMap = this.getShadowObject(o);
                objectTaintMap[s] = this.join(this.produceMark(description), storedTaint);

                this.reportPossibleFlow(description, objectTaintMap[s]);

                this.logger.info("writeprop", o, s, objectTaintMap[s]);
            }
        );

    public writeProperty = this.writePropertyOp.wrapper;

    public unaryOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();

                // no-op. Unary operations on values do not change their taint status.
                this.logger.info("unary: " + this.taintTree.get(0))
            }
        );

    public unary = this.unaryOp.wrapper;

    public binaryOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            (description) => {
                this.resetState();
                // Combine the taint markings of the two operands
                this.taintTree.get(this.ROOTID).push(this.join(
                    this.taintTree.get(this.ROOTID).pop(),
                    this.taintTree.get(this.ROOTID).pop()));
                this.logger.info("binary: " + this.taintTree.get(0))
            }
        );

    public binary = this.binaryOp.wrapper;

    public initVarAdvice: {(name : any, description: StaticDescription): void}[] = [];
    public initVarOp: Operation<[VariableDescription, StaticDescription], void> =
        this.adviceWrap(
            ([s, description]) => {
                // Deal with advice, if there is any.
                let advice = this.initVarAdvice.pop();
                if (advice != undefined) {
                    advice(s, description);
                    return;
                }

                let v = this.sanitize(this.join(this.taintTree.get(this.ROOTID)[
                this.taintTree.get(this.ROOTID).length - 1], this.produceMark(description)), description);

                if (this.argsLeftToProcess > 0) {
                    this.taintTree.get(this.ROOTID).pop();
                    this.argsLeftToProcess--;
                }

                this.logger.info("init var", s, v);

                // actually set the taint value of the variable
                this.varTaintMap.set(s, v);
            }
        );

    public initVar = this.initVarOp.wrapper;

    public builtinOp: Operation<[DynamicDescription, DynamicDescription, number, any, boolean, StaticDescription], void> =
        this.adviceWrap(
            ([name, receiver, actualArgs, extraRecords, isMethod, description]) => {
                this.resetState();
                this.logger.info("builtin", name, actualArgs);

                // Before we touch ANYTHING, sanitize the given arguments if necessary
                if (this.shouldSanitize(description)) {
                    let taintStack = this.taintTree.get(0);
                    let top = taintStack.length - 1;

                    for (let i = 0; i < actualArgs; i++) {
                        taintStack[top - i] = this.getUntaintedValue();
                    }
                }

                // if this is a method, push the value of the base object (that we saved earlier)
                if (isMethod) {
                    this.push([this.lastObjectAccessed, description]);
                }

                let saved = useNativeImplementationPre(this, name, receiver, actualArgs, extraRecords, isMethod, description);

                this.nativeModelSavedValues.push(saved);

                this.logger.info("builtin enter: " + this.taintTree.get(0))
            }
        );

    public builtin = this.builtinOp.wrapper;

    public builtinExitOp: Operation<[DynamicDescription, DynamicDescription, StaticDescription], void> =
        this.adviceWrap(
            ([name, returnValueName, description]) => {
                this.resetState();
                this.logger.info("builtinExit", name);

                // retrieve saved information from implementationPre
                let saved = this.nativeModelSavedValues.pop();

                useNativeImplementationPost(this, name, returnValueName, saved, description);

                this.logger.info("builtin exit: " + this.taintTree.get(0))
            }
        );

    public builtinExit = this.builtinExitOp.wrapper;

    public conditionalOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();
                const abstractValue = this.taintTree.get(this.ROOTID)[
                this.taintTree.get(this.ROOTID).length - 1];

                this.logger.info("conditional", abstractValue);

                this.pc = abstractValue;
            }
        );

    public conditional = this.conditionalOp.wrapper;

    public conditionalEndOp: Operation<[StaticDescription], void> =
        this.adviceWrap(
            ([description]) => {
                this.resetState();

                this.logger.info("conditional end: " + this.taintTree.get(0))
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
                   let argsValues = this.functionArgsTree.get(this.ROOTID)[this.functionArgsTree.get(this.ROOTID).length - 1]

                   // take the values of the arguments and SET that as the
                   // shadow object for the "arguments" variable.

                   // "as unknown as ShadowObject<V>" is just a typescript hack.
                   // the `argsValues` object will be an array of abstract
                   // values of type V, and this will technically fit the shape
                   // of ShadowObject<V>. but typescript will not believe it.
                   this.objects.set(argumentsObject, argsValues as unknown as ShadowObject<V>);
               }

                this.logger.info("initializeArgObject: " + this.taintTree.get(0))
            }
        );
    public initializeArgumentsObject = this.initializeArgumentsObjectOp.wrapper;

    public endExecution() {
        // do nothing.
    }

    public asyncFunctionEnterOp: Operation<[StaticDescription], void> =
        this.adviceWrap(([description]) => {
            this.logger.info("asyncEnter: " + this.taintTree.get(0))
        });
    public asyncFunctionEnter = this.asyncFunctionEnterOp.wrapper;

    // this.state.asyncFunctionExit([iid, this.getAsyncPromiseId(result), result, exceptionVal, {type: "asyncFunctionExit", location: parseIID(iid)}])
    public asyncFunctionExitOp: Operation<[number, DynamicDescription, any, ExceptionVal, StaticDescription], void> =
        this.adviceWrap(([iid, promiseId, result, exceptionVal, description]) => {
            let v = this.returnValue;
            this.asyncPromiseMap.set(promiseId, {resolve: v , reject: exceptionVal.exception})

            this.logger.info("asyncExit: " + this.taintTree.get(0))
        });
    public asyncFunctionExit = this.asyncFunctionExitOp.wrapper;

    public awaitPreOp: Operation<[number, DynamicDescription, any, StaticDescription], void> =
        this.adviceWrap(([id, promiseId, promiseOrValAwaited, description]) => {
            if (!this.hasPromise(promiseId)) {
                let v = this.taintTree.get(this.ROOTID)[this.taintTree.get(this.ROOTID).length - 1];
                this.logger.info("AwaitPre Taint: " , v);
                this.asyncPromiseMap.set(promiseId, {resolve: v , reject: v})
            }
            this.setMachineState(this.ROOTID, id);
        });
    public awaitPre = this.awaitPreOp.wrapper;

    public awaitPostOp: Operation<[number, DynamicDescription, any, any, StaticDescription], void> =
        this.adviceWrap(([id, promiseId, shadowIDs, valResolvedOrRejected, description]) => {
            this.setMachineState(id, this.ROOTID);
            let resolveField = Object.keys(this.getPromise(promiseId))[0]
            this.taintTree.get(this.ROOTID).push(this.getPromise(promiseId)[resolveField]);

            this.logger.info("awaitPost: " + this.taintTree.get(0))
            this.logger.info("awaitPost: " + JSON.stringify(shadowIDs));
        });
    public awaitPost = this.awaitPostOp.wrapper;

    public promiseReactionOp: Operation<[number, any, DynamicDescription, StaticDescription], void> =
        this.adviceWrap(([id, promiseValue, promiseId, description]) => {
            let promiseTaint: V = this.getPromise(promiseId).resolve;

            this.varTaintMap.set(promiseValue, promiseTaint);

            this.logger.info("PromiseReaction: " + promiseId + " " + promiseValue + " taint: " + this.varTaintMap.get(promiseValue));
            this.logger.info("PromiseReaction: " + this.taintTree.get(0))

        });
    public promiseReaction = this.promiseReactionOp.wrapper;

    public promiseResolveOp: Operation<[number, any, DynamicDescription, StaticDescription], void> =
        this.adviceWrap(([id, promiseValue, promiseId, description]) => {
            this.promiseMap.set(promiseId, {resolve: this.varTaintMap.get(promiseValue),
                reject: this.getUntaintedValue()});

            this.logger.info("PromiseResolve: " + promiseId + " " + promiseValue + " taint: " + this.varTaintMap.get(promiseValue));
            this.logger.info("PromiseResolve: " + this.taintTree.get(0) + " from Map: " +  JSON.stringify(this.getPromise(promiseId)))
        });
    public promiseResolve = this.promiseResolveOp.wrapper;

    public promiseRejectOp: Operation<[number, any, DynamicDescription, StaticDescription], void> =
        this.adviceWrap(([id, promiseValue, promiseId, description]) => {
            this.promiseMap.set(promiseId, {resolve: this.getUntaintedValue(),
                reject: this.varTaintMap.get(promiseValue)});

            this.logger.info("PromiseReject: " + promiseId + " " + promiseValue + " taint: " + this.varTaintMap.get(promiseValue));
            this.logger.info("PromiseReject: " + this.taintTree.get(0) + " from Map: " +  JSON.stringify(this.getPromise(promiseId)))
        });
    public promiseReject = this.promiseRejectOp.wrapper;

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
        // ensure the shadow object is initialized
        this.initializeShadowObject(obj);
        return this.objects.get(obj);
    }

    private resetState() {
        // this.state = States.None;
        // this.stateCounter = 0;
    }

    /**
     * This function will get the taint config options for the given description.
     * E.g., if the config option says "recursive", apply taint to all fields.
     */
    protected getConfigForSource(description: StaticDescription) : StaticDescription {
        return this.spec.sources.find((source) => descriptionMatchesTaintSpec(source, description));
    }

    /**
     * This function will get the taint config options for the given description.
     * E.g., if the config option says "recursive", apply taint to all fields.
     */
    protected getConfigForSink(description: StaticDescription) : StaticDescription {
        return this.spec.sinks.find((sink) => descriptionMatchesTaintSpec(sink, description));
    }

    protected getSink(description: StaticDescription): StaticDescription {
        return this.spec.sinks.find((sink) => descriptionMatchesTaintSpec(sink, description));
    }

    protected isSource(description: StaticDescription): boolean {
        return this.spec.sources.some((source) => descriptionMatchesTaintSpec(source, description));
    }

    protected isSink(description: StaticDescription): boolean {
        return this.spec.sinks.some((sink) => descriptionMatchesTaintSpec(sink, description));
    }

    /**
     * Should we sanitize values for this operation?
     * @param description the location this operation is happening in
     * @private
     */
    private shouldSanitize(description: StaticDescription): boolean {
        return this.spec.sanitizers.some((sanitizer) => descriptionMatchesTaintSpec(sanitizer, description));
    }

    /**
     * Sanitize the given value, only if specified in the spec file.
     * @param v the value
     * @param description the description where this operation occurred
     * @private
     */
    private sanitize(v: V, description: StaticDescription): V {
        if (this.shouldSanitize(description)) {
            return this.getUntaintedValue();
        } else {
            return v;
        }
    }

    public getPromise(promiseId : any) {
        if (promiseDebug) {
            this.logger.info('promiseId:', promiseId);
        }
        if (promiseDebugMap) {
            this.logger.info("Async Promise Map:");
            this.logger.info(this.asyncPromiseMap);
            this.logger.info("Promise Map:");
            this.logger.info(this.promiseMap);
        }
        if (this.promiseMap.has(promiseId)) {
            return this.promiseMap.get(promiseId);
        } else if (this.asyncPromiseMap.has(promiseId)) {
            return this.asyncPromiseMap.get(promiseId);
        } else {
            // Error state.
            this.logger.error("[Error] Promise", promiseId, "doesn't exist.");
            this.logger.error("Async Promise Map:");
            this.logger.error(this.asyncPromiseMap);
            this.logger.error("Promise Map:");
            this.logger.error(this.promiseMap);
            return undefined;
        }
    }

    public hasPromise(promiseId : any) {
        return this.promiseMap.has(promiseId) || this.asyncPromiseMap.has(promiseId);
    }
}

