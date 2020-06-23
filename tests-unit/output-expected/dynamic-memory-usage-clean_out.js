exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[21,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[21,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[21,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[21,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"__dirname"}]);

    m.initVar(["global^buildContainer", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"buildContainer"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"z"}]);

    m.initVar(["global^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}},"name":"x"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.writeVar(["global^buildContainer", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"buildContainer"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}}]);

    m.readVar(["global^buildContainer", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,9],"end":[17,23]}},"name":"buildContainer"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[17,24],"end":[17,25]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[17,9],"end":[17,26]}},"name":"buildContainer"}]);

    m.initVar(["global@3#4^value", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"value"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.readVar(["global@3#4^value", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,20],"end":[5,25]}},"name":"value"}]);

    m.writeProperty(["obj0", "value", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,26]}}}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,27]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,27]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[17,9],"end":[17,26]}},"name":"buildContainer"}]);

    m.writeVar(["global^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,5],"end":[17,26]}},"name":"x"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[17,5],"end":[17,26]}}}]);

    m.readVar(["global^buildContainer", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,1],"end":[18,15]}},"name":"buildContainer"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,16],"end":[18,17]}},"name":"a"}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[18,1],"end":[18,18]}},"name":"buildContainer"}]);

    m.initVar(["global@3#7^value", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"value"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.readVar(["global@3#7^value", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,20],"end":[5,25]}},"name":"value"}]);

    m.writeProperty(["obj1", "value", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,26]}}}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,27]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,27]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[18,1],"end":[18,18]}},"name":"buildContainer"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[18,1],"end":[18,18]}}}]);

    m.readVar(["global^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,5],"end":[19,6]}},"name":"x"}]);

    m.readProperty(["obj0", "value", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,5],"end":[19,12]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,1],"end":[19,12]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,1],"end":[19,12]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[21,2]}}}]);

    m.endExecution([]);

};

