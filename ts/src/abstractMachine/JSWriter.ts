// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {Instruction, AbstractMachine, StaticDescription} from "../types";
import MyLogger from "../analysis/mylogger";

// An implementation of an abstract machine that produces JavaScript code.
// The JavaScript code produced will not actually execute the instructions,
// but will reproduce the original callbacks to a machine that *will*, such
// as the JS implementation of this machine: "src/abstractMachine/JSMachine.ts".
//
// This implementation provides an easy way to *delay* the execution of
// instructions, for the purposes of examining the generated callbacks and
// later execution.
//
// The generated JS code will export a function, `drive`, that, given an
// abstract machine, will drive it with the original callbacks.
//
// The type parameter, T, should be serializable to JSON.
export default class JSWriter implements AbstractMachine {

    // JS code that should appear before and after the callbacks, respectively.
    private preamble: string =  "exports.drive = (m) => {\n";
    private postamble: string = "};\n";

    // The logger connected to the intended output file.
    // @ts-ignore
    private logger : MyLogger = new MyLogger(J$.initParams.outputFile);

    // TODO: Replace with shadow id
    private objCnt: number = 0;
    private objIdMap: Map<{}, string> = new Map();

    constructor() {
        this.logger.log(this.preamble);
    }

    public literal([description]: [StaticDescription]) {
        this.writeInstruction({ command: "literal", args: [description] });
    }

    public pop([description]: [StaticDescription]) {
        this.writeInstruction({ command: "pop", args: [description] });
    }

    public readVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "readVar", args: [s, description] });
    }

    public writeVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "writeVar", args: [s, description] });
    }

    public readProperty([o, s, description]: [{}, Accessor, StaticDescription]) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "readProperty",
            args: [this.objIdMap.get(o), s, description] });
    }

    public writeProperty([o, s, description]: [{}, Accessor, StaticDescription]) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "writeProperty",
            args: [this.objIdMap.get(o), s, description] });
    }

    public binary([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "binary", args: [description]});
    }

    public unary([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "unary", args: [description]});
    }

    public initVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "initVar", args: [s, description]});
    }

    public functionEnter([name, actualArgs, description]: [string, number, StaticDescription]) {
        this.writeInstruction({
            command: "functionEnter",
            args: [name, actualArgs, description]
        });
    }

    public functionExit ([name, actualArgs, description]: [string, number, StaticDescription]) {
        this.writeInstruction({
            command: "functionExit",
            args: [name, actualArgs, description]
        });
    }

    public functionInvokeEnd([name, description]:
                                 [string, StaticDescription]) {
        this.writeInstruction({
            command: "functionInvokeEnd",
            args: [name, description]
        });
    }

    public functionInvokeStart([name, expectedArgs, actualArgs, description]:
                                   [string, number, number, StaticDescription]) {
        this.writeInstruction({
            command: "functionInvokeStart",
            args: [name, expectedArgs, actualArgs, description]
        });
    }

    public functionReturn([name, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "functionReturn", args: [name, description]});
    }

    public builtin([name, actualArgs, description]: [string, number, StaticDescription]) {
        this.writeInstruction({ command: "builtin",
            args: [name, actualArgs, description]});
    }

    public builtinExit([name, description]: [string, StaticDescription]): void {
        this.writeInstruction({ command: "builtinExit",
            args: [name, description]})
    }


    public conditional([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "conditional",
            args: [description]});
    }

    public conditionalEnd([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "conditionalEnd",
            args: [description]});
    };

    public endExecution([]) {
        this.writeInstruction({ command: "endExecution", args: [] });
        this.logger.log(this.postamble);
    }

    // Prepares an argument to a callback to appear in JS code.
    private prepareArg(arg: any): string {
        // Wrap strings in quotes, properly escape strings, etc.
        return JSON.stringify(arg);
    }

    // Actually write the instruction to the output file.
    private writeInstruction(instr: Instruction) {
        const delim = ", ";
        this.logger.log(`    m.${instr.command}([${instr.args.map(this.prepareArg).join(delim)}]);\n`);
    }

}
