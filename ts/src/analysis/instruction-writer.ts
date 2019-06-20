// do not remove the following comment
// JALANGI DO NOT INSTRUMENT
import { v4 as uuidv4 } from "uuid";
import { Accessor } from "../nodeprof";
import { Instruction, StateMachine } from "../types";
import MyLogger from "./mylogger";

export default class InstructionWriter implements StateMachine {
    private instructions: Instruction[] = [];

    // @ts-ignore
    private logger : MyLogger = new MyLogger(J$.initParams.outputFile);

    // TODO: Replace with shadow id
    private objCnt: number = 0;
    private objIdMap: Map<{}, string> = new Map();

    public push(v: boolean) {
        this.writeInstruction({ command: "push", args: [v + ""] });
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
        this.writeInstruction({ command: "readProperty", args: [this.objIdMap.get(o), s + ""] });
    }

    public writeProperty(o: {}, s: Accessor) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, "obj" + this.objCnt++);
        }
        this.writeInstruction({ command: "writeProperty", args: [this.objIdMap.get(o), s + ""] });
    }

    public initVar(s: string) {
        this.writeInstruction({ command: "initVar", args: [s]});
    }

    public functionCall(expectedNumArgs: number, actualNumArgs: number) {
        this.writeInstruction({ command: "functionCall", args: [expectedNumArgs + "", actualNumArgs + ""]});
    }

    private writeInstruction(instr: Instruction) {
        const delim = " ";
        this.logger.log(`${instr.command}${delim}${instr.args.join(delim)}\n`);
    }
}
