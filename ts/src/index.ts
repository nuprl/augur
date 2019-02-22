import Analyze from "./analyze";
import {Sandbox} from "./jalangi";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

((sandbox: Sandbox) => {
    sandbox.analysis = new Analyze(sandbox);
})(J$);
