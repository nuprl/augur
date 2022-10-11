// This file contains the Birdseye auto-generator.
// Given the flows and spec from an ExpressionMachine,
// this file generates a self-contained HTML page
// with a dynamic visualization of the 
// *program dependence graph* observed from instrumenting
// the program with Augur.

import { RunSpecification, StaticDescription } from "../types"
import ExpressionMachine from "../abstractMachine/ExpressionMachine"
import * as fs from 'fs'

export default function generateBirdseyeHTML(m: ExpressionMachine): string {
    // Step 1: Get the `birdseye.html` template.
    let birdseyeHTML = fs.readFileSync('./birdseye/birdseye.html').toString()
    console.error("Birdseye HTML TEMPLATE: " + birdseyeHTML)

    // Step 2: Insert the flows into this HTML file.
    //         The template contains the marker `AUGUR REPLACE ME HERE`.
    //         The flows will be injected into here, as serialized JSON.
    birdseyeHTML = birdseyeHTML.replace("AUGUR REPLACE ME HERE", JSON.stringify(m.flows, (key, value) =>
                        value instanceof Set ? [...value] : value, ))
    birdseyeHTML = birdseyeHTML.replace("AUGUR REPLACE SPEC HERE", JSON.stringify(m.spec))
    birdseyeHTML = birdseyeHTML.replace("AUGUR REPLACE PROJECT NAME HERE", m.spec.main)
    birdseyeHTML = birdseyeHTML.replace("AUGUR REPLACE INSTRUCTIONS HERE", getNumberOfInstructions(m.outputFilePath).toString())
    return birdseyeHTML
}

function getNumberOfInstructions(outputFilePath: string): number {
    // Augur output files have some garbage before and after the instructionns
    const numLines = fs.readFileSync(outputFilePath)
                       .toString()
                       .split("\n")
                       .length
            
    return (numLines - 5) / 2
}