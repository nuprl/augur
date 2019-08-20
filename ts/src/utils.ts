import {RunSpecification, TaintDescription} from "./types";
import BooleanMachine from "./abstractMachine/BooleanMachine";
import ExpressionMachine from "./abstractMachine/ExpressionMachine";

// Do the given descriptions of a taint source/sink describe the same thing?
// Two descriptions are considered equal if all of the common taint source/sink
// properties they provide are equal.

// Does the description t1 describe a subset of t2? In other words, does t2
// describe each type of thing that t1 does, and do the descriptions match?
export function descriptionSubset(t1: TaintDescription, t2: TaintDescription): boolean {
    if (typeof t1 !== "object" || typeof t2 !== "object") {
        throw new Error("descriptionSubset was passed a non-object: "
            + t1.toString()
            + " & "
            + t2.toString());
    }
    return ["type", "name", "fileName"]
        .filter((prop) => t1.hasOwnProperty(prop))
        .every(prop => t1[prop] === t2[prop]);
}

export function executeInstructionsFromFile(path: string, options: RunSpecification) {
    console.log(path, options);
    const abstractMachine = new ExpressionMachine(options);
    const compiledOutput = require(path);
    console.log(JSON.stringify(compiledOutput));
    compiledOutput.drive(abstractMachine);
    return abstractMachine.getTaint();
}
