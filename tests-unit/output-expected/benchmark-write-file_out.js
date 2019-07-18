exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("content");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("content");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("content");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("content");

    m.readVar("fs");

    m.readProperty("obj0", "writeFile");

    m.push(false);

    m.readVar("content");

    m.push(false);

    m.functionCall("writeFile", 4, 3);

    m.initVar("err");

    m.readVar("err");

    m.readVar("console");

    m.readProperty("obj1", "log");

    m.readVar("content");

    m.push(false);

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj1", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

