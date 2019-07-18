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

    m.initVar("libnotify");

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

    m.initVar("child_process");

    m.initVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("child_process");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj0", "version");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj0", "binVersion");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj0", "notify");

    m.writeVar("libnotify");

    m.readVar("libnotify");

    m.readProperty("obj0", "notify");

    m.readVar("payload");

    m.push(false);

    m.writeProperty("obj1", "title");

    m.push(false);

    m.readVar("done");

    m.functionCall("", 3, 3);

    m.initVar("msg");

    m.initVar("options");

    m.initVar("callback");

    m.initVar("image");

    m.initVar("args");

    m.push(false);

    m.push(false);

    m.readVar("msg");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj2", "1");

    m.writeProperty("obj2", "0");

    m.push(false);

    m.writeVar("args");

    m.readVar("options");

    m.writeVar("options");

    m.readProperty("obj0", "binVersion");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("callback");

    m.readVar("child_process");

    m.readProperty("obj3", "exec");

    m.push(false);

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("err");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("err");

    m.unaryOp();

    m.readVar("callback");

    m.readVar("err");

    m.functionCall("", 2, 1);

    m.initVar("err");

    m.initVar("version");

    m.readVar("err");

    m.readVar("callback");

    m.readVar("err");

    m.functionCall("done", 0, 1);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj4", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

