import {Accessor, ExceptionVal, Invoked, Receiver} from "./nodeprof";

// Various types used throughout the analysis.

/**
 * An abstract machine to interpret JavaScript code.
 *
 * Implementations of this abstract machine should maintain a stack of abstract
 * values.
 *
 * All `description` arguments to these functions describe *why* and *where* in
 * the code the action occurred.
 */
export interface AbstractMachine {
    /**
     * Pop an abstract value from the stack.
     * @param description why and where the action occurred
     */
    pop: (input: [StaticDescription]) => void;

    /**
     * Push a variable's abstract value onto the stack.
     * @param s the name of the variable
     * @param description why and where the action occurred
     */
    readVar: (input: [VariableDescription, StaticDescription]) => void;

    /**
     * Write the abstract value at the top of the stack to the given variable
     * name.
     * @param s the name of the variable
     * @param description why and where the action occurred
     */
    writeVar: (input: [VariableDescription, StaticDescription]) => void;

    /**
     * Pop two values off the stack, perform a binary operation on them, and
     * push the result.
     * @param description why and where the action occurred
     */
    binary: (input: [StaticDescription]) => void;

    /**
     * Pop one value off the stack, perform a unary operation on it, and
     * push the result.
     * @param description why and where the action occurred
     */
    unary: (input: [StaticDescription]) => void;

    /**
     * Push an object property's abstract value onto the stack.
     * @param o the object
     * @param s the property name
     * @param isMethod is this readProperty being used for a method call?
     * @param isComputed is the property name computed?
     * @param description why and where the action occurred
     */
    readProperty: (input: [DynamicDescription, PropertyDescription, boolean, boolean, StaticDescription]) => void;

    /**
     * Write an abstract value to an object property from the top of the stack.
     * Pops the value after it is written.
     * @param o the object
     * @param s the property name
     * @param description why and where the action occurred
     */
    writeProperty: (input: [DynamicDescription, PropertyDescription, StaticDescription]) => void;

    /**
     * Initialize a new variable with the abstract value at the top of the
     * stack. It will be initialized in the current scope.
     * @param s the name of the new variable
     * @param description why and where the action occurred
     */
    initVar: (input: [VariableDescription, StaticDescription]) => void;

    /**
     * This operation represents the execution of a *function invocation
     * site*. This is the place in the programmer's source code (not a
     * native function) where they *call* the function.
     *
     * This operation represents function invocation from the
     * caller-perspective. `functionInvokeStart` represents function
     * invocation from the callee-perspective.
     *
     * Ensure the stack is properly aligned for `expectedNumArgs`. If too
     * many arguments were supplied, pop them of the stack. If too few
     * arguments were supplied, push abstract values for them.
     *
     * @param name the name of the function according to the caller
     * @param expectedNumArgs the number of arguments this function is
     *                         expecting
     * @param actualNumArgs the number of arguments actually given
     * @param argShadowIDs the shadowIDs of the arguments themselves
     * @param description why and where the action occurred
     */
    functionInvokeStart: (input: [DynamicDescription, number, number, DynamicDescription[], StaticDescription]) => void;

    /**
     * This operation represents the return of a *function invocation
     * site*. This is the place in the programmer's source code where they
     * *call* the function.
     *
     * When a function uses the `return` keyword, you will see a
     * functionReturn operation. If the function was called by the programmer's
     * source code (and not a native function), you will see this
     * functionInvokeEnd operation.
     *
     * This operation represents a function return from the
     * caller-perspective. `functionReturn`/`functionExit` represent function
     * return from the callee-perspective.
     *
     * Since we are returning into the programmer's source code, this
     * operation should push the returned value onto the stack.
     *
     * @param name the name of the function according to the caller
     * @param returnedIDs the shadowIDs of the return value (for use in models)
     * @param description why and where the action occurred
     */
    functionInvokeEnd: (input: [DynamicDescription, DynamicDescription[], StaticDescription]) => void;

    /**
     * This operation represents the execution of a *function*. This
     * operation will occur for both user-defined and native functions.
     *
     * This operation can assume `actualNumArgs` values will be on the
     * stack. This operation should track the flow of these arguments into
     * this function.
     *
     * This operation represents function invocation from the
     * callee-perspective. `functionInvokeStart` represents function
     * invocation from the caller-perspective.
     *
     * @param name the name of the function according to the caller
     * @param actualNumArgs the number of arguments actually given
     * @param description why and where the action occurred
     */
    functionEnter: (input: [DynamicDescription, number, StaticDescription]) => void;

    /**
     * This operation represents the execution of a *function*. This
     * operation will occur for both user-defined and native functions.
     *
     * This operation can assume `actualNumArgs` values will be on the
     * stack. This operation should track the flow of these arguments into
     * this function.
     *
     * This operation represents function invocation from the
     * callee-perspective. `functionInvokeStart` represents function
     * invocation from the caller-perspective.
     *
     * @param name the name of the function according to the caller
     * @param actualNumArgs the number of arguments actually given
     * @param description why and where the action occurred
     */
    functionExit: (input: [DynamicDescription, number, StaticDescription]) => void;

