import {RunSpecification, SourceSpan, Location, TaintDescription} from "./types";
import BooleanMachine from "./abstractMachine/BooleanMachine";
import ExpressionMachine from "./abstractMachine/ExpressionMachine";

// Do the given descriptions of a taint source/sink describe the same thing?
// Two descriptions are considered equal if all of the common taint source/sink
// properties they provide are equal.

// Does the description t1 describe a subset of t2? In other words, does t2
// describe each type of thing that t1 does, and do the common descriptions
// match?
export function descriptionSubset(t1: TaintDescription, t2: TaintDescription): boolean {
    if (typeof t1 !== "object" || typeof t2 !== "object") {
        throw new Error("descriptionSubset was passed a non-object: "
            + t1.toString()
            + " & "
            + t2.toString());
    }

    // This function determines, RECURSIVELY, if each property of a is a subset
    // of b. It does this by structurally breaking down the two objects.
    function objectSubset(a: any, b: any): boolean {
        // if they're primitively equal, they're subsets
        if (a === b) {
            return true;
        }

        // if they're both objects, check if a describes a subset of b's
        // properties, then recur.
        if (typeof a === "object" && typeof b === "object") {
            return Object.getOwnPropertyNames(a).every(prop => {
                return (
                    // either the two properties are equal
                    a[prop] === b[prop]
                    // or they're subsets of each other
                    || objectSubset(a[prop], b[prop]));
            });
        }

        return false;
    }

    return objectSubset(t1, t2);
}

export function parseJalangiLocationString(loc: string): Location {
    // Parse Jalangi location string
    let result = /\((.+\.js):(\d+):(\d+):(\d+):(\d+)\)/.exec(loc);

    let fileName = result[1];
    let indices = result.slice(2).map(n => Number.parseInt(n));

    let span: SourceSpan = {
        start: [indices[0], indices[1]],
        end: [indices[2], indices[3]]
    };

    let location: Location = {
        fileName: fileName,
        pos: span
    };

    return location;
}

export function parseIID(iid: number): Location {
    return parseJalangiLocationString(J$.iidToLocation(iid));
}

export function executeInstructionsFromFile(path: string, options: RunSpecification) {
    console.log(path, options);
    const abstractMachine = new BooleanMachine(options);
    const compiledOutput = require(path);
    console.log(JSON.stringify(compiledOutput));
    compiledOutput.drive(abstractMachine);
    return abstractMachine.getTaint();
}
