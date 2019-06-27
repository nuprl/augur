import { Accessor } from "./nodeprof";

// Various types used throughout the analysis.

export interface AbstractMachine {
    push: (v: boolean) => void;
    pop: () => void;
    readVar: (s: string) => void;
    writeVar: (s: string) => void;
    readProperty: (o: any, s: Accessor) => void;
    writeProperty: (o: any, s: Accessor) => void;
    initVar: (s: string) => void;
    functionCall: (expectedNumArgs: number, actualNumArgs: number) => void;
    endExecution: () => void;
}

export type Command = keyof AbstractMachine;

export interface Instruction {
    command: Command;
    args: any[];
}
