// do not remove the following comment
// JALANGI DO NOT INSTRUMENT
import { v4 as uuidv4 } from "uuid";
import { Accessor } from "../nodeprof";
interface SM {
    push: (v: boolean) => void;
    readVar: (s: string) => void;
    writeVar: (s: string) => void;
    readProperty: (o: any, s: Accessor) => void;
    writeProperty: (o: any, s: Accessor) => void;
}

type Command = keyof SM;

interface Instruction {
    command: Command;
    args: string[];
}

export default class StateMachine implements SM {
    private instructions: Instruction[] = [];
    private objIdMap: Map<{}, string> = new Map();

    public push(v: boolean) {
        this.instructions.push({ command: "push", args: [v + ""] });
    }

    public readVar(s: string) {
        this.instructions.push({ command: "readVar", args: [s] });
    }

    public writeVar(s: string) {
        this.instructions.push({ command: "writeVar", args: [s] });
    }

    public readProperty(o: {}, s: Accessor) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, uuidv4());
        }
        this.instructions.push({ command: "readProperty", args: [this.objIdMap.get(o), s + ""] });
    }

    public writeProperty(o: {}, s: Accessor) {
        if (!this.objIdMap.has(o)) {
            this.objIdMap.set(o, uuidv4());
        }
        this.instructions.push({ command: "writeProperty", args: [this.objIdMap.get(o), s + ""] });
    }

    public generate() {
        const stateMachine = "$StateMachine";
        const instrs = this.instructions
            .map(({ command, args }) => `${stateMachine}.${command}(${args.join(",")})`)
            .join("\n");
        return `(function run() {
${instrs}
})()`;
    }
}
