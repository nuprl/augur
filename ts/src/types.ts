import { Accessor } from "./nodeprof";

// Various types used throughout the analysis.

export interface AbstractMachine {
    push: (v: boolean) => void;
    pop: () => void;
    readVar: (s: string) => void;
    writeVar: (s: string) => void;
    binaryOp: () => void;
    unaryOp: () => void;
    readProperty: (o: any, s: Accessor) => void;
    writeProperty: (o: any, s: Accessor) => void;
    initVar: (s: string) => void;
    functionCall: (name: string, expectedNumArgs: number, actualNumArgs: number) => void;
    builtin: (name: string, actualArgs: number) => void;
    endExecution: () => void;
    conditional: (s: any) => void;
    conditionalEnd: () => void;
}

export type Command = keyof AbstractMachine;

export interface Instruction {
    command: Command;
    args: any[];
}

// Possible types of taint sources/sinks.
export type TaintType = "function" | "variable" | "builtin";

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

export class TestSpecification {
}
