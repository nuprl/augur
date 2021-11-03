// For dealing nicely with environment variables.
require('dotenv').config()

const path = require('path');
const chalk = require('chalk');

console.log('process.env', process.env);

const {run} = require('./run');

const yargs = require('yargs');

let consoleFlag = "";
let live = false;

const argv = yargs(process.argv.slice(2)).argv;

if (argv.printStack)
    consoleFlag = true;

if (argv.live) 
    live = true;

if (!argv.projectDir || !argv.projectName || !argv.outputDir) {
    console.error('Usage: node /path/to/runner/cli.js [--printStack, --live] --projectDir <> --projectName <> --outputDir <>');
    process.exit(1);
}

let projectDir = argv.projectDir;
let projectName = argv.projectName;
let outputDir = argv.outputDir;

// fully resolve dirs before proceeding
let cwd = process.cwd();
// resolve against the current working directory
projectDir = path.resolve(cwd, projectDir);
outputDir = path.resolve(cwd, outputDir);

run(projectDir, projectName, outputDir, consoleFlag, live).then(([spec, result]) => {
    if (live) {
        console.log('\n---\n');
        console.log('Taint flows will be found in the output file.\n');
        return;
    }

    console.log();
    console.log("---");
    console.log();

    if (result.length === 0) {
        console.log(chalk.green("No flows found."));
    } else {
        console.log(chalk.red("Flows found into the following sinks:"),
            JSON.stringify(result, undefined, 4));
    }
}).catch(err => {
    console.error('Error!');
    console.error(err);
});
