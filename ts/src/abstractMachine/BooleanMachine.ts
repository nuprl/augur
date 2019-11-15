// JALANGI DO NOT INSTRUMENT

import JSMachine from "./JSMachine";
import {StaticDescription} from "../types";

export default class BooleanMachine
    extends JSMachine<boolean, StaticDescription> {

    getUntaintedValue(): boolean {
        return false;
    }

    check(sink: StaticDescription, taint: boolean): boolean {
        return taint;
    }

    join(a: boolean, b: boolean): boolean {
        return a || b;
    }

    produceMark(description: StaticDescription): boolean {
        return this.isSource(description);
    }

    // When a value with taint marking T flows into a construct with the given
    // description
    reportPossibleFlow(description: StaticDescription, taintMarking: boolean): void {
        // First check if the value is tainted
        if (taintMarking) {
            // Check to see if this is a sink, and that it accepts the given
            // marking
            let sinkDescription = this.getSink(description);
            if (sinkDescription !== undefined && this.check(description, taintMarking)) {
                this.reportFlow(sinkDescription);
            }
        }
    }

}
