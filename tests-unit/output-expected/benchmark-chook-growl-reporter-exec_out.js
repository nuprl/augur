exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("DUMMY_FILE");

    m.initVar("payload");

    m.initVar("reporter");

    m.initVar("obj");

    m.initVar("events");

    m.initVar("eventEmitter");

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

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("growl");

    m.initVar("growlTitle");

    m.initVar("imageBasePath");

    m.initVar("errorImage");

    m.initVar("successImage");

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

    m.unaryOp();

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj4", "2");

    m.writeProperty("obj4", "1");

    m.writeProperty("obj4", "0");

    m.push(false);

    m.writeProperty("obj5", "range");

    m.writeProperty("obj5", "cmd");

    m.push(false);

    m.writeProperty("obj6", "priority");

    m.writeProperty("obj6", "icon");

    m.writeProperty("obj6", "sticky");

    m.writeProperty("obj6", "msg");

    m.writeProperty("obj6", "pkg");

    m.writeProperty("obj6", "type");

    m.push(false);

    m.writeVar("cmd");

    m.readVar("module");

    m.readVar("growl");

    m.writeProperty("obj7", "exports");

    m.writeVar("exports");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj8", "version");

    m.writeVar("growl");

    m.push(false);

    m.writeProperty("obj9", "title");

    m.push(false);

    m.writeVar("growlTitle");

    m.readVar("__dirname");

    m.push(false);

    m.binaryOp();

    m.writeVar("imageBasePath");

    m.readVar("imageBasePath");

    m.push(false);

    m.binaryOp();

    m.writeVar("errorImage");

    m.readVar("imageBasePath");

    m.push(false);

    m.binaryOp();

    m.writeVar("successImage");

    m.readVar("module");

    m.push(false);

    m.push(false);

    m.writeProperty("obj10", "summary");

    m.writeProperty("obj10", "individualFailureOrError");

    m.push(false);

    m.writeProperty("obj11", "exports");

    m.writeVar("reporter");

    m.readVar("reporter");

    m.readProperty("obj10", "individualFailureOrError");

    m.functionCall("individualFailureOrError", 0, 0);

    m.push(false);

    m.writeProperty("obj12", "reporter");

    m.push(false);

    m.writeVar("obj");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("EventEmitter");

    m.initVar("isFunction");

    m.initVar("isNumber");

    m.initVar("isObject");

    m.initVar("isUndefined");

    m.push(false);

    m.writeVar("EventEmitter");

    m.push(false);

    m.writeVar("isFunction");

    m.push(false);

    m.writeVar("isNumber");

    m.push(false);

    m.writeVar("isObject");

    m.push(false);

    m.writeVar("isUndefined");

    m.readVar("module");

    m.readVar("EventEmitter");

    m.writeProperty("obj13", "exports");

    m.readVar("EventEmitter");

    m.readVar("EventEmitter");

    m.writeProperty("obj14", "EventEmitter");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "_events");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "_maxListeners");

    m.readVar("EventEmitter");

    m.push(false);

    m.writeProperty("obj14", "defaultMaxListeners");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "setMaxListeners");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "emit");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "addListener");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.readProperty("obj15", "addListener");

    m.writeProperty("obj15", "on");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "once");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "removeListener");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "removeAllListeners");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "listeners");

    m.readVar("EventEmitter");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "listenerCount");

    m.readVar("EventEmitter");

    m.push(false);

    m.writeProperty("obj14", "listenerCount");

    m.writeVar("events");

    m.readVar("events");

    m.readProperty("obj14", "EventEmitter");

    m.functionCall("EventEmitter", 0, 0);

    m.readProperty("obj16", "_events");

    m.push(false);

    m.writeProperty("obj16", "_events");

    m.readProperty("obj16", "_maxListeners");

    m.push(false);

    m.writeProperty("obj16", "_maxListeners");

    m.writeVar("eventEmitter");

    m.readVar("obj");

    m.readProperty("obj12", "reporter");

    m.readVar("eventEmitter");

    m.functionCall("reporter", 1, 1);

    m.initVar("e");

    m.initVar("escapeForGrowl");

    m.initVar("growlProblem");

    m.push(false);

    m.writeVar("escapeForGrowl");

    m.push(false);

    m.writeVar("growlProblem");

    m.readVar("e");

    m.readProperty("obj16", "on");

    m.push(false);

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("type");

    m.initVar("listener");

    m.initVar("m");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("isFunction");

    m.readVar("listener");

    m.functionCall("isFunction", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.readProperty("obj16", "_events");

    m.readProperty("obj16", "_events");

    m.readProperty("obj18", "newListener");

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readProperty("obj18", "fail");

    m.unaryOp();

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readVar("listener");

    m.writeProperty("obj18", "fail");

    m.readVar("isObject");

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readProperty("obj18", "fail");

    m.functionCall("isObject", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.readVar("e");

    m.readProperty("obj16", "on");

    m.push(false);

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("type");

    m.initVar("listener");

    m.initVar("m");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("isFunction");

    m.readVar("listener");

    m.functionCall("isFunction", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.readProperty("obj16", "_events");

    m.readProperty("obj16", "_events");

    m.readProperty("obj18", "newListener");

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readProperty("obj18", "error");

    m.unaryOp();

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readVar("listener");

    m.writeProperty("obj18", "error");

    m.readVar("isObject");

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readProperty("obj18", "error");

    m.functionCall("isObject", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.readVar("eventEmitter");

    m.readProperty("obj16", "emit");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("payload");

    m.writeProperty("obj19", "message");

    m.writeProperty("obj19", "name");

    m.push(false);

    m.writeProperty("obj20", "error");

    m.writeProperty("obj20", "name");

    m.writeProperty("obj20", "suiteName");

    m.push(false);

    m.functionCall("emit", 1, 2);

    m.initVar("type");

    m.initVar("arguments");

    m.initVar("er");

    m.initVar("handler");

    m.initVar("len");

    m.initVar("args");

    m.initVar("i");

    m.initVar("listeners");

    m.initVar("err");

    m.initVar("xxx");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj16", "_events");

    m.readVar("type");

    m.readProperty("obj18", "fail");

    m.writeVar("handler");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("isUndefined");

    m.readVar("handler");

    m.functionCall("isUndefined", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.push(false);

    m.binaryOp();

    m.readVar("arguments");

    m.push(false);

    m.readProperty("obj21", 1);

    m.readProperty("obj20", "error");

    m.readProperty("obj19", "message");

    m.writeVar("xxx");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("xxx");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("isFunction");

    m.readVar("handler");

    m.functionCall("isFunction", 1, 1);

    m.initVar("arg");

    m.readVar("arg");

    m.readVar("arguments");

    m.readProperty("obj21", "length");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("handler");

    m.readProperty("obj22", "call");

    m.readVar("arguments");

    m.push(false);

    m.readProperty("obj21", 1);

    m.functionCall("call", 1, 2);

    m.initVar("msg");

    m.initVar("yyy");

    m.readVar("msg");

    m.readProperty("obj20", "error");

    m.readProperty("obj19", "message");

    m.writeVar("yyy");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("yyy");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("growlProblem");

    m.push(false);

    m.readVar("msg");

    m.functionCall("growlProblem", 2, 2);

    m.initVar("type");

    m.initVar("msg");

    m.initVar("title");

    m.initVar("message");

    m.initVar("zzz");

    m.initVar("mmm");

    m.readVar("msg");

    m.readProperty("obj20", "suiteName");

    m.push(false);

    m.binaryOp();

    m.writeVar("title");

    m.readVar("msg");

    m.readProperty("obj20", "name");

    m.push(false);

    m.binaryOp();

    m.readVar("msg");

    m.readProperty("obj20", "error");

    m.readProperty("obj19", "name");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("msg");

    m.readProperty("obj20", "error");

    m.readProperty("obj19", "message");

    m.binaryOp();

    m.writeVar("message");

    m.readVar("msg");

    m.readProperty("obj20", "error");

    m.readProperty("obj19", "message");

    m.writeVar("zzz");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("zzz");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("escapeForGrowl");

    m.readVar("message");

    m.functionCall("escapeForGrowl", 1, 1);

    m.initVar("text");

    m.initVar("escaped");

    m.readVar("text");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.writeVar("mmm");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("mmm");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("growl");

    m.readVar("escapeForGrowl");

    m.readVar("message");

    m.functionCall("escapeForGrowl", 1, 1);

    m.initVar("text");

    m.initVar("escaped");

    m.readVar("text");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj23", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readVar("escapeForGrowl");

    m.readVar("title");

    m.functionCall("escapeForGrowl", 1, 1);

    m.initVar("text");

    m.initVar("escaped");

    m.readVar("text");

    m.readProperty("obj24", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj24", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.readProperty("obj24", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("escaped");

    m.readVar("escaped");

    m.writeProperty("obj25", "title");

    m.push(false);

    m.push(false);

    m.functionCall("growl", 3, 3);

    m.initVar("msg");

    m.initVar("options");

    m.initVar("fn");

    m.initVar("nnn");

    m.initVar("image");

    m.initVar("args");

    m.initVar("flag");

    m.initVar("ext");

    m.initVar("priority");

    m.initVar("checkindexOf");

    m.initVar("str");

    m.readVar("msg");

    m.writeVar("nnn");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("nnn");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("options");

    m.writeVar("options");

    m.readVar("fn");

    m.push(false);

    m.writeVar("fn");

    m.readVar("cmd");

    m.readVar("cmd");

    m.readProperty("obj6", "pkg");

    m.writeProperty("obj26", "0");

    m.push(false);

    m.writeVar("args");

    m.readVar("options");

    m.readProperty("obj25", "image");

    m.writeVar("image");

    m.readVar("options");

    m.readProperty("obj25", "sticky");

    m.readVar("options");

    m.readProperty("obj25", "priority");

    m.readVar("options");

    m.readProperty("obj25", "name");

    m.readVar("cmd");

    m.readProperty("obj6", "type");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("options");

    m.readProperty("obj25", "title");

    m.readVar("args");

    m.readProperty("obj26", "push");

    m.readVar("quote");

    m.readVar("options");

    m.readProperty("obj25", "title");

    m.functionCall("stringify", 3, 1);

    m.functionCall("push", 1, 1);

    m.readVar("args");

    m.readProperty("obj26", "push");

    m.readVar("cmd");

    m.readProperty("obj6", "msg");

    m.functionCall("push", 1, 1);

    m.readVar("args");

    m.readProperty("obj26", "push");

    m.readVar("quote");

    m.readVar("msg");

    m.functionCall("stringify", 3, 1);

    m.functionCall("push", 1, 1);

    m.readVar("args");

    m.readProperty("obj26", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("str");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("str");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.push(false);

    m.readVar("fn");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("exec");

    m.readVar("args");

    m.readProperty("obj26", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.readVar("fn");

    m.functionCall("exec", 0, 2);

    m.push(false);

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

