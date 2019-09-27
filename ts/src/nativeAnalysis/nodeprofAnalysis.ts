// Driver file to run the native analysis with NodeProf.

import {main} from "../nodeprof";
import Analysis from "./nativeAnalysis";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT


const main: main = (sandbox) => {
    // console.log("initializing...");
    sandbox.addAnalysis(new Analysis(sandbox));
    // console.log(sandbox);
};

main(J$);
