import { Accessor } from "./nodeprof";

// Various types used throughout the analysis.

export interface AbstractMachine {
    pop: (description: TaintDescription) => void;
    readVar: (s: string, description: TaintDescription) => void;
    writeVar: (s: string, description: TaintDescription) => void;
    binaryOp: (description: TaintDescription) => void;
    unaryOp: (description: TaintDescription) => void;
    readProperty: (o: any, s: Accessor, description: TaintDescription) => void;
    writeProperty: (o: any, s: Accessor, description: TaintDescription) => void;
    initVar: (s: string, description: TaintDescription) => void;
    functionCall: (name: string, expectedNumArgs: number, actualNumArgs: number, description: TaintDescription) => void;
    builtin: (name: string, actualArgs: number, description: TaintDescription) => void;
    endExecution: () => void;
    conditional: (s: any, description: TaintDescription) => void;
    conditionalEnd: (description: TaintDescription) => void;
    literal: (description: TaintDescription) => void;
}

export type Command = keyof AbstractMachine;

export interface Instruction {
    command: Command;
    args: any[];
}

// Possible types of taint sources/sinks. JS expressions should only be
// recorded as "expr" if they appear within a statement block.
export type TaintType = "function" | "variable" | "builtin" | "expr";

// A description of a taint source/sink. All fields are optional.
export interface TaintDescription extends Object {
    type?: TaintType;
    name?: string;
    fileName?: string;
}

// The specification of a test to run. All fields are optional besides "main"
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
