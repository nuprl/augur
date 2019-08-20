// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import {Instruction, AbstractMachine, TaintDescription} from "../types";
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

    public literal(description: TaintDescription) {
        this.writeInstruction({ command: "literal", args: [description] });
    }

    public pop(description: TaintDescription) {
        this.writeInstruction({ command: "pop", args: [description] });
    }

    public readVar(s: string, description: TaintDescription) {
        this.writeInstruction({ command: "readVar", args: [s, description] });
    }

    public writeVar(s: string, description: TaintDescription) {
        this.writeInstruction({ command: "writeVar", args: [s, description] });
    }

    public readProperty(o: {}, s: Accessor, description: TaintDescription) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "readProperty",
            args: [this.objIdMap.get(o), s, description] });
    }

    public writeProperty(o: {}, s: Accessor, description: TaintDescription) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "writeProperty",
            args: [this.objIdMap.get(o), s, description] });
    }

    public binaryOp(description: TaintDescription): void {
        this.writeInstruction({ command: "binaryOp", args: [description]});
    }

    public unaryOp(description: TaintDescription): void {
        this.writeInstruction({ command: "unaryOp", args: [description]});
    }

    public initVar(s: string, description: TaintDescription) {
        this.writeInstruction({ command: "initVar", args: [s, description]});
    }

    public functionCall(name: string, expectedNumArgs: number, actualNumArgs: number, description: TaintDescription) {
        this.writeInstruction({ command: "functionCall",
            args: [name, expectedNumArgs, actualNumArgs, description]});
    }

    public functionReturn(name: string, description: TaintDescription) {
        this.writeInstruction({ command: "functionReturn", args: [name, description]});
    }

    public builtin(name: string, actualArgs: number, description: TaintDescription) {
        this.writeInstruction({ command: "builtin",
            args: [name, actualArgs, description]});
    }

    public conditional(s: any, description: TaintDescription): void {
        this.writeInstruction({ command: "conditional",
            args: [s, description]});
    }

    public conditionalEnd(description: TaintDescription): void {
        this.writeInstruction({ command: "conditionalEnd",
            args: [description]});
    };

    public endExecution() {
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
        this.logger.log(`    m.${instr.command}(${instr.args.map(this.prepareArg).join(delim)});\n`);
    }

}
