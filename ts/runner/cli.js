const path = require('path');
const chalk = require('chalk');

const {run} = require('./run');

if (process.argv.length === 5) {
    let [projectDir, projectName, outputDir] = process.argv.slice(2);

    // fully resolve dirs before proceeding
    let cwd = process.cwd();
    // resolve against the current working directory
    projectDir = path.resolve(cwd, projectDir);
    outputDir = path.resolve(cwd, outputDir);

    run(projectDir, projectName, outputDir).then(([spec, result]) => {
        console.log();
        console.log("---");
        console.log();

        if (result.length === 0) {
            console.log(chalk.green("No flows found."));
        } else {
            console.log(chalk.red("Flows found into the following sinks:"),
                JSON.stringify(result, undefined, 4));
        }
    });
} else {
    console.err('Usage: node cli.js <project directory> <project name>' +
        ' <output directory>');
    exit(1);
}
