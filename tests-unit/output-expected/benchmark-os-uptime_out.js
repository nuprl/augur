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

    m.initVar("uptime");

    m.initVar("time");

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

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("process");

    m.readProperty("obj0", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("process");

    m.readProperty("obj0", "platform");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("module");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("execSync");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "execSync");

    m.writeVar("execSync");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj2", "exports");

    m.writeProperty("obj3", "exports");

    m.writeVar("uptime");

    m.readVar("uptime");

    m.readVar("command");

    m.functionCall("", 0, 1);

    m.initVar("output");

    m.readVar("execSync");

    m.push(false);

    m.functionCall("execSync", 1, 1);

    m.readProperty("obj4", "toString");

    m.functionCall("toString", 3, 0);

    m.writeVar("output");

    m.readVar("Date");

    m.readVar("output");

    m.functionCall("Date", 7, 1);

    m.readProperty("obj5", "toLocaleString");

    m.functionCall("toLocaleString", 0, 0);

    m.writeVar("time");

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.readVar("time");

    m.functionCall("bound log", 0, 2);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

