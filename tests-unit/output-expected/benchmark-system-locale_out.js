exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("command");

    m.initVar("locale");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

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

    m.initVar("path");

    m.initVar("child");

    m.initVar("executeSync");

    m.initVar("executeAsync");

    m.initVar("locale");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("child");

    m.push(false);

    m.writeVar("executeSync");

    m.push(false);

    m.writeVar("executeAsync");

    m.push(false);

    m.writeVar("locale");

    m.readVar("module");

    m.readVar("Object");

    m.readProperty("obj0", "assign");

    m.readVar("locale");

    m.push(false);

    m.writeProperty("obj1", "sync");

    m.push(false);

    m.functionCall("assign", 2, 2);

    m.writeProperty("obj2", "exports");

    m.writeVar("locale");

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.readVar("locale");

    m.readProperty("obj4", "sync");

    m.readVar("command");

    m.functionCall("sync", 0, 1);

    m.readVar("locale");

    m.readVar("executeSync");

    m.functionCall("locale", 1, 1);

    m.initVar("executeAsync");

    m.initVar("execute");

    m.readVar("executeAsync");

    m.writeVar("execute");

    m.readVar("process");

    m.readProperty("obj5", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("process");

    m.readProperty("obj5", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("process");

    m.readProperty("obj5", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("execute");

    m.push(false);

    m.functionCall("executeSync", 1, 1);

    m.initVar("file");

    m.initVar("stdout");

    m.readVar("child");

    m.readProperty("obj6", "execFileSync");

    m.readVar("path");

    m.readProperty("obj7", "join");

    m.readVar("__dirname");

    m.readVar("file");

    m.functionCall("join", 0, 2);

    m.functionCall("execFileSync", 0, 1);

    m.writeVar("stdout");

    m.readVar("stdout");

    m.readProperty("obj8", "toString");

    m.functionCall("toString", 3, 0);

    m.readProperty("obj9", "trim");

    m.functionCall("trim", 0, 0);

    m.functionCall("bound log", 0, 1);

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

