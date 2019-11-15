import JSMachine from "./JSMachine";
import {StaticDescription} from "../types";

type NativeModel =
    <V, F>(machine: JSMachine<V, F>,
           name: string,
           actualArgs: number,
           description: StaticDescription) => void;

interface NativeModelMap {
    // this means any string can be a valid key
    [name: string]: NativeModel;
}

let defaultModel: NativeModel = (machine, name, actualArgs, description) => {
    let args = [];

    for (let i = 0; i < actualArgs; i++) {
        args.push(machine.taintStack.pop());
    }

    args.forEach((v) => machine.reportPossibleFlow(description, v));
};

let models: NativeModelMap = {
    // TODO: correctly implement variables in this native model. currently
    //  there is no access to the shadow memory in here, so we cannot call
    //  shadowMemory.getFullVariableName("__accum__"), for example. Perhaps
    //  these variables should be modeled as local variables inside this
    //  function.
    /*
    "reduce":
        <V, F>(m: JSMachine<V, F>, name: string, actualArgs: number, description: StaticDescription) => {
            // Array.prototype.reduce(callback, initialValue)
            let arrayOID = "";
            let reducerName = "";
            let index = 0;

            // pre
            m.pop([description]);
            if (actualArgs === 1) {
                m.pop([description]);
                m.push([m.getUntaintedValue(), description]);
                m.push([m.getUntaintedValue(), description]);
                m.readProperty([arrayOID, 0, description]);
                m.initVar(["__accum__", description]);
                m.pop([description]);
            } else if (actualArgs === 2) {
                m.initVar(["__accum__", description]);
                m.pop([description]);
            }

            // callback pre
            m.functionEnterOp.before.install(
                ([functionName, actualArgs, description]) => {
                    if (functionName === name) {
                        m.readVar(["__accum__", description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.readProperty([arrayOID, index, description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                    }
                });

            // callback post
            m.functionReturnOp.after.install(
                ([[functionName, description], ret]) => {
                    if (functionName === name) {
                        m.readVar(["__ret__", description]);
                        m.writeVar(["__accum__", description]);
                        m.pop([description]);
                        index++;
                    }
                }
            );

            // post
            m.builtinExitOp.after.install(
                ([[name, description], ret]) => {
                    m.readVar(["__accum__", description]);
                    m.writeVar(["__ret__", description]);
                    m.functionEnterOp.before.uninstall();
                    m.functionReturnOp.after.uninstall();
                    m.builtinExitOp.after.uninstall();
                }
            );
        }
     */
};

export function useNativeModel<V, F>(machine: JSMachine<V, F>, name: string, actualArgs: number, description: StaticDescription): void {
    let model = models[name];

    if (model) {
        model(machine, name, actualArgs, description);
    } else {
        defaultModel(machine, name, actualArgs, description);
    }
}

