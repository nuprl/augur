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

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"}]);

    m.initVar(["global^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"b"}]);

    m.initVar(["global^c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"c"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,11]}}}]);

    m.writeVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,11]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,11]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}},"name":"b"}]);

    m.writeVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"c"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,2]}},"name":"b"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,11],"end":[6,12]}},"name":"a"}]);

    m.writeProperty(["obj0", "field", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,12]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,12]}}}]);

    m.readVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,10]}},"name":"c"}]);

    m.readProperty(["obj0", "field", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,16]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,16]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,16]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.endExecution([]);

};

