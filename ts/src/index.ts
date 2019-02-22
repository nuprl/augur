import Analyze from "./analyze";
import {main} from "./jalangi";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

const main: main = (sandbox) => {
    sandbox.analysis = new Analyze(sandbox);
};

main(J$);
