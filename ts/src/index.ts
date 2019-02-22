import { ArgumentParser } from "argparse";

const parser = new ArgumentParser({
    addHelp: true,
    description: "JS Taint Analysis",
    version: "1.0.0",
});

parser.addArgument(
    [ "--file", "-f" ],
    {
        help: "Path to the file to test for taint",
        type: "string",
    },
);

async function main() {
    const args = parser.parseArgs();
}

main();
