exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,1],"end":[27,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__dirname"}]);

    m.initVar(["global^dummySource", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"dummySource"}]);

    m.initVar(["global^content", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}},"name":"content"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.writeVar(["global^dummySource", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}},"name":"dummySource"}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.writeVar(["global^done", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[6,15],"end":[6,30]}}}]);

    m.writeVar(["global^content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[6,5],"end":[6,29]}},"name":"content"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[6,5],"end":[6,29]}}}]);

    m.readVar(["global^require", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,13]}},"name":"require"}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[8,14],"end":[8,18]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,19]}},"name":"require"}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[8,6],"end":[8,19]}},"name":"require"}]);

    m.writeVar(["global^fs", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[8,1],"end":[8,19]}},"name":"fs"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[8,1],"end":[8,19]}}}]);

    m.readVar(["global^dummySource", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,12]}},"name":"dummySource"}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[14,13],"end":[14,16]}}}]);

    m.functionInvokeStart(["global@6", 1, 1, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"}]);

    m.initVar(["global@6#7^val", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}},"name":"val"}]);

    m.functionEnter(["global@6", 1, {"type":"functionEnter","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.readVar(["global^content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,12]}},"name":"content"}]);

    m.readVar(["global@6#7^val", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,16],"end":[11,19]}},"name":"val"}]);

    m.binary([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,12]}}}]);

    m.writeVar(["global^content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,19]}},"name":"content"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[11,5],"end":[11,19]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[14,1],"end":[14,17]}}}]);

    m.readVar(["global^fs", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[16,3]}},"name":"fs"}]);

    m.readProperty(["obj0", "writeFile", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[16,13]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[16,14],"end":[16,30]}}}]);

    m.readVar(["global^content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[16,32],"end":[16,39]}},"name":"content"}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}}}]);

    m.functionInvokeStart(["global@9", 4, 3, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}},"name":"writeFile"}]);

    m.functionInvokeEnd(["global@9", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}},"name":"writeFile"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[16,1],"end":[20,3]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,2],"end":[27,2]}}}]);

    m.initVar(["global^err", {"type":"declaration","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}},"name":"err"}]);

    m.functionEnter(["global@11", 1, {"type":"functionEnter","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}}}]);

    m.readVar(["global^err", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[17,9],"end":[17,12]}},"name":"err"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[17,5],"end":[17,38]}}}]);

    m.readVar(["global^console", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,12]}},"name":"console"}]);

    m.readProperty(["obj1", "log", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,16]}}}]);

    m.readVar(["global^content", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[18,18],"end":[18,25]}},"name":"content"}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[18,28],"end":[18,47]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,18],"end":[18,47]}}}]);

    m.builtin(["global@13", 0, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}},"name":"bound log"}]);

    m.builtinExit(["global@13", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}},"name":"bound log"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[18,5],"end":[18,48]}}}]);

    m.readVar(["global^done", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,9]}},"name":"done"}]);

    m.functionInvokeStart(["global@16", 0, 0, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}},"name":"done"}]);

    m.functionEnter(["global@16", 0, {"type":"functionEnter","location":{"fileName":"write-file.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.readVar(["global^console", {"type":"variable","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"}]);

    m.readProperty(["obj1", "log", {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,16]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"write-file.js","pos":{"start":[2,17],"end":[2,24]}}}]);

    m.builtin(["global@13", 0, {"type":"functionInvocation","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"}]);

    m.builtinExit(["global@13", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[2,5],"end":[2,25]}}}]);

    m.functionExit(["global@16", 9, {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.functionInvokeEnd(["global@16", {"type":"functionReturn","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}},"name":"done"}]);

    m.pop([{"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[19,5],"end":[19,11]}}}]);

    m.functionExit(["global@11", 9, {"type":"expr","location":{"fileName":"write-file.js","pos":{"start":[16,41],"end":[20,2]}}}]);

    m.endExecution([]);

};

