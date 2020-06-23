exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__dirname"}]);

    m.initVar(["global^foo", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"foo"}]);

    m.initVar(["global^bar", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"bar"}]);

    m.initVar(["global^baz", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"baz"}]);

    m.initVar(["global^T", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"T"}]);

    m.initVar(["global^t", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"t"}]);

    m.initVar(["global^i", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"i"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.writeVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"foo"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.writeVar(["global^bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"bar"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.writeVar(["global^baz", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"baz"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}}}]);

    m.writeVar(["global^T", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}},"name":"T"}]);

    m.readVar(["global^T", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,13],"end":[18,14]}},"name":"T"}]);

    m.functionInvokeStart(["global@3", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[18,9],"end":[18,16]}},"name":"T"}]);

    m.functionEnter(["global@3", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,7]}},"name":"this"}]);

    m.readVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,12],"end":[14,15]}},"name":"foo"}]);

    m.writeProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,15]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,15]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,7]}},"name":"this"}]);

    m.readVar(["global^baz", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,12],"end":[15,15]}},"name":"baz"}]);

    m.writeProperty(["obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,15]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,15]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[18,9],"end":[18,16]}},"name":"T"}]);

    m.writeVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,5],"end":[18,16]}},"name":"t"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[18,5],"end":[18,16]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,13],"end":[19,14]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,9],"end":[19,14]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,9],"end":[19,14]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,4]}},"name":"t"}]);

    m.readProperty(["obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,6]}}}]);

    m.functionInvokeStart(["global@6", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"}]);

    m.initVar(["global@6#7^c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"c"}]);

    m.functionEnter(["global@6", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,7]}},"name":"this"}]);

    m.readProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,9]}}}]);

    m.functionInvokeStart(["global@6#7@8", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"foo"}]);

    m.initVar(["global@6#7@8#9^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"a"}]);

    m.functionEnter(["global@6#7@8", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.readVar(["global@6#7@8#9^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}},"name":"a"}]);

    m.functionReturn(["global@6#7@8", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}}]);

    m.functionExit(["global@6#7@8", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}}]);

    m.functionInvokeEnd(["global@6#7@8", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"foo"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,4]}},"name":"t"}]);

    m.readProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,6]}}}]);

    m.functionInvokeStart(["global@6#7@8", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"foo"}]);

    m.initVar(["global@6#7@8#10^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"a"}]);

    m.functionEnter(["global@6#7@8", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.readVar(["global@6#7@8#10^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}},"name":"a"}]);

    m.functionReturn(["global@6#7@8", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}}]);

    m.functionExit(["global@6#7@8", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}}]);

    m.functionInvokeEnd(["global@6#7@8", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"foo"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,4]}},"name":"t"}]);

    m.readVar(["global^bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,9],"end":[22,12]}},"name":"bar"}]);

    m.writeProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,4]}},"name":"t"}]);

    m.readProperty(["obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,6]}}}]);

    m.functionInvokeStart(["global@6", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"}]);

    m.initVar(["global@6#11^c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"c"}]);

    m.functionEnter(["global@6", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,7]}},"name":"this"}]);

    m.readProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,9]}}}]);

    m.functionInvokeStart(["global@6#11@12", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"bar"}]);

    m.initVar(["global@6#11@12#13^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"b"}]);

    m.functionEnter(["global@6#11@12", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.readVar(["global@6#11@12#13^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,10],"end":[6,11]}},"name":"b"}]);

    m.functionReturn(["global@6#11@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}}]);

    m.functionExit(["global@6#11@12", 14, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}}]);

    m.functionInvokeEnd(["global@6#11@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"bar"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,4]}},"name":"t"}]);

    m.readProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,6]}}}]);

    m.functionInvokeStart(["global@6#11@12", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"bar"}]);

    m.initVar(["global@6#11@12#14^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"b"}]);

    m.functionEnter(["global@6#11@12", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.readVar(["global@6#11@12#14^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,10],"end":[6,11]}},"name":"b"}]);

    m.functionReturn(["global@6#11@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}}]);

    m.functionExit(["global@6#11@12", 14, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}}]);

    m.functionInvokeEnd(["global@6#11@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"bar"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}}}]);

    m.readVar(["global^t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,4]}},"name":"t"}]);

    m.readVar(["global^bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,9],"end":[22,12]}},"name":"bar"}]);

    m.writeProperty(["obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.writeVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}}]);

    m.readVar(["global^i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}}}]);

    m.endExecution([]);

};

