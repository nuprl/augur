exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("monitor");

    m.initVar("command");

    m.initVar("param");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

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

    m.readProperty("obj0", "exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("getPsInfo");

    m.initVar("format");

    m.initVar("exec");

    m.initVar("spawn");

    m.initVar("util");

    m.push(false);

    m.writeVar("getPsInfo");

    m.push(false);

    m.writeVar("format");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "spawn");

    m.writeVar("spawn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("formatTime");

    m.push(false);

    m.writeVar("formatTime");

    m.readVar("module");

    m.readProperty("obj2", "exports");

    m.readVar("formatTime");

    m.writeProperty("obj3", "formatTime");

    m.writeVar("util");

    m.readVar("module");

    m.readProperty("obj4", "exports");

    m.readVar("getPsInfo");

    m.writeProperty("obj5", "getPsInfo");

    m.writeProperty("obj6", "psmonitor");

    m.readVar("module");

    m.readProperty("obj0", "exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("getSysInfo");

    m.initVar("format");

    m.initVar("getBasicInfo");

    m.initVar("os");

    m.initVar("util");

    m.initVar("exec");

    m.initVar("info");

    m.push(false);

    m.writeVar("getSysInfo");

    m.push(false);

    m.writeVar("format");

    m.push(false);

    m.writeVar("getBasicInfo");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "exec");

    m.writeVar("exec");

    m.push(false);

    m.writeVar("info");

    m.readVar("module");

    m.readProperty("obj7", "exports");

    m.readVar("getSysInfo");

    m.writeProperty("obj8", "getSysInfo");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "hostname");

    m.writeProperty("obj10", "hostname");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "type");

    m.writeProperty("obj10", "type");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "platform");

    m.writeProperty("obj10", "platform");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "arch");

    m.writeProperty("obj10", "arch");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "release");

    m.writeProperty("obj10", "release");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "uptime");

    m.writeProperty("obj10", "uptime");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "loadavg");

    m.writeProperty("obj10", "loadavg");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "totalmem");

    m.writeProperty("obj10", "totalmem");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "freemem");

    m.writeProperty("obj10", "freemem");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "cpus");

    m.writeProperty("obj10", "cpus");

    m.readVar("info");

    m.readVar("os");

    m.readProperty("obj9", "networkInterfaces");

    m.writeProperty("obj10", "networkInterfaces");

    m.readVar("info");

    m.push(false);

    m.writeProperty("obj10", "versions");

    m.readVar("info");

    m.push(false);

    m.writeProperty("obj10", "arch");

    m.readVar("info");

    m.push(false);

    m.writeProperty("obj10", "platform");

    m.readVar("info");

    m.readVar("process");

    m.readProperty("obj11", "memoryUsage");

    m.writeProperty("obj10", "memoryUsage");

    m.readVar("info");

    m.readVar("process");

    m.readProperty("obj11", "uptime");

    m.writeProperty("obj10", "uptime");

    m.writeProperty("obj6", "sysmonitor");

    m.writeVar("monitor");

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

    m.readVar("process");

    m.readProperty("obj11", "pid");

    m.readVar("command");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj12", "serverId");

    m.writeProperty("obj12", "pid");

    m.push(false);

    m.writeVar("param");

    m.readVar("console");

    m.readProperty("obj13", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("monitor");

    m.readProperty("obj6", "psmonitor");

    m.readProperty("obj5", "getPsInfo");

    m.readVar("param");

    m.push(false);

    m.functionCall("getPsInfo", 2, 2);

    m.initVar("param");

    m.initVar("callback");

    m.initVar("pid");

    m.initVar("cmd");

    m.readVar("process");

    m.readProperty("obj11", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("param");

    m.readProperty("obj12", "pid");

    m.writeVar("pid");

    m.push(false);

    m.readVar("pid");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("cmd");

    m.readVar("exec");

    m.readVar("cmd");

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.readVar("console");

    m.readProperty("obj13", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj13", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("err");

    m.initVar("output");

    m.readVar("err");

    m.unaryOp();

    m.readVar("err");

    m.readProperty("obj14", "code");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj13", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("callback");

    m.readVar("err");

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("err");

    m.initVar("data");

    m.readVar("console");

    m.readProperty("obj13", "log");

    m.push(false);

    m.readVar("data");

    m.functionCall("bound log", 0, 2);

    m.endExecution();

};

