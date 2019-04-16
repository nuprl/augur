import { Accessor } from "./nodeprof";

export interface StateMachine {
    push: (v: boolean) => void;
    readVar: (s: string) => void;
    writeVar: (s: string) => void;
    readProperty: (o: any, s: Accessor) => void;
    writeProperty: (o: any, s: Accessor) => void;
}

export type Command = keyof StateMachine;

export interface Instruction {
    command: Command;
    args: string[];
}
