import * as getStdin from "get-stdin";
import logger from "../logger";
import { Instruction } from "../types";
import InstructionRunner from "./statemachine";

async function main() {
    const stateMachine = new InstructionRunner({
        sinks: (process.env.SINKS || "z").split(","),
        sources: (process.env.SOURCES || "a").split(","),
    });

    const instrs: Instruction[] = JSON.parse(await getStdin());

    for (const { command, args } of instrs) {
        switch (command) {
            case "push":
                stateMachine.push(args[0] === "true");
                break;
            case "readProperty":
                stateMachine.readProperty(args[0], args[1]);
                break;
            case "readVar":
                stateMachine.readVar(args[0]);
                break;
            case "writeProperty":
                stateMachine.writeProperty(args[0], args[1]);
                break;
            case "writeVar":
                stateMachine.writeVar(args[0]);
                break;
        }
    }

    console.error(stateMachine.getTaint());
}

main();
