exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[17,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[17,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[17,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[17,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"__dirname"}]);

    m.initVar(["global^returnUntainted", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"returnUntainted"}]);

    m.initVar(["global^returnTainted", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"returnTainted"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[8,2]}}}]);

    m.writeVar(["global^returnUntainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[8,2]}},"name":"returnUntainted"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.writeVar(["global^returnTainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[12,2]}},"name":"returnTainted"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}}]);

    m.readVar(["global^returnUntainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,16]}},"name":"returnUntainted"}]);

    m.functionInvokeStart(["global@3", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,18]}},"name":"returnUntainted"}]);

    m.functionEnter(["global@3", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[8,2]}}}]);

    m.readVar(["global^returnTainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,23],"end":[6,36]}},"name":"returnTainted"}]);

    m.writeVar(["global^returnUntainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,36]}},"name":"returnUntainted"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,36]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,12],"end":[7,13]}}}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,14]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[8,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,18]}},"name":"returnUntainted"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,18]}}}]);

    m.readVar(["global^returnUntainted", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,20]}},"name":"returnUntainted"}]);

    m.functionInvokeStart(["global@6", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,22]}},"name":"returnTainted"}]);

    m.functionEnter(["global@6", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.readVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[11,12],"end":[11,13]}},"name":"z"}]);

    m.functionReturn(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,14]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[12,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,14]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,22]}},"name":"returnTainted"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,1],"end":[15,22]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,1],"end":[15,22]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[17,2]}}}]);

    m.endExecution([]);

};

