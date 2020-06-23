import {executeInstructionsFromFile} from "../utils";
import * as fs from "fs";

// This script is responsible for executing JS abstract machine instructions
// from the command line.
async function main() {
    const runSpecificationPath = process.argv[2];
    const instructionsPath = process.argv[3];

    process.stderr.write(
        JSON.stringify(
            executeInstructionsFromFile(instructionsPath,
                JSON.parse(fs.readFileSync(runSpecificationPath).toString()))));
}

main();
