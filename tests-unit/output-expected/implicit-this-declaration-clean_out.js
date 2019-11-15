exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"__dirname"}]);

    m.initVar(["global^Square", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"Square"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"z"}]);

    m.initVar(["global^s", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"s"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.writeVar(["global^Square", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"Square"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,10]}}}]);

    m.readVar(["global^Square", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,13],"end":[13,19]}},"name":"Square"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,20],"end":[13,22]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,24],"end":[13,25]}},"name":"a"}]);

    m.functionInvokeStart(["global@3", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,9],"end":[13,26]}},"name":"Square"}]);

    m.initVar(["global@3#4^width", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"width"}]);

    m.initVar(["global@3#4^height", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"height"}]);

    m.initVar(["global@3#4^doIExist", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"doIExist"}]);

    m.functionEnter(["global@3", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.readVar(["global@3#4^height", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,20],"end":[10,26]}},"name":"height"}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,36],"end":[10,40]}},"name":"this"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,31],"end":[10,41]}},"name":"z"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,20],"end":[10,41]}}}]);

    m.writeVar(["global@3#4^doIExist", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,41]}},"name":"doIExist"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,41]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,9],"end":[13,26]}},"name":"Square"}]);

    m.writeVar(["global^s", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,26]}},"name":"s"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,26]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}}}]);

    m.endExecution([]);

};

