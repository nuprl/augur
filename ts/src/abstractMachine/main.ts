import {executeInstructionsFromFile, parseSpec} from "../utils";

// This script is responsible for executing JS abstract machine instructions
// from the command line.
async function main() {
    const runSpecificationPath = process.argv[2];
    const instructionsPath = process.argv[3];

    process.stderr.write(
        JSON.stringify(
            executeInstructionsFromFile(instructionsPath,
                parseSpec(runSpecificationPath))));
}

main();
