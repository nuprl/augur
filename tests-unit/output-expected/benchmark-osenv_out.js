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

    m.initVar("osenv");

    m.initVar("filename");

    m.initVar("hostname");

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

    m.initVar("memo");

    m.initVar("isWindows");

    m.initVar("path");

    m.initVar("exec");

    m.initVar("osTmpdir");

    m.initVar("osHomedir");

    m.push(false);

    m.writeVar("memo");

    m.readVar("process");

    m.readProperty("obj0", "platform");

    m.push(false);

    m.binaryOp();

    m.writeVar("isWindows");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isWindows");

    m.initVar("trailingSlashRe");

    m.push(false);

    m.readVar("process");

    m.readProperty("obj0", "platform");

    m.push(false);

    m.binaryOp();

    m.writeVar("isWindows");

    m.readVar("isWindows");

    m.push(false);

    m.writeVar("trailingSlashRe");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj2", "exports");

    m.writeVar("osTmpdir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("homedir");

    m.initVar("os");

    m.push(false);

    m.writeVar("homedir");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("module");

    m.readVar("os");

    m.readProperty("obj3", "homedir");

    m.readVar("os");

    m.readProperty("obj3", "homedir");

    m.writeProperty("obj4", "exports");

    m.writeVar("osHomedir");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 3);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "user");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "prompt");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 3);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "hostname");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "tmpdir");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "home");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "path");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "editor");

    m.readVar("memo");

    m.push(false);

    m.push(false);

    m.functionCall("memo", 3, 2);

    m.initVar("key");

    m.initVar("lookup");

    m.initVar("fallback");

    m.initVar("fell");

    m.initVar("falling");

    m.push(false);

    m.writeVar("fell");

    m.push(false);

    m.writeVar("falling");

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "shell");

    m.writeVar("osenv");

    m.push(false);

    m.writeVar("filename");

    m.push(false);

    m.writeVar("command");

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("osenv");

    m.readProperty("obj5", "hostname");

    m.push(false);

    m.readVar("filename");

    m.readVar("command");

    m.binaryOp();

    m.functionCall("", 1, 2);

    m.initVar("cb");

    m.initVar("val");

    m.readVar("lookup");

    m.functionCall("", 0, 0);

    m.readVar("isWindows");

    m.readVar("process");

    m.readProperty("obj0", "env");

    m.readProperty("obj7", "HOSTNAME");

    m.writeVar("val");

    m.readVar("val");

    m.unaryOp();

    m.readVar("exports");

    m.readVar("key");

    m.push(false);

    m.writeProperty("obj5", "hostname");

    m.readVar("cb");

    m.readVar("falling");

    m.unaryOp();

    m.unaryOp();

    m.readVar("process");

    m.readProperty("obj0", "nextTick");

    m.readVar("cb");

    m.readProperty("obj8", "bind");

    m.push(false);

    m.push(false);

    m.readVar("val");

    m.functionCall("bind", 1, 3);

    m.functionCall("nextTick", 1, 1);

    m.readVar("val");

    m.writeVar("hostname");

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.readVar("hostname");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("er");

    m.initVar("hostname");

    m.readVar("er");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj6", "log");

    m.push(false);

    m.readVar("hostname");

    m.functionCall("bound log", 0, 2);

    m.endExecution();

};