    /**
     * This operation represents the marking of the top-most value on the
     * stack as the return value of this function. It should be saved and
     * popped from the stack.
     *
     * If returning into user-defined code, its value will be pushed back
     * onto the stack in `invokeFunEnd`.
     *
     * @param name the name of the function returning from
     * @param shadowID of the return
     * @param description why and where the action occurred
     */
    functionReturn: (input: [DynamicDescription, StaticDescription]) => void;

    /**
     * Perform the specified builtin on the arguments from the top of the
     * stack.
     * @param name the name of the builtin
     * @param receiver the dynamic description of the receiver object
     * @param actualArgs the number of arguments supplied to the builtin
     * @param extraRecords the extra information needed to implement this
     *                     builtin model
     * @param isMethod is this builtin being called as a method?
     * @param description why and where the action occurred
     */
    builtin: (input: [DynamicDescription, DynamicDescription, number, any, boolean, StaticDescription]) => void;

    /**
     * Used to signal a builtin has exited. The result is on the top of the
     * stack. No stack action is required.
     * @param name the name of the builtin
     * @param returnValueName the object identifier of the return value, if
     *                        it returned an object
     * @param description why and where the action occurred
     */
    builtinExit: (input: [DynamicDescription, DynamicDescription, StaticDescription]) => void;

    /**
     * Used to signal the end of execution.
     */
    endExecution: ([]) => void;

    /**
     * Used to signal a conditional is branching on the abstract value at
     * the top of the stack.
     * @param description why and where the action occurred
     */
    conditional: (input: [StaticDescription]) => void;

    /**
     * Used to signal the end of a conditional block.
     * @param description why and where the action occurred
     */
    conditionalEnd: (input: [StaticDescription]) => void;

    /**
     * Produce an abstract value for the given code location, and push it to
     * the stack.
     *
     * This is the only place where abstract values are introduced into the
     * stack machine. All other instructions re-use existing abstract values.
     * @param description why and where the action occurred
     */
    literal: (input: [StaticDescription]) => void;

    /**
     * Initialize the "arguments" object inside a function. The taint
     * values of the arguments to the current function should be placed
     * inside the shadow object, `argumentsObject`.
     *
     * This taint analysis currently only supports strict mode behavior of
     * the "arguments" object.
     *
     * Documentation about the "arguments exotic object" in JavaScript:
     * https://tc39.es/ecma262/#arguments-exotic-object
     *
     * @param argumentsObject the dynamic description of the arguments
     *                        object we have to initialize
     * @param description why and where the action occurred
     */
    initializeArgumentsObject: (input: [DynamicDescription, StaticDescription]) => void;

    /**
     *
     * @param input
     */
    asyncFunctionEnter: (input: [StaticDescription]) => void;

    /**
     *
     * @param input
     */
    asyncFunctionExit: (input: [number, DynamicDescription, any, ExceptionVal, StaticDescription]) => void;

    /**
     *
     * @param input
     */
    awaitPre: (input: [number, DynamicDescription, any, StaticDescription]) => void;

    /**
     *
     * @param input
     */
    awaitPost: (input: [number, DynamicDescription, any, any, StaticDescription]) => void;

    /**
     *
     * @param input
     */
    promiseReaction: (input: [number, any, DynamicDescription, StaticDescription]) => void;

    /**
     *
     * @param input
     */
    promiseResolve: (input: [number, any, DynamicDescription, StaticDescription]) => void;

    /**
     * 
     * @param input
     */
    promiseReject: (input: [number, any, DynamicDescription, StaticDescription]) => void;

    /**
     * Get the taint flows this AbstractMachine has detected so far.
     *
     * Note: this method only works for *real* AbstractMachine's, meaning
     *       all AbstractMachine's except for JSWriter. Since JSWriter simply
     *       writes the instructions out to a file, it isn't able to compute
     *       taint flows itself.
     */
    getTaint(): any;
}

// an interface for associating shadow identifiers with arbitrary objects.
//
// shadow identifiers are just identifiers that are unique to each instance
// of an object.
export interface ShadowMemory {
    // initialize a shadow id for an object
    initialize(o: object): void;

    // retrieve a shadow id for an object. if there is no valid shadow id
    // for this object, this will return `undefined`.
    getShadowID(o: object): DynamicDescription;

    // used to keep track of what function we are currently in.
    functionEnter(f: Function): void;

    functionExit(): void;

    awaitPre(id: number): void;

    awaitPost(id: number): void;

    declare(name: RawVariableDescription): void;

    getFullVariableName(name: string): VariableDescription;
}

