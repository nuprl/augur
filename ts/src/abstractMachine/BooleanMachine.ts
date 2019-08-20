import JSMachine from "./JSMachine";
import {TaintDescription} from "../types";

export default class BooleanMachine
    extends JSMachine<boolean, TaintDescription> {

    getUntaintedValue(): boolean {
        return false;
    }

    check(sink: TaintDescription, taint: boolean): boolean {
        return taint;
    }

    join(a: boolean, b: boolean): boolean {
        return a || b;
    }

    produceMark(description: TaintDescription): boolean {
        return this.getSink(description) !== undefined;
    }


    // When a value with taint marking T flows into a construct with the given
    // description
    reportPossibleFlow(description: TaintDescription, taintMarking: boolean): void {
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
