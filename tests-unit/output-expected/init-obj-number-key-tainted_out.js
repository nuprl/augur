exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[4,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[4,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"b"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[4,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,15],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,23],"end":[2,24]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,31],"end":[2,32]}},"name":"a"});

    m.writeProperty("obj0", "y", {});

    m.writeProperty("obj0", "x", {});

    m.writeProperty("obj0", "2", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,33]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,33]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,33]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,10]}},"name":"b"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,14]}}});

    m.readProperty("obj0", "2", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,15]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,15]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,15]}}});

    m.endExecution();

};

