exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[19,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[19,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[19,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[19,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__dirname"}]);

    m.initVar(["global^o1", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"o1"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"a"}]);

    m.initVar(["global^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"b"}]);

    m.initVar(["global^sum", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"sum"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[6,14]}}}]);

    m.writeProperty(["obj0", "o4", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[7,10]}}}]);

    m.writeProperty(["obj1", "o3", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[8,6]}}}]);

    m.writeProperty(["obj2", "o2", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,71],"end":[9,2]}}}]);

    m.writeVar(["global^o1", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[9,2]}},"name":"o1"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[9,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[11,9],"end":[11,10]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,10]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,9],"end":[12,11]}}}]);

    m.writeVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,5],"end":[12,11]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,5],"end":[12,11]}}}]);

    m.readVar(["global^o1", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,13]}},"name":"o1"}]);

    m.readProperty(["obj2", "o2", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,16]}}}]);

    m.readProperty(["obj1", "o3", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,19]}}}]);

    m.readProperty(["obj0", "o4", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,22]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[14,23],"end":[14,26]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,28],"end":[14,29]}},"name":"b"}]);

    m.functionInvokeStart(["global@5", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,30]}},"name":"o4"}]);

    m.initVar(["global@5#6^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[6,14]}},"name":"x"}]);

    m.initVar(["global@5#6^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[6,14]}},"name":"y"}]);

    m.functionEnter(["global@5", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[6,14]}}}]);

    m.readVar(["global@5#6^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,25]}},"name":"x"}]);

    m.readVar(["global@5#6^y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,28],"end":[5,29]}},"name":"y"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,29]}}}]);

    m.functionReturn(["global@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,30]}}}]);

    m.functionExit(["global@5", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[6,14]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,30]}}}]);

    m.functionInvokeEnd(["global@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,30]}},"name":"o4"}]);

    m.writeVar(["global^sum", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,5],"end":[14,30]}},"name":"sum"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,5],"end":[14,30]}}}]);

    m.readVar(["global^sum", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[16,9],"end":[16,12]}},"name":"sum"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[16,5],"end":[16,12]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[16,5],"end":[16,12]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[19,2]}}}]);

    m.endExecution([]);

};

