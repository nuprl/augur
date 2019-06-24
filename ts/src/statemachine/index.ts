import * as readline from "readline";
import { Instruction, StateMachine } from "../types";
import logger from "./logger";
import InstructionRunner from "./statemachine";

function dispatchInstr(stateMachine: StateMachine, command: string, args: string[]) {
    switch (command as Instruction["command"]) {
        case "push":
            return stateMachine.push(args[0] === "true");
        case "readProperty":
            return stateMachine.readProperty(args[0], args[1]);
        case "readVar":
            return stateMachine.readVar(args[0]);
        case "writeProperty":
            return stateMachine.writeProperty(args[0], args[1]);
        case "writeVar":
            return stateMachine.writeVar(args[0]);
        case "functionCall":
            return stateMachine.functionCall(Number(args[0]), Number(args[1]));
        case "initVar":
            return stateMachine.initVar(args[0]);
        default:
            return process.stderr.write("Unrecognized command " + command);
    }
}

async function main() {
    const stateMachine = new InstructionRunner({
        sinks: (process.env.SINKS || "z").split(","),
        sources: (process.env.SOURCES || "a").split(","),
    });

    const rl = readline.createInterface({
        input: process.stdin,
    });

    rl.on("line", (line) => {
        const [command, ...args] = line.split(" ");
        dispatchInstr(stateMachine, command, args);
    });

    rl.on("close", () => {
        process.stderr.write(JSON.stringify(stateMachine.getTaint(), null, 2));
    });
}

main();
