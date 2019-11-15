exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"a"}]);

    m.initVar(["global^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"b"}]);

    m.initVar(["global^c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"c"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}}]);

    m.writeVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,13]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,16],"end":[3,17]}},"name":"b"}]);

    m.writeVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,21]}},"name":"c"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,21]}}}]);

    m.readVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}},"name":"c"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}}}]);

    m.endExecution([]);

};

