exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"a"}]);

    m.initVar(["global^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"b"}]);

    m.initVar(["global^numbers", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"numbers"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,11],"end":[2,12]}}}]);

    m.writeVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,12]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,12]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,18],"end":[3,19]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,21],"end":[3,22]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,24],"end":[3,25]}}}]);

    m.readVar(["global^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,27],"end":[3,28]}},"name":"b"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,30],"end":[3,32]}}}]);

    m.writeProperty(["obj0", "4", {}]);

    m.writeProperty(["obj0", "3", {}]);

    m.writeProperty(["obj0", "2", {}]);

    m.writeProperty(["obj0", "1", {}]);

    m.writeProperty(["obj0", "0", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,17],"end":[3,33]}}}]);

    m.writeVar(["global^numbers", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,33]}},"name":"numbers"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,33]}}}]);

    m.readVar(["global^numbers", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,18]}},"name":"numbers"}]);

    m.readProperty(["obj0", "reduce", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,25]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.builtin(["global@3", 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,42]}},"name":"reduce"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"}]);

    m.functionEnter(["global@3#4@5", 4, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"}]);

    m.readVar(["global@3#4^y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}}]);

    m.functionReturn(["global@3#4@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.functionExit(["global@3#4@5", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"}]);

    m.functionEnter(["global@3#4@5", 4, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"}]);

    m.readVar(["global@3#4^y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}}]);

    m.functionReturn(["global@3#4@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.functionExit(["global@3#4@5", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"}]);

    m.functionEnter(["global@3#4@5", 4, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"}]);

    m.readVar(["global@3#4^y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}}]);

    m.functionReturn(["global@3#4@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.functionExit(["global@3#4@5", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"}]);

    m.functionEnter(["global@3#4@5", 4, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"}]);

    m.readVar(["global@3#4^y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}}]);

    m.functionReturn(["global@3#4@5", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.functionExit(["global@3#4@5", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}}]);

    m.builtinExit(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,42]}},"name":"reduce"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,42]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,42]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}}}]);

    m.endExecution([]);

};

