exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("DUMMY_FILE");

    m.initVar("command");

    m.initVar("exec");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("DUMMY_FILE");

    m.push(false);

    m.readVar("DUMMY_FILE");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("command");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("command");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("command");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("exec");

    m.readVar("command");

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("error");

    m.readVar("console");

    m.readProperty("obj1", "log");

    m.push(false);

    m.readVar("stdout");

    m.functionCall("bound log", 0, 2);

    m.readVar("console");

    m.readProperty("obj1", "log");

    m.push(false);

    m.readVar("stderr");

    m.functionCall("bound log", 0, 2);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj1", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

