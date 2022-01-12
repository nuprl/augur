import * as bunyan from "bunyan";
import {RunSpecification} from "../types";
export default function createLogger(spec: RunSpecification): bunyan {
    return bunyan.createLogger({
        level: spec.verbose? "info" : "fatal",
        name: "augur-machine",
    });
}
