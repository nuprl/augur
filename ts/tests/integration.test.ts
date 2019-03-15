import child_process = require("child_process");
import fs = require("fs");
import * as uuid from "uuid";

const exec = (command: string) => new Promise((resolve, reject) => {
    child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve();
        }
    });
});

const testSources = [
    "tests/sanity/clean",
    "tests/sanity/tainted",
];

function mkdirSync(dir: string) {
    if (!fs.existsSync(dir)) {
        return fs.mkdirSync(dir, { recursive: true });
    }
}

const LOG_CONTAINER = "test_results";
const DIR_PREFIX = new Date().toISOString().split(".")[0];
const LOG_DIR = `${LOG_CONTAINER}/${DIR_PREFIX}_${uuid().split("-")[0]}`;

function main() {
    mkdirSync(LOG_DIR);

    testSources.forEach((source) => {
        // mild hack due to project structure
        const realPath = `${process.env.PWD}/../${source}`;

        describe(source, () => {
            const files = fs.readdirSync(realPath);
            for (const fileName of files) {
                const testDir = `${realPath}/${fileName}`;
                const testResultDir = `${LOG_DIR}/${source}/${fileName}`;

                const stat = fs.lstatSync(testDir);

                if (stat.isDirectory()) {
                    const testRunCommand = `${process.env.PWD}/runTest.sh ${testDir}/test.js`;

                    test(testDir, async () => {
                        await exec(testRunCommand);
                    });

                }
            }
        });
    });

}

main();
