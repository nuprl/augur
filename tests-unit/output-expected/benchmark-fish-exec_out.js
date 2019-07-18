exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("DUMMY_FILE");

    m.initVar("payload");

    m.initVar("fish");

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

    m.writeVar("payload");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("payload");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("payload");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

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

    m.initVar("fs");

    m.initVar("EventEmitter");

    m.initVar("exec");

    m.initVar("ee");

    m.initVar("fish");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "EventEmitter");

    m.writeVar("EventEmitter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "exec");

    m.writeVar("exec");

    m.readVar("EventEmitter");

    m.functionCall("EventEmitter", 0, 0);

    m.writeVar("ee");

    m.push(false);

    m.writeVar("fish");

    m.readVar("module");

    m.readVar("fish");

    m.writeProperty("obj2", "exports");

    m.writeProperty("obj3", "exports");

    m.writeVar("fish");

    m.readVar("fish");

    m.readVar("payload");

    m.functionCall("fish", 1, 1);

    m.initVar("query");

    m.initVar("ls");

    m.readVar("exec");

    m.push(false);

    m.readVar("query");

    m.binaryOp();

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.writeVar("ls");

    m.push(false);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj4", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("ee");

    m.readProperty("obj5", "emit");

    m.push(false);

    m.readVar("stdout");

    m.functionCall("emit", 1, 2);

    m.endExecution();

};

