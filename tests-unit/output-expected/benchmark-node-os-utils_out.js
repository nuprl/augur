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

    m.initVar("nodeosutils");

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

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.initVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("cp");

    m.readVar("module");

    m.push(false);

    m.push(false);

    m.writeProperty("obj0", "INTERVAL");

    m.writeProperty("obj0", "NOT_SUPPORTED_VALUE");

    m.push(false);

    m.push(false);

    m.writeProperty("obj1", "exec");

    m.writeProperty("obj1", "options");

    m.push(false);

    m.writeProperty("obj2", "exports");

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj3", "loadavgTime");

    m.writeProperty("obj3", "loadavg");

    m.writeProperty("obj3", "model");

    m.writeProperty("obj3", "count");

    m.writeProperty("obj3", "free");

    m.writeProperty("obj3", "usage");

    m.writeProperty("obj3", "average");

    m.push(false);

    m.writeProperty("obj1", "cpu");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("createDiskInfo");

    m.initVar("parseDfStdout");

    m.initVar("bucket");

    m.initVar("DISK_PATTERN");

    m.push(false);

    m.writeVar("createDiskInfo");

    m.push(false);

    m.writeVar("parseDfStdout");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.push(false);

    m.writeVar("DISK_PATTERN");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj4", "used");

    m.writeProperty("obj4", "free");

    m.writeProperty("obj4", "info");

    m.push(false);

    m.writeProperty("obj1", "drive");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.initVar("cp");

    m.initVar("os");

    m.initVar("co");

    m.initVar("darwinMem");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("co");

    m.initVar("toPromise");

    m.initVar("thunkToPromise");

    m.initVar("arrayToPromise");

    m.initVar("objectToPromise");

    m.initVar("isPromise");

    m.initVar("isGenerator");

    m.initVar("isGeneratorFunction");

    m.initVar("isObject");

    m.initVar("slice");

    m.push(false);

    m.writeVar("co");

    m.push(false);

    m.writeVar("toPromise");

    m.push(false);

    m.writeVar("thunkToPromise");

    m.push(false);

    m.writeVar("arrayToPromise");

    m.push(false);

    m.writeVar("objectToPromise");

    m.push(false);

    m.writeVar("isPromise");

    m.push(false);

    m.writeVar("isGenerator");

    m.push(false);

    m.writeVar("isGeneratorFunction");

    m.push(false);

    m.writeVar("isObject");

    m.readVar("Array");

    m.readProperty("obj5", "prototype");

    m.readProperty("obj6", "slice");

    m.writeVar("slice");

    m.readVar("module");

    m.readVar("co");

    m.push(false);

    m.readVar("co");

    m.readVar("co");

    m.writeProperty("obj7", "co");

    m.writeProperty("obj7", "default");

    m.writeProperty("obj8", "exports");

    m.readVar("co");

    m.push(false);

    m.writeProperty("obj7", "wrap");

    m.writeVar("co");

    m.push(false);

    m.readVar("co");

    m.readProperty("obj7", "wrap");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("fn");

    m.initVar("createPromise");

    m.push(false);

    m.writeVar("createPromise");

    m.readVar("createPromise");

    m.readVar("fn");

    m.writeProperty("obj9", "__generatorFunction__");

    m.readVar("createPromise");

    m.readVar("co");

    m.readProperty("obj7", "wrap");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("fn");

    m.initVar("createPromise");

    m.push(false);

    m.writeVar("createPromise");

    m.readVar("createPromise");

    m.readVar("fn");

    m.writeProperty("obj10", "__generatorFunction__");

    m.readVar("createPromise");

    m.readVar("co");

    m.readProperty("obj7", "wrap");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("fn");

    m.initVar("createPromise");

    m.push(false);

    m.writeVar("createPromise");

    m.readVar("createPromise");

    m.readVar("fn");

    m.writeProperty("obj11", "__generatorFunction__");

    m.readVar("createPromise");

    m.writeProperty("obj12", "memory");

    m.writeProperty("obj12", "vmStats");

    m.writeProperty("obj12", "physicalMemory");

    m.writeProperty("obj12", "PAGE_SIZE");

    m.push(false);

    m.writeVar("darwinMem");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj13", "totalMem");

    m.writeProperty("obj13", "used");

    m.writeProperty("obj13", "free");

    m.writeProperty("obj13", "info");

    m.push(false);

    m.writeProperty("obj1", "mem");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("ifconfigStats");

    m.initVar("bucket");

    m.initVar("cp");

    m.initVar("ifconfig");

    m.push(false);

    m.writeVar("ifconfigStats");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("cp");

    m.push(false);

    m.push(false);

    m.writeProperty("obj14", "parseSingleBlock");

    m.writeProperty("obj14", "breakIntoBlocks");

    m.push(false);

    m.writeVar("ifconfig");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.writeProperty("obj15", "inOut");

    m.writeProperty("obj15", "stats");

    m.push(false);

    m.writeProperty("obj1", "netstat");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.initVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("bucket");

    m.push(false);

    m.writeProperty("obj16", "openFd");

    m.push(false);

    m.writeProperty("obj1", "openfiles");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("bucket");

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.readVar("bucket");

    m.readProperty("obj1", "exec");

    m.push(false);

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.writeProperty("obj17", "ifconfig");

    m.writeProperty("obj17", "openPorts");

    m.writeProperty("obj17", "whoami");

    m.writeProperty("obj17", "who");

    m.writeProperty("obj17", "diskUsage");

    m.writeProperty("obj17", "processesUsers");

    m.writeProperty("obj17", "vmstats");

    m.writeProperty("obj17", "topMem");

    m.writeProperty("obj17", "topCpu");

    m.push(false);

    m.writeProperty("obj1", "osCmd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.initVar("cp");

    m.initVar("fs");

    m.initVar("os");

    m.initVar("originalOperatingSystem");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj18", "linux");

    m.writeProperty("obj18", "darwin");

    m.writeProperty("obj18", "checkLastResort");

    m.push(false);

    m.writeVar("originalOperatingSystem");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj19", "arch");

    m.writeProperty("obj19", "type");

    m.writeProperty("obj19", "hostname");

    m.writeProperty("obj19", "ip");

    m.writeProperty("obj19", "uptime");

    m.writeProperty("obj19", "platform");

    m.writeProperty("obj19", "oos");

    m.push(false);

    m.writeProperty("obj1", "os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.initVar("cp");

    m.initVar("os");

    m.initVar("co");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("co");

    m.readVar("bucket");

    m.push(false);

    m.push(false);

    m.writeProperty("obj20", "zombieProcesses");

    m.writeProperty("obj20", "totalProcesses");

    m.push(false);

    m.writeProperty("obj1", "proc");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("bucket");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("bucket");

    m.readVar("bucket");

    m.push(false);

    m.writeProperty("obj21", "openedCount");

    m.push(false);

    m.writeProperty("obj1", "users");

    m.readVar("module");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeProperty("obj22", "exports");

    m.writeVar("nodeosutils");

    m.readVar("nodeosutils");

    m.readProperty("obj1", "exec");

    m.writeVar("exec");

    m.readVar("exec");

    m.readVar("command");

    m.functionCall("exec", 1, 1);

    m.initVar("command");

    m.initVar("self");

    m.writeVar("self");

    m.push(false);

    m.functionCall("", 0, 0);

    m.readVar("Promise");

    m.push(false);

    m.functionCall("Promise", 1, 1);

    m.initVar("resolve");

    m.readVar("cp");

    m.readProperty("obj23", "exec");

    m.readVar("command");

    m.push(false);

    m.writeProperty("obj24", "shell");

    m.push(false);

    m.push(false);

    m.functionCall("exec", 0, 3);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj25", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("err");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("err");

    m.readVar("stdout");

    m.unaryOp();

    m.readVar("resolve");

    m.readVar("module");

    m.readProperty("obj2", "exports");

    m.readProperty("obj1", "options");

    m.readProperty("obj0", "NOT_SUPPORTED_VALUE");

    m.functionCall("", 1, 1);

    m.endExecution();

};

