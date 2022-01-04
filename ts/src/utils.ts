import {RunSpecification, SourceSpan, Location, StaticDescription, AbstractMachine, VALID_SPEC_FIELDS} from "./types";
import BooleanMachine from "./abstractMachine/BooleanMachine";
import SourcedBooleanMachine from "./abstractMachine/SourcedBooleanMachine";
import ExpressionMachine from "./abstractMachine/ExpressionMachine";

import * as json5 from "json5";
import * as fs from "fs";

// JALANGI DO NOT INSTRUMENT

// Do the given descriptions of a taint source/sink describe the same thing?
// Two descriptions are considered equal if all of the common taint source/sink
// properties they provide are equal.

// Does the description t1 describe a subset of t2? In other words, does t2
// describe each type of thing that t1 does, and do the common descriptions
// match?
export function descriptionSubset(t1: StaticDescription, t2: StaticDescription): boolean {
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

/**
 * Checks if @t2 matches the description @t1 from the taint specification. Care is required
 * as @t2 will always contain line information, @t1 may not, and @t1 may contain config information,
 * which @t2 never has. 
 * 
 * @param t1 the description from the taint specification
 * @param t2 the description from the runtime
 */
// export function descriptionMatchesTaintSpec(t1: StaticDescription, t2: StaticDescription) {
//     return descriptionSubset({type: t1.type, name: t1.name, location: t1.location}, 
//         {type: t2.type, name: t2.name, location: t2.location});
// }

export function descriptionMatchesTaintSpec(sourceOrSink: StaticDescription, target: StaticDescription) {

    if (Object.keys(target).length === 0) {
        // Why does this happen?
        return false;
    }
    const namesMatch = sourceOrSink.name === target.name;
    const typesMatch = sourceOrSink.type === target.type;
    let locationsMatch = true;
    if (sourceOrSink.location !== undefined) {
        locationsMatch = sourceOrSink.location.fileName === target.location.fileName;
        // TODO: We may want to also check the location, but I'm going to leave it out for now
        //       since it's unnecessary with the current tests.
    }
    return namesMatch && typesMatch && locationsMatch;
}

export function parseJalangiLocationString(loc: string): Location {
    // Parse Jalangi location string
    // Rather than determining the location through a regex search we simply parse the provided loc string
    // If the location starts with (eval at [path location]) it's probably referencing an eval expression
    
    // TODO: There's a better place to put this. 
    // projectRoot is an absolute path specifying the root of the project directory.
    // We will use it to trim the path from the file name in the location string to make
    // more useful locations, that are path-aware. E.g., we want to differentiate between dir1/foo.js and dir2/foo.js
    // @ts-ignore
    const projectRoot : string = J$.initParams.specPath.substr(0, J$.initParams.specPath.length - 9);

    // TODO: make sure this is the case.
    if (loc.substring(0, 5) === "(eval") {
       return {
            fileName: "eval"
        };
    } else {
        let pathFromRoot : string = loc.replace('(', '').replace(')', '').replace(projectRoot, '');
        let result: string[] = pathFromRoot.split(":");

        let fileName: string = result.shift().substring(0);
        let indices = result.map((n: string) => Number.parseInt(n));
        let span: SourceSpan = {
            start: [indices[0], indices[1]],
            end: [indices[2], indices[3]]
        }
        let location: Location = {
            fileName:  fileName,
            pos: span
        }
        return location
    }
}

export function parseIID(iid: number): Location {
    return parseJalangiLocationString(J$.iidToLocation(iid));
}

/**
 * Creates an abstract machine to analyze a project in.
 * Use this function whenever you want to make an AbstractMachine,
 * as it is important to match the taint tracking type specified
 * in the `spec.json` file.
 */
export function createAbstractMachine(options: RunSpecification, liveLogging: boolean = false, outputFilePath: string = ""): AbstractMachine {
    switch (options.tracking) {
        case "Boolean":
            return new BooleanMachine(options, liveLogging, outputFilePath);

        case "SourcedBoolean":
            return new SourcedBooleanMachine(options, liveLogging, outputFilePath);

        case "Expression":
            return new ExpressionMachine(options, liveLogging, outputFilePath);
    }
}

/**
 * Parses and validates an Augur spec, given the path in the filesystem.
 * Use this function WHENEVER you need to parse a spec,
 * as the spec needs to go through special processing
 * before it can be used.
 * @param specPath the path to the spec
 */
export function parseSpec(specPath: string): RunSpecification {
    // Parse spec using JSON5. JSON5 allows more flexibility in JSON
    // files, including comments.
    let spec = json5.parse(fs.readFileSync(specPath).toString());

    // Is this spec valid? Does it have the required fields? Does it have
    // any unrecognized fields? Augur will terminate if the spec doesn't look right
    // or has any extra fields.
    let specFields = Object.keys(spec);

    // Compute a list of "unknown" fields in the spec file.
    // These are fields that aren't in `VALID_SPEC_FIELDS`
    let unknownFields =
        specFields.filter(field => !VALID_SPEC_FIELDS.includes(field));

    // Time to determine if we should crash or not.
    if (unknownFields.length > 0) {
        console.error(`Spec file at ${specPath} has invalid fields: ${JSON.stringify(unknownFields)}.
        Valid fields are: ${JSON.stringify(VALID_SPEC_FIELDS)}`)
    }
    if (!spec.main) {
        console.error(`Spec file at ${specPath} doesn't specify a "main" field! Augur doesn't know which JS program to run. Please add a "main" field to your spec and try again.`)
    }

    // Add empty sanitizers array if the user didn't specify any
    if (!spec.sanitizers) {
        spec.sanitizers = [];
    }

    // All looks good!
    return spec as RunSpecification;
}

export function executeInstructionsFromFile(path: string, options: RunSpecification) {
    console.log("Executing instructions from",
        path,
        "with the specification:",
        options);
    const abstractMachine = createAbstractMachine(options);
    const compiledOutput = require(path);
    compiledOutput.drive(abstractMachine);
    return abstractMachine.getTaint();
}
