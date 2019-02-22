import Analyze from "./analyze";
import {main} from "./nodeprof";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

const main: main = (sandbox) => {
    console.log("initializing...");
    sandbox.addAnalysis(new Analyze(sandbox));
};

main(J$);
