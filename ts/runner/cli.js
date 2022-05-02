// For dealing nicely with environment variables.
require('dotenv').config()

const path = require('path');
const chalk = import('chalk');

const {run} = require('./run');

const yargs = require('yargs');

let consoleFlag = "";
let live = false;
let main;

const argv = yargs(process.argv.slice(2)).argv;

if (argv.printStack)
    consoleFlag = true;

if (argv.live) 
    live = true;

if (argv.main)
    main = argv.main;

if (!argv.projectDir || !argv.projectName || !argv.outputDir) {
    console.error('Usage: node /path/to/runner/cli.js [--printStack, --live, --main <>] --projectDir <> --projectName <> --outputDir <>');
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

run(projectDir, projectName, outputDir, consoleFlag, live, main).then(([spec, result]) => {
    if (live) {
        console.log('\n---\n');
        console.log(colors.green(`Taint flows have been written to: `) + `${outputDir}/${projectName}.js\n`);
        console.log();
        return;
    }

}).catch(err => {
    console.error('Error!');
    console.error(err);
});
