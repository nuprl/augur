import { Analyzer, main, NPCallbacks, Sandbox } from "../nodeprof";
import MyLogger from "../analysis/mylogger";

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

// An empty NodeProf analysis for the purpose of instrumenting a JS file to
// observe NodeProf's callbacks.

export default class Analyze implements Analyzer {
    public sandbox: Sandbox;

    // this set represents the builtin functions/values that the code
    // directly/indirectly uses
    private builtins: Set<string> = new Set<string>();

    // this set represents the functions that the code directly calls
    private functions: Set<string> = new Set<string>();

    // The logger connected to the intended output file.
    // @ts-ignore
    private logger : MyLogger = new MyLogger(J$.initParams.outputFile);

    constructor(sandbox) {
        this.sandbox = sandbox;
    }

    public builtinEnter: NPCallbacks.builtinEnter = (name, f, receiver, args) => {
        this.builtins.add(name);
    };

    public invokeFunPre: NPCallbacks.invokeFunPre = (iid, f, receiver, args, isConstructor, isMethn, functionIid, functionSid) => {
        if (f && f.name) {
            this.functions.add(f.name);
        }
    };

    public endExecution: NPCallbacks.endExecution = () => {
        let directlyUsedBuiltins =
            // take all functions referenced in program
            [...this.builtins.values()]
            // filter to only builtins
                .filter(builtin =>
                    [...this.functions.values()].some(f => builtin.includes(f)))

        let results = {
            directlyUsedBuiltins: directlyUsedBuiltins,
            builtins: [...this.builtins.values()],
            functions: [...this.functions.values()]
        };

        this.logger.log(JSON.stringify(results, undefined, 4));
    }
}
