import child_process = require("child_process");
import fs = require("fs");

const exec: (cmd: string) => Promise<{ stdout: string, stderr: string }> =
    (command: string) => new Promise((resolve, reject) => {
        child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });

function runTest(testDir) {
    const {
        main,
        sources,
        sinks,
        expectedTaints,
        skip,
    } = JSON.parse(fs.readFileSync(`${testDir}/spec.json`).toString());

    const instrsPath = `${testDir}/__output_instructions.txt`;
    const testFun = skip ? xtest : test;

    describe(testDir, () => {
        testFun("generate instrs", async () => {
            const generateInstrsCommand = `${process.env.PWD}/generate-instrs-test.sh ${testDir}/${main}`;
            const { stdout } = await exec(generateInstrsCommand);
            expect(stdout).toBeTruthy();
            await fs.promises.writeFile(instrsPath, stdout);
        });
        testFun("detect taint", async () => {
            // tslint:disable-next-line:max-line-length
            const testRunCommand = `${process.env.PWD}/runTest.sh ${instrsPath} ${sources.join(",")} ${sinks.join(",")}`;
            const { stderr } = await exec(testRunCommand);
            expect( stderr ).toBe(
                JSON.stringify(
                    expectedTaints.sort((a, b) => a.localeCompare(b)),
                    null,
                    2),
            );
        });
    });
}

export default runTest;
