import * as bunyan from "bunyan";
export default bunyan.createLogger({
    /**
     * Warning: this program uses stdout as its output.
     * If logging is enabled, this will mess with downstream programs
     * unless output streams is configured. (TODO)
     */
    level: "fatal",
    name: "analyze-program",
});
