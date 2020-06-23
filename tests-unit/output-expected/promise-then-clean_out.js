exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"}]);

    m.initVar(["global^identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"identity"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.writeVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"identity"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.readVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,9]}},"name":"identity"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,10],"end":[7,11]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,12]}},"name":"identity"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.readVar(["global^Promise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,16],"end":[4,23]}},"name":"Promise"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}}}]);

    m.builtin(["global@3#4@6", 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,48]}},"name":"Promise"}]);

    m.initVar(["global@3#4@6#7^resolve", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}},"name":"resolve"}]);

    m.functionEnter(["global@3#4@6#7@8", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}}}]);

    m.readVar(["global@3#4@6#7^resolve", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,44]}},"name":"resolve"}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,45],"end":[4,46]}},"name":"x"}]);

    m.builtin(["global@3#4@6#7@10", 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}}]);

    m.builtinExit(["global@3#4@6#7@10", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}}]);

    m.functionReturn(["global@3#4@6#7@8", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}}]);

    m.functionExit(["global@3#4@6#7@8", 16, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}}]);

    m.builtinExit(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,48]}},"name":"Promise"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,49]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,49]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,12]}},"name":"identity"}]);

    m.readProperty(["obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}}}]);

    m.builtin(["global@13", 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}},"name":"then"}]);

    m.builtinExit(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}},"name":"then"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.initVar(["global^v", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}},"name":"v"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}},"name":"z"}]);

    m.functionEnter(["global@15", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}}}]);

    m.readVar(["global^v", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,15],"end":[8,16]}},"name":"v"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,16]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,16]}}}]);

    m.functionExit(["global@15", 9, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}}}]);

    m.endExecution([]);

};

