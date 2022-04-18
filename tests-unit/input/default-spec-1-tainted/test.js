let args = process.argv;

// Injection vulnerability from process.argv -> eval!
eval("console.log(" + JSON.stringify(args[0]) + ");");
