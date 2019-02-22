import child_process = require("child_process");
import * as fs from "fs";
import uuid from "uuid";

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

async function mkdir(dir: string) {
    if (!fs.existsSync(dir)) {
        return fs.promises.mkdir(dir, { recursive: true });
    }
}

const LOG_CONTAINER = "test_results";
const DIR_PREFIX = new Date().toISOString().split(".")[0];
const LOG_DIR = `${LOG_CONTAINER}/${DIR_PREFIX}_${uuid().split("-")[0]}`;

async function main() {
    await mkdir(LOG_DIR);

    testSources.forEach((source) => {
        // mild hack due to project structure
        const realPath = `${process.env.NODE_PATH}/../${source}`;

        describe(source, async () => {
            for (const fileName of await fs.promises.readdir(realPath)) {
                const testDir = `${realPath}${fileName}`;
                const testResultDir = `${LOG_DIR}/${source}/${fileName}`;

                const stat = await fs.promises.lstat(testDir);

                if (stat.isDirectory()) {
                    const testRunCommand =
                        `./${process.env.NODE_PATH}/runTest.sh ${testDir} ${testDir}/test.js`;

                    // test(testPath, async () => {
                    //     await exec(testRunCommand);

                    // });

                }
            }
        });
    });

}
