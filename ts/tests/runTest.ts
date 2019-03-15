import child_process = require("child_process");
import fs = require("fs");

const exec = (command: string) => new Promise((resolve, reject) => {
    child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        } else {
            resolve(stderr);
        }
    });
});

function runTest(testDir) {
    const {
        main,
        sources,
        sinks,
        expectedTaints,
    } = JSON.parse(fs.readFileSync(`${testDir}/spec.json`).toString());

    // tslint:disable-next-line:max-line-length
    const testRunCommand = `${process.env.PWD}/runTest.sh ${testDir}/${main} ${sources.join(",")} ${sinks.join(",")}`;

    describe(testDir, () => {
        test("detect taint", async () => {
            const result = await exec(testRunCommand);
            expect(result).toBe(
                JSON.stringify(
                    expectedTaints.sort((a, b) => a.localeCompare(b)),
                    null,
                    2),
            );
        });
    });
}

export default runTest;
