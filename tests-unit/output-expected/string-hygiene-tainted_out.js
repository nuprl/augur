exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"a"});

    m.initVar("obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"obj"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,13]}}});

    m.writeVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}},"name":"obj"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,4]}},"name":"obj"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}}});

    m.readProperty("obj0", "\"); /* ", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,16]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,16]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,11],"end":[10,12]}},"name":"a"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,7],"end":[10,12]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,7],"end":[10,12]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,4]}},"name":"obj"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,5],"end":[12,14]}}});

    m.readProperty("obj0", " */ // ", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,15]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,15]}}});

    m.endExecution();

};

