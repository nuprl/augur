exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"}]);

    m.initVar(["global^obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"obj"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,13]}}}]);

    m.writeVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}},"name":"obj"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}}}]);

    m.readVar(["global^Object", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,7]}},"name":"Object"}]);

    m.readProperty(["obj0", "defineProperty", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,22]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,23],"end":[5,26]}},"name":"obj"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,28],"end":[5,34]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,44],"end":[5,45]}},"name":"a"}]);

    m.writeProperty(["obj1", "value", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,36],"end":[5,46]}}}]);

    m.builtin(["global@5", 3, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,47]}},"name":"defineProperty"}]);

    m.builtinExit(["global@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,47]}},"name":"defineProperty"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,47]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,12]}},"name":"obj"}]);

    m.readProperty(["obj2", "prop", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,17]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,17]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,17]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}}}]);

    m.endExecution([]);

};

