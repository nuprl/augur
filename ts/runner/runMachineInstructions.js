
const {executeInstructionsFromFile, parseSpec} = require('../dist/src/utils');

const yargs = require('yargs');

const argv = yargs(process.argv.slice(2)).argv;

if (!argv.specPath || !argv.instrPath) {
    console.error('Usage: node /path/to/runMachineInstructions.js --specPath /path/to/spec --instrPath /path/to/instructions');
    process.exit(1);
}

const specPath = argv.specPath;
const instrPath = argv.instrPath;

const parsedSpec = parseSpec(specPath);
const taints = executeInstructionsFromFile(instrPath, parsedSpec);

console.log('parsedSpec:', parsedSpec);
console.log('taints:', taints);