exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"b"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"z"});

    m.initVar("k", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"k"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,13],"end":[2,14]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,16],"end":[2,17]}},"name":"a"});

    m.writeProperty("obj0", "2", {});

    m.writeProperty("obj0", "1", {});

    m.writeProperty("obj0", "0", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,18]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,18]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,18]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,10]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,15],"end":[5,16]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,15],"end":[5,16]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}}});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}},"name":"k"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}}});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}},"name":"k"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,11]}}});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}},"name":"k"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}});

    m.endExecution();

};

