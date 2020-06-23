exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"}]);

    m.initVar(["global^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"b"}]);

    m.initVar(["global^c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"c"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"z"}]);

    m.initVar(["global^i", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"i"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,13],"end":[2,14]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,16],"end":[2,17]}},"name":"a"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,19],"end":[2,20]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,22],"end":[2,23]}}}]);

    m.writeProperty(["obj0", "4", {}]);

    m.writeProperty(["obj0", "3", {}]);

    m.writeProperty(["obj0", "2", {}]);

    m.writeProperty(["obj0", "1", {}]);

    m.writeProperty(["obj0", "0", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,24]}}}]);

    m.writeVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,24]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,24]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,10]}}}]);

    m.writeVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}},"name":"c"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,14],"end":[5,15]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,15]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,15]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,18]}},"name":"i"}]);

    m.readVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,21],"end":[5,22]}},"name":"c"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}},"name":"b"}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,11],"end":[6,12]}},"name":"i"}]);

    m.readProperty(["obj0", 0, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,13]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,13]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,13]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,18]}},"name":"i"}]);

    m.readVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,21],"end":[5,22]}},"name":"c"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}},"name":"b"}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,11],"end":[6,12]}},"name":"i"}]);

    m.readProperty(["obj0", 1, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,13]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,13]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,13]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,27]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,18]}},"name":"i"}]);

    m.readVar(["global^c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,21],"end":[5,22]}},"name":"c"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,17],"end":[5,22]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.endExecution([]);

};

