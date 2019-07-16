// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import { Accessor } from "../nodeprof";
import { Instruction, AbstractMachine } from "../types";
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

    public push(v: boolean) {
        this.writeInstruction({ command: "push", args: [v] });
    }

    public pop() {
        this.writeInstruction({ command: "pop", args: [] });
    }

    public readVar(s: string) {
        this.writeInstruction({ command: "readVar", args: [s] });
    }

    public writeVar(s: string) {
        this.writeInstruction({ command: "writeVar", args: [s] });
    }

    public readProperty(o: {}, s: Accessor) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "readProperty", args: [this.objIdMap.get(o), s] });
    }

    public writeProperty(o: {}, s: Accessor) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "writeProperty", args: [this.objIdMap.get(o), s] });
    }

    public binaryOp(): void {
        this.writeInstruction({ command: "binaryOp", args: []});
    }

    public unaryOp(): void {
        this.writeInstruction({ command: "unaryOp", args: []});
    }

    public initVar(s: string) {
        this.writeInstruction({ command: "initVar", args: [s]});
    }

    public functionCall(name: string, expectedNumArgs: number, actualNumArgs: number) {
        this.writeInstruction({ command: "functionCall", args: [name, expectedNumArgs, actualNumArgs]});
    }

    public builtin(name: string, actualArgs: number) {
        this.writeInstruction({ command: "builtin", args: [name, actualArgs]});
    }

    public endExecution() {
        this.writeInstruction({ command: "endExecution", args: [] });
        this.logger.log(this.postamble);
    }

    // Prepares an argument to a callback to appear in JS code. At the moment,
    // this only requires correctly quoting strings.
    private prepareArg(arg: any): string {
        // Wrap strings in quotes
        // TODO: this should also sanitize the argument
        if (typeof arg == "string") {
            return `"${arg}"`;
        } else {
            return arg.toString();
        }
    }

    // Actually write the instruction to the output file.
    private writeInstruction(instr: Instruction) {
        const delim = ", ";
        this.logger.log(`    m.${instr.command}(${instr.args.map(this.prepareArg).join(delim)});\n`);
    }

}
