import { Accessor } from "./nodeprof";

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
    pop: (input: [TaintDescription]) => void;

    /**
     * Push a variable's abstract value onto the stack.
     * @param s the name of the variable
     * @param description why and where the action occurred
     */
    readVar: (input: [string, TaintDescription]) => void;

    /**
     * Write the abstract value at the top of the stack to the given variable
     * name.
     * @param s the name of the variable
     * @param description why and where the action occurred
     */
    writeVar: (input: [string, TaintDescription]) => void;

    /**
     * Pop two values off the stack, perform a binary operation on them, and
     * push the result.
     * @param description why and where the action occurred
     */
    binary: (input: [TaintDescription]) => void;

    /**
     * Pop one value off the stack, perform a unary operation on it, and
     * push the result.
     * @param description why and where the action occurred
     */
    unary: (input: [TaintDescription]) => void;

    /**
     * Push an object property's abstract value onto the stack.
     * @param o the object
     * @param s the property name
     * @param description why and where the action occurred
     */
    readProperty: (input: [any, Accessor, TaintDescription]) => void;

    /**
     * Write an abstract value to an object property from the top of the stack.
     * @param o the object
     * @param s the property name
     * @param description why and where the action occurred
     */
    writeProperty: (input: [any, Accessor, TaintDescription]) => void;

    /**
     * Initialize a new variable with the abstract value at the top of the
     * stack.
     * @param s the name of the new variable
     * @param description why and where the action occurred
     */
    initVar: (input: [string, TaintDescription]) => void;

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
     * @param description why and where the action occurred
     */
    functionInvokeStart: (input: [string, number, number, TaintDescription]) => void;

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
     * @param expectedNumArgs the number of arguments this function is
     *                         expecting
     * @param actualNumArgs the number of arguments actually given
     * @param description why and where the action occurred
     */
    functionInvokeEnd: (input: [string, TaintDescription]) => void;

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
    functionEnter: (input: [string, number, TaintDescription]) => void;

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
    functionExit: (input: [string, number, TaintDescription]) => void;

    /**
     * This operation represents the marking of the top-most value on the
     * stack as the return value of this function. It should be saved and
     * popped from the stack.
     *
     * If returning into user-defined code, its value will be pushed back
     * onto the stack in `invokeFunEnd`.
     *
     * @param name the name of the function returning from
     * @param description why and where the action occurred
     */
    functionReturn: (input: [string, TaintDescription]) => void;

    /**
     * Perform the specified builtin on the arguments from the top of the
     * stack.
     * @param name the name of the builtin
     * @param actualArgs the number of arguments supplied to the builtin
     * @param description why and where the action occurred
     */
    builtin: (input: [string, number, TaintDescription]) => void;

    /**
     * Used to signal a builtin has exited. The result is on the top of the
     * stack. No stack action is required.
     * @param name the name of the builtin
     * @param actualArgs the number of arguments supplied to the builtin
     * @param description why and where the action occurred
     */
    builtinExit: (input: [string, TaintDescription]) => void;

    /**
     * Used to signal the end of execution.
     */
    endExecution: ([]) => void;

    /**
     * Used to signal a conditional is branching on the abstract value at
     * the top of the stack.
     * @param description why and where the action occurred
     */
    conditional: (input: [TaintDescription]) => void;

    /**
     * Used to signal the end of a conditional block.
     * @param description why and where the action occurred
     */
    conditionalEnd: (input: [TaintDescription]) => void;

    /**
     * Produce an abstract value for the given code location, and push it to
     * the stack.
     *
     * This is the only place where abstract values are introduced into the
     * stack machine. All other instructions re-use existing abstract values.
     * @param description why and where the action occurred
     */
    literal: (input: [TaintDescription]) => void;
}

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
    | "declaration";

// A description of a taint source/sink. All fields are optional.
export interface TaintDescription extends Object {
    type?: TaintType;
    name?: string;
    location?: Location;
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
 * The specification of a test to run. All fields are optional besides "main"
 */
export interface RunSpecification extends Object {
    // The program to instrument
    main: string;

    // The sources of taint
    sources?: Array<TaintDescription>;

    // The sinks for taint
    sinks?: Array<TaintDescription>;

    // The list of sinks that are expected to be flowed into
    expectedFlows?: Array<TaintDescription>;
}
