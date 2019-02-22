import * as fs from "fs";
import Analyze from "./analyze";
import {main} from "./nodeprof";
import { Spec } from "./types";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

const CUR_SPEC_FOLDER: string = process.env.CUR_SPEC_FOLDER;

const main: main = async (sandbox) => {
    const specFile = await fs.promises.readFile(`${CUR_SPEC_FOLDER}/spec.json`);
    const spec: Spec = JSON.parse(specFile.toString());
    sandbox.addAnalysis(new Analyze(sandbox, {} as any));
};

main(J$);
