exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[3,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[3,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[3,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,18],"end":[2,19]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,24],"end":[2,25]}}});

    m.writeProperty("obj0", "z", {});

    m.writeProperty("obj0", "b", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,13],"end":[2,27]}}});

    m.readProperty("obj0", "z", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,8]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,8]}},"name":"z"});

    m.endExecution();

};

