const path = require('path');
const chalk = require('chalk');

const {run} = require('./run');

const {performance} = require('perf_hooks');

let t0 = performance.now();
if (process.argv.length === 5 || process.argv.length === 6) {

    let consoleFlag = "";

    if (process.argv.length === 5) {
        [projectDir, projectName, outputDir] = process.argv.slice(2);
    } else {
        [consoleFlag, projectDir, projectName, outputDir] = process.argv.slice(2);
    }
    consoleFlag = consoleFlag === "-printStack";

    // fully resolve dirs before proceeding
    let cwd = process.cwd();
    // resolve against the current working directory
    projectDir = path.resolve(cwd, projectDir);
    outputDir = path.resolve(cwd, outputDir);

    run(projectDir, projectName, outputDir, consoleFlag).then(([spec, result]) => {
        console.log();
        console.log("---");
        console.log();

        if (result.length === 0) {
            console.log(chalk.green("No flows found."));
        } else {
            console.log(chalk.red("Flows found into the following sinks:"),
                JSON.stringify(result, undefined, 4));
        }
        console.log("==========Benchmarks========");
        let t1 = performance.now();
        let mem = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log("Time Start: " + t0/1000 + " seconds");
        console.log("Time End: " + t1/1000 + " seconds");
        console.log("Time Difference: " + (t1 - t0)/1000 + " seconds");
        console.log("Memory Used: ~" + Math.round(mem * 100) / 100 + "MB" );
        console.log((t1 - t0)/1000);
    });
} else {
    console.err('Usage: node cli.js [-printStack] <project directory> <project name>' +
        ' <output directory>');
    exit(1);
}