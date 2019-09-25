exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"b"});

    m.initVar("c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"c"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,11]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,11]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,11]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}},"name":"b"});

    m.writeVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"c"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,2]}},"name":"b"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,11],"end":[6,12]}},"name":"a"});

    m.writeProperty("obj0", "field", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,12]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,1],"end":[6,12]}}});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,10]}},"name":"c"});

    m.readProperty("obj0", "field", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,16]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,16]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,16]}}});

    m.endExecution();

};

