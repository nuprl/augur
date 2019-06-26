import * as readline from "readline";
import { Instruction, StateMachine } from "../types";
import * as stateMachine from "./statemachine";

// This function is responsible for executing JS abstract machine instructions
// from the command line.
async function main() {
    const instructionsPath = process.argv[2];
    const options = {
        sinks: (process.env.SINKS || "z").split(","),
        sources: (process.env.SOURCES || "a").split(","),
    };

    process.stderr.write(
        JSON.stringify(
            stateMachine.executeInstructions(instructionsPath, options)));
}

main();
