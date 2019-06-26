import {main} from "../nodeprof";
import Analyze from "./analyze";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// Driver file for NodeProf analysis.

const main: main = (sandbox) => {
    // console.log("initializing...");
    sandbox.addAnalysis(new Analyze(sandbox));
    // console.log(sandbox);
};

main(J$);