/**
 * "Shadow objects" are how the taint analysis keeps track of which
 * properties inside objects are tainted. For each object in the program
 * we're analyzing, a corresponding ShadowObject will be made. This
 * ShadowObject will have the same property names as the actual object, but
 * the values of these properties will only be taint values.
 */
export type ShadowObject<V> = {[name: string]: V};

export type Command = keyof AbstractMachine;

export interface Instruction {
    command: Command;
    args: any[];
}

// Possible types of taint sources/sinks. JS expressions should only be
// recorded as "expr" if they appear within a statement block.
export type TaintType = "function"
    | "variable"
    | "builtin"
    | "expr"
    | "functionInvocation"
    | "functionEnter"
    | "functionReturn"
    | "literal"
    | "declaration"
    | "asyncFunctionEnter"
    | "asyncFunctionExit"
    | "awaitPre"
    | "awaitPost";

// A unique identifier for a particular DYNAMIC OBJECT. This is *NOT* the
// variable name. It is auto-generated, and has nothing to do with the
// object itself. Each object in the instrumented program has its own,
// unique, DynamicDescription.
//
// (The `brand` property should not be instantiated. It is a
//  hack to implement  "branded types". This type will be
//  distinct from all other  aliases of the `string` type that
//  include a brand.)
export type DynamicDescription = string & { readonly brand: unique symbol };

// An identifier that represents a variable's name. It contains JUST
// the variable's name, and no other information about its scope or
// execution environment.
export type RawVariableDescription = string & { readonly brand: unique symbol };

// An identifier for a VARIABLE NAME and its associated scope.
// If a function is called multiple times, the names of local
// variables in them should NOT conflict. In other words, the
// `VariableDescription` must include some information about the
// scope it was defined in.
//
// (The `brand` property should not be instantiated. It is a
//  hack to implement  "branded types". This type will be
//  distinct from all other  aliases of the `string` type that
//  include a brand.)
export type VariableDescription = string & { readonly brand: unique symbol };

// An identifier for a property of an object.
export type PropertyDescription = Accessor & { readonly brand: unique symbol };

// A set of STATIC objects that could be present at a particular source
// location. Flows are detected by checking if particular DYNAMIC objects
// fit into this set, based on where it is travelling through the source code.
//
// A description of a taint source/sink. All fields are optional.
export interface StaticDescription extends Object {
    type?: TaintType;
    name?: string;
    location?: Location;
    config?: TaintConfig;
}

export interface TaintConfig {
    recursive?: boolean;
}

export interface Location extends Object {
    fileName?: string;
    pos?: SourceSpan;
}

/**
 * One of:
 * - a line number
 * - a line and column number
 */
export type SourcePosition =
    number // line number
    | [number, number]; // line and col number

/**
 * One of:
 * - a single position in the source code
 * - a range of text in the source code
 */
export type SourceSpan =
    SourcePosition | // A single position in source
    {start: SourcePosition, end: SourcePosition}; // a range in source

/**
 * Different types of taint tracking Augur supports.
 * The name refers to what information is available when a flow occurs.
 *
 * Boolean: a flow occurred into sink X
 * SourcedBoolean: a flow occurred into sink X *from source Y*
 * Expression: a flow occurred into sink X *and touched these expressions*
 *
 * These different tracking types incur different runtime overheads:
 * 1. Boolean (fastest)
 * 2. SourcedBoolean
 * 3. Expression (slowest)
 *
 * They are implemented by using different `AbstractMachine`'s:
 * 1. Boolean: `BooleanMachine`
 * 2. SourcedBoolean: `SourcedBooleanMachine`
 * 3. Expression: `ExpressionMachine`
 *
 * The main reason for using one tracking method over another is
 * how much information you want about your flows. Sometimes, you might
 * only care about seeing if a flow happened or not (Boolean). If you
 * care about seeing which source the flow came from, use SourcedBoolean.
 * If you need detailed information about every line of code a value passed
 * through on its way to a sink, use Expression.
 */
export type TrackingType = "Boolean" | "SourcedBoolean" | "Expression";

/**
 * The specification of a test to run. All fields are optional besides "main"
 */
export interface RunSpecification extends Object {
    // The program to instrument
    main: string;

    // The type of taint tracking to use for this analysis.
    tracking?: TrackingType;

    // The sources of taint
    sources?: Array<StaticDescription>;

    // The sinks for taint
    sinks?: Array<StaticDescription>;

    // The list of sinks that are expected to be flowed into
    expectedFlows?: Array<StaticDescription>;
}

/**
 * A list of valid fields for a spec file. This is used
 * to ensure that a loaded spec has the correct shape.
 */
export const VALID_SPEC_FIELDS = [
    "main",
    "tracking",
    "sources",
    "sinks",
    "expectedFlows"
]

export class SourcedBoolean {
    value: boolean;
    source: Set<StaticDescription>; // Int 0000000000000000001000010

    constructor(value: boolean, source: Set<StaticDescription>) {
        this.value = value;
        this.source = source;
    }
}
