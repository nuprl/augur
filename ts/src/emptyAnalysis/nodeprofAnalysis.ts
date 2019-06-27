// Driver file to run the empty analysis with NodeProf.

import {main} from "../nodeprof";
import Analysis from "./emptyAnalysis";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT


const main: main = (sandbox) => {
    // console.log("initializing...");
    sandbox.addAnalysis(new Analysis(sandbox));
    // console.log(sandbox);
};

main(J$);
