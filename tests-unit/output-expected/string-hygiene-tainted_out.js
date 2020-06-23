exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[13,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"a"}]);

    m.initVar(["global^obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"obj"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,13]}}}]);

    m.writeVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}},"name":"obj"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,4]}},"name":"obj"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}}}]);

    m.readProperty(["obj0", "\"); /* ", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,16]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,16]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,11],"end":[10,12]}},"name":"a"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,7],"end":[10,12]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,7],"end":[10,12]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,4]}},"name":"obj"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,5],"end":[12,14]}}}]);

    m.readProperty(["obj0", " */ // ", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,15]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,15]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[13,2]}}}]);

    m.endExecution([]);

};

