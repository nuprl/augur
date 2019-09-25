exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,3]}}});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"dummySource"});

    m.initVar("content", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"content"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[6,15],"end":[6,30]}}});

    m.writeVar("content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[6,5],"end":[6,29]}},"name":"content"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[6,5],"end":[6,29]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,13]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[8,14],"end":[8,18]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,19]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,19]}},"name":"require"});

    m.writeVar("fs", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[8,1],"end":[8,19]}},"name":"fs"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[8,1],"end":[8,19]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[14,13],"end":[14,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}},"name":"val"});

    m.readVar("content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,12]}},"name":"content"});

    m.readVar("val", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,16],"end":[11,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,12]}}});

    m.writeVar("content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,19]}},"name":"content"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}}});

    m.readVar("fs", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[16,3]}},"name":"fs"});

    m.readProperty("obj0", "writeFile", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[16,13]}}});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[16,14],"end":[16,30]}}});

    m.readVar("content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[16,32],"end":[16,39]}},"name":"content"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}}});

    m.functionCall("writeFile", 4, 3, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}},"name":"writeFile"});

    m.functionReturn("writeFile", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}},"name":"writeFile"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}}});

    m.initVar("err", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}},"name":"err"});

    m.readVar("err", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[17,9],"end":[17,12]}},"name":"err"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[17,5],"end":[17,38]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,12]}},"name":"console"});

    m.readProperty("obj1", "log", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,16]}}});

    m.readVar("content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[18,18],"end":[18,25]}},"name":"content"});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[18,28],"end":[18,47]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,18],"end":[18,47]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,9]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj1", "log", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}}});

    m.endExecution();

};

