import fs = require("fs");

async function mkdir(dir: string) {
    if (!fs.existsSync(dir)) {
        return await fs.promises.mkdir(dir, { recursive: true });
    }
}

const sources = [
    "tests/sanity/clean",
    "tests/sanity/tainted",
    "tests/sanity-es/clean",
    "tests/sanity-es/tainted",
];

async function generateTests() {
    for (const source of sources) {
        // mkdirSync(LOG_DIR);
        // mild hack due to project structure
        const realPath = `${process.env.PWD}/../${source}`;

        const files = await fs.promises.readdir(realPath);
        for (const fileName of files) {
            const testDir = `${realPath}/${fileName}`;

            const testProgram = `
import runTest from "./runTest";

runTest("${testDir}");

            `;

            const testPath = `${process.env.PWD}/tests/generated/${source}`;

            await mkdir(testPath);
            await fs.promises.writeFile(`${testPath}/${fileName}.test.ts`, testProgram);
            await fs.promises.copyFile(`${process.env.PWD}/tests/runTest.ts`, `${testPath}/runTest.ts`);
        }
    }

}

generateTests();
