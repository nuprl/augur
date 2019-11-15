exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"}]);

    m.initVar(["global^identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"identity"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.writeVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"identity"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.readVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,17]}},"name":"identity"}]);

    m.readVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,26]}},"name":"identity"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,27],"end":[7,28]}}}]);

    m.functionInvokeStart(["global@3", 2, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,29]}},"name":"identity"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,29]}},"name":"identity"}]);

    m.readVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,39]}},"name":"identity"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,40],"end":[7,41]}},"name":"a"}]);

    m.functionInvokeStart(["global@3", 2, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,42]}},"name":"identity"}]);

    m.initVar(["global@3#6^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.initVar(["global@3#6^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.readVar(["global@3#6^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,42]}},"name":"identity"}]);

    m.functionInvokeStart(["global@3", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,43]}},"name":"identity"}]);

    m.initVar(["global@3#8^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.initVar(["global@3#8^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"}]);

    m.functionEnter(["global@3", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.readVar(["global@3#8^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,43]}},"name":"identity"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,43]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,43]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.endExecution([]);

};

