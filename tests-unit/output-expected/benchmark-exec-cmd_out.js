exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[1,1],"end":[32,3]}}});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[1,1],"end":[32,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"DUMMY_FILE"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"command"});

    m.initVar("exec", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[1,2],"end":[32,2]}},"name":"exec"});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[11,1],"end":[13,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[11,1],"end":[13,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[6,18],"end":[6,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[6,5],"end":[6,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[6,5],"end":[6,26]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[8,15],"end":[8,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[8,15],"end":[8,38]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[8,41],"end":[8,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[8,15],"end":[8,44]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[8,5],"end":[8,43]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[8,5],"end":[8,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[15,1],"end":[15,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[15,13],"end":[15,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[11,1],"end":[13,2]}},"name":"val"});

    m.readVar("command", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[12,5],"end":[12,12]}},"name":"command"});

    m.readVar("val", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[12,16],"end":[12,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[12,5],"end":[12,12]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[12,5],"end":[12,19]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[12,5],"end":[12,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[15,1],"end":[15,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[17,12],"end":[17,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[17,20],"end":[17,35]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[17,12],"end":[17,36]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[17,12],"end":[17,36]}},"name":"require"});

    m.readProperty("obj0", "exec", {"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[17,12],"end":[17,41]}}});

    m.writeVar("exec", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[17,5],"end":[17,41]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[17,5],"end":[17,41]}}});

    m.readVar("exec", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[20,1],"end":[20,5]}},"name":"exec"});

    m.readVar("command", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[20,6],"end":[20,13]}},"name":"command"});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[20,15],"end":[28,2]}}});

    m.functionCall("exec", 3, 2, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[20,1],"end":[28,3]}},"name":"exec"});

    m.functionReturn("exec", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[20,1],"end":[28,3]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[20,1],"end":[28,3]}}});

    m.initVar("error", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[20,15],"end":[28,2]}},"name":"error"});

    m.initVar("stdout", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[20,15],"end":[28,2]}},"name":"stdout"});

    m.initVar("stderr", {"type":"declaration","location":{"fileName":"exec-cmd.js","pos":{"start":[20,15],"end":[28,2]}},"name":"stderr"});

    m.readVar("error", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[21,9],"end":[21,14]}},"name":"error"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[21,5],"end":[24,6]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[25,5],"end":[25,12]}},"name":"console"});

    m.readProperty("obj1", "log", {"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[25,5],"end":[25,16]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[25,17],"end":[25,26]}}});

    m.readVar("stdout", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[25,29],"end":[25,35]}},"name":"stdout"});

    m.functionCall("bound log", 0, 2, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[25,5],"end":[25,36]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[25,5],"end":[25,36]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[25,5],"end":[25,36]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[26,5],"end":[26,12]}},"name":"console"});

    m.readProperty("obj1", "log", {"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[26,5],"end":[26,16]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[26,17],"end":[26,26]}}});

    m.readVar("stderr", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[26,28],"end":[26,34]}},"name":"stderr"});

    m.functionCall("bound log", 0, 2, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[26,5],"end":[26,35]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[26,5],"end":[26,35]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[26,5],"end":[26,35]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[27,5],"end":[27,9]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[27,5],"end":[27,11]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"exec-cmd.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj1", "log", {"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"exec-cmd.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"exec-cmd.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"exec-cmd.js","pos":{"start":[27,5],"end":[27,11]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"exec-cmd.js","pos":{"start":[27,5],"end":[27,11]}}});

    m.endExecution();

};

