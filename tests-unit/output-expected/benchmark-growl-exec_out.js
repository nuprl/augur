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

    m.initVar("growl");

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

    m.initVar("which");

    m.initVar("growl");

    m.initVar("exec");

    m.initVar("fs");

    m.initVar("path");

    m.initVar("exists");

    m.initVar("os");

    m.initVar("quote");

    m.initVar("cmd");

    m.push(false);

    m.writeVar("which");

    m.push(false);

    m.writeVar("growl");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("fs");

    m.readProperty("obj1", "existsSync");

    m.writeVar("exists");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("JSON");

    m.readProperty("obj2", "stringify");

    m.writeVar("quote");

    m.readVar("os");

    m.readProperty("obj3", "type");

    m.functionCall("checkError", 0, 0);

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("which");

    m.push(false);

    m.functionCall("which", 1, 1);

    m.initVar("name");

    m.initVar("paths");

    m.initVar("loc");

    m.initVar("i");

    m.initVar("len");

    m.readVar("process");

    m.readProperty("obj4", "env");

    m.readProperty("obj5", "PATH");

    m.readProperty("obj6", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.writeVar("paths");

    m.push(false);

    m.writeVar("i");

    m.readVar("paths");

    m.readProperty("obj7", "length");

    m.writeVar("len");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 0);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 1);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 2);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 3);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 4);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 5);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 6);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("path");

    m.readProperty("obj8", "join");

    m.readVar("paths");

    m.readVar("i");

    m.readProperty("obj7", 7);

    m.readVar("name");

    m.functionCall("join", 0, 2);

    m.writeVar("loc");

    m.readVar("exists");

    m.readVar("loc");

    m.functionCall("existsSync", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.unaryOp();

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj9", "2");

    m.writeProperty("obj9", "1");

    m.writeProperty("obj9", "0");

    m.push(false);

    m.writeProperty("obj10", "range");

    m.writeProperty("obj10", "cmd");

    m.push(false);

    m.writeProperty("obj11", "priority");

    m.writeProperty("obj11", "icon");

    m.writeProperty("obj11", "sticky");

    m.writeProperty("obj11", "msg");

    m.writeProperty("obj11", "pkg");

    m.writeProperty("obj11", "type");

    m.push(false);

    m.writeVar("cmd");

    m.readVar("module");

    m.readVar("growl");

    m.writeProperty("obj12", "exports");

    m.writeVar("exports");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj13", "version");

    m.writeVar("growl");

    m.readVar("growl");

    m.readVar("payload");

    m.functionCall("growl", 3, 1);

    m.initVar("msg");

    m.initVar("options");

    m.initVar("fn");

    m.initVar("image");

    m.initVar("args");

    m.initVar("flag");

    m.initVar("ext");

    m.initVar("priority");

    m.initVar("checkindexOf");

    m.initVar("stringifiedMsg");

    m.initVar("escapedMsg");

    m.readVar("options");

    m.push(false);

    m.writeVar("options");

    m.readVar("fn");

    m.push(false);

    m.writeVar("fn");

    m.readVar("options");

    m.readProperty("obj14", "exec");

    m.readVar("cmd");

    m.readVar("cmd");

    m.readProperty("obj11", "pkg");

    m.writeProperty("obj15", "0");

    m.push(false);

    m.writeVar("args");

    m.readVar("options");

    m.readProperty("obj14", "image");

    m.writeVar("image");

    m.readVar("options");

    m.readProperty("obj14", "sticky");

    m.readVar("options");

    m.readProperty("obj14", "priority");

    m.readVar("options");

    m.readProperty("obj14", "sound");

    m.readVar("options");

    m.readProperty("obj14", "name");

    m.readVar("cmd");

    m.readProperty("obj11", "type");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("options");

    m.readProperty("obj14", "title");

    m.unaryOp();

    m.readVar("args");

    m.readProperty("obj15", "push");

    m.readVar("quote");

    m.readVar("msg");

    m.functionCall("stringify", 3, 1);

    m.readProperty("obj16", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.functionCall("push", 1, 1);

    m.readVar("exec");

    m.readVar("args");

    m.readProperty("obj15", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.readVar("fn");

    m.functionCall("exec", 0, 2);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.push(false);

    m.endExecution();

};

