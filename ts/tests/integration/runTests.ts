import child_process = require("child_process");
import fs = require("fs");
// import * as uuid from "uuid";

const exec = (command: string) => new Promise((resolve, reject) => {
    child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve(stdout);
        }
    });
});

// function mkdirSync(dir: string) {
//     if (!fs.existsSync(dir)) {
//         return fs.mkdirSync(dir, { recursive: true });
//     }
// }

// const LOG_CONTAINER = "test_results";
// const DIR_PREFIX = new Date().toISOString().split(".")[0];
// const LOG_DIR = `${LOG_CONTAINER}/${DIR_PREFIX}_${uuid().split("-")[0]}`;

function runTests(source) {
    // mkdirSync(LOG_DIR);
        // mild hack due to project structure
    const realPath = `${process.env.PWD}/../${source}`;

    describe(source, () => {
        const files = fs.readdirSync(realPath);
        for (const fileName of files) {
            const testDir = `${realPath}/${fileName}`;
            // const testResultDir = `${LOG_DIR}/${source}/${fileName}`;

            const stat = fs.lstatSync(testDir);

            if (stat.isDirectory()) {
                const {
                    main,
                    sources,
                    sinks,
                    expectedTaints,
                } = JSON.parse(fs.readFileSync(`${testDir}/spec.json`).toString());
                const testRunCommand = `${process.env.PWD}/runTest.sh ${testDir}/${main}`;
                test(testDir, async () => {
                    const result = await exec(testRunCommand);
                    expect(result).toBe(
                        JSON.stringify(
                            expectedTaints.sort((a, b) => a.localeCompare(b)),
                            null,
                            2),
                    );
                });
            }
        }
    });

}

export default runTests;
