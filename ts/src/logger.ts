import * as bunyan from "bunyan";
export default bunyan.createLogger({
    level: "fatal",
    name: "taint-analysis",
});
