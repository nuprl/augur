exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"taint-string.js","pos":{"start":[1,1],"end":[26,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[1,1],"end":[26,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[1,1],"end":[26,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[1,1],"end":[26,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__dirname"}]);

    m.initVar(["global^DUMMY_FILE", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"DUMMY_FILE"}]);

    m.initVar(["global^command", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"command"}]);

    m.initVar(["global^exec", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"exec"}]);

    m.initVar(["global^str", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}},"name":"str"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.writeVar(["global^done", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.readVar(["global^__dirname", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[6,18],"end":[6,27]}},"name":"__dirname"}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[6,30],"end":[6,38]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[6,18],"end":[6,38]}}}]);

    m.writeVar(["global^DUMMY_FILE", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[6,5],"end":[6,37]}},"name":"DUMMY_FILE"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[6,5],"end":[6,37]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[8,15],"end":[8,25]}}}]);

    m.readVar(["global^DUMMY_FILE", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"}]);

    m.binary([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[8,15],"end":[8,38]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[8,41],"end":[8,44]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[8,15],"end":[8,44]}}}]);

    m.writeVar(["global^command", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[8,5],"end":[8,43]}},"name":"command"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[8,5],"end":[8,43]}}}]);

    m.readVar(["global^require", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[10,12],"end":[10,19]}},"name":"require"}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[10,20],"end":[10,35]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[10,12],"end":[10,36]}},"name":"require"}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[10,12],"end":[10,36]}},"name":"require"}]);

    m.readProperty(["obj0", "exec", {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[10,12],"end":[10,41]}}}]);

    m.writeVar(["global^exec", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[10,5],"end":[10,41]}},"name":"exec"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[10,5],"end":[10,41]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[12,11],"end":[12,32]}}}]);

    m.writeVar(["global^str", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[12,5],"end":[12,31]}},"name":"str"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[12,5],"end":[12,31]}}}]);

    m.readVar(["global^exec", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[14,1],"end":[14,5]}},"name":"exec"}]);

    m.readVar(["global^command", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[14,6],"end":[14,13]}},"name":"command"}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}}}]);

    m.functionInvokeStart(["global@7", 3, 2, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[14,1],"end":[22,3]}},"name":"exec"}]);

    m.functionInvokeEnd(["global@7", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[14,1],"end":[22,3]}},"name":"exec"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[14,1],"end":[22,3]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[1,2],"end":[26,2]}}}]);

    m.initVar(["global^error", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}},"name":"error"}]);

    m.initVar(["global^stdout", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}},"name":"stdout"}]);

    m.initVar(["global^stderr", {"type":"declaration","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}},"name":"stderr"}]);

    m.functionEnter(["global@9", 3, {"type":"functionEnter","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}}}]);

    m.readVar(["global^error", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[15,9],"end":[15,14]}},"name":"error"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[15,5],"end":[18,6]}}}]);

    m.readVar(["global^console", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[19,5],"end":[19,12]}},"name":"console"}]);

    m.readProperty(["obj1", "log", {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[19,5],"end":[19,16]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[19,17],"end":[19,26]}}}]);

    m.readVar(["global^stdout", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[19,29],"end":[19,35]}},"name":"stdout"}]);

    m.builtin(["global@11", 0, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[19,5],"end":[19,36]}},"name":"bound log"}]);

    m.builtinExit(["global@11", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[19,5],"end":[19,36]}},"name":"bound log"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[19,5],"end":[19,36]}}}]);

    m.readVar(["global^console", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[20,5],"end":[20,12]}},"name":"console"}]);

    m.readProperty(["obj1", "log", {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[20,5],"end":[20,16]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[20,17],"end":[20,26]}}}]);

    m.readVar(["global^stderr", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[20,28],"end":[20,34]}},"name":"stderr"}]);

    m.builtin(["global@11", 0, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[20,5],"end":[20,35]}},"name":"bound log"}]);

    m.builtinExit(["global@11", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[20,5],"end":[20,35]}},"name":"bound log"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[20,5],"end":[20,35]}}}]);

    m.readVar(["global^done", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[21,5],"end":[21,9]}},"name":"done"}]);

    m.functionInvokeStart(["global@15", 0, 0, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[21,5],"end":[21,11]}},"name":"done"}]);

    m.functionEnter(["global@15", 0, {"type":"functionEnter","location":{"fileName":"taint-string.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.readVar(["global^console", {"type":"variable","location":{"fileName":"taint-string.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"}]);

    m.readProperty(["obj1", "log", {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[2,5],"end":[2,16]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"taint-string.js","pos":{"start":[2,17],"end":[2,24]}}}]);

    m.builtin(["global@11", 0, {"type":"functionInvocation","location":{"fileName":"taint-string.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"}]);

    m.builtinExit(["global@11", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[2,5],"end":[2,25]}}}]);

    m.functionExit(["global@15", 9, {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[1,69],"end":[3,2]}}}]);

    m.functionInvokeEnd(["global@15", {"type":"functionReturn","location":{"fileName":"taint-string.js","pos":{"start":[21,5],"end":[21,11]}},"name":"done"}]);

    m.pop([{"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[21,5],"end":[21,11]}}}]);

    m.functionExit(["global@9", 8, {"type":"expr","location":{"fileName":"taint-string.js","pos":{"start":[14,15],"end":[22,2]}}}]);

    m.endExecution([]);

};

