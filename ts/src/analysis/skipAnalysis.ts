// Driver file to run the main analysis with NodeProf.

import {main} from "../nodeprof";
import Analysis from "./analysis";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// This runs NodeProf without an analysis.
// The intended use case is for benchmarking.

const main: main = (sandbox) => {
    // console.log("initializing...");
    // sandbox.addAnalysis(new Analysis(sandbox));
    // console.log(sandbox);
};

main(J$);
