exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[30,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[30,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[30,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[30,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"__dirname"}]);

    m.initVar(["global^LinkedList", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"LinkedList"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"z"}]);

    m.initVar(["global^list", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"list"}]);

    m.initVar(["global^list2", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"list2"}]);

    m.initVar(["global^cur", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}},"name":"cur"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}}}]);

    m.readVar(["global^require", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,83],"end":[1,90]}},"name":"require"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,91],"end":[1,105]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[1,83],"end":[1,106]}},"name":"require"}]);

    m.functionEnter(["global@3#4@5", 0, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,1],"end":[25,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"linkedList.js","pos":{"start":[1,1],"end":[25,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,1],"end":[25,3]}}}]);

    m.functionExit(["global@3#4@5", 12, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,1],"end":[25,4]}}}]);

    m.initVar(["global@3#4^exports", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"exports"}]);

    m.initVar(["global@3#4^require", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"require"}]);

    m.initVar(["global@3#4^module", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"module"}]);

    m.initVar(["global@3#4^__filename", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__filename"}]);

    m.initVar(["global@3#4^__dirname", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__dirname"}]);

    m.initVar(["global@3#4^LinkedList", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}},"name":"LinkedList"}]);

    m.functionEnter(["global@3#4@6", 5, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}}}]);

    m.initVar(["global@3#4^LinkedList", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"LinkedList"}]);

    m.literal([{"type":"literal","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^Symbol", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[14,7],"end":[14,13]}},"name":"Symbol"}]);

    m.readProperty(["obj0", "iterator", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[14,7],"end":[14,22]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"linkedList.js","pos":{"start":[14,5],"end":[20,6]}}}]);

    m.readVar(["global@3#4^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[1,68],"end":[1,78]}},"name":"LinkedList"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,68],"end":[1,78]}}}]);

    m.writeVar(["global@3#4^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"LinkedList"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global@3#4^exports", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[23,1],"end":[23,8]}},"name":"exports"}]);

    m.readVar(["global@3#4^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[23,22],"end":[23,32]}},"name":"LinkedList"}]);

    m.writeProperty(["obj1", "LinkedList", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[23,1],"end":[23,32]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[23,1],"end":[23,32]}}}]);

    m.functionExit(["global@3#4@6", 12, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,2],"end":[25,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[1,83],"end":[1,106]}},"name":"require"}]);

    m.readProperty(["obj1", "LinkedList", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,78]}}}]);

    m.writeVar(["global^LinkedList", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,78]}},"name":"LinkedList"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,12]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,12]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,12]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,16],"end":[6,26]}},"name":"LinkedList"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[6,27],"end":[6,28]}}}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[6,12],"end":[6,29]}},"name":"LinkedList"}]);

    m.initVar(["global@10#11^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#11^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj2", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[6,12],"end":[6,29]}},"name":"LinkedList"}]);

    m.writeVar(["global^list", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,29]}},"name":"list"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,29]}}}]);

    m.readVar(["global^list", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,5]}},"name":"list"}]);

    m.readProperty(["obj2", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,12]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,13],"end":[7,14]}}}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,15]}},"name":"append"}]);

    m.initVar(["global@13#14^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#14^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#16^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#16^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj3", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,15]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,15]}}}]);

    m.readVar(["global^list", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,5]}},"name":"list"}]);

    m.readProperty(["obj2", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,12]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[8,13],"end":[8,14]}}}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,15]}},"name":"append"}]);

    m.initVar(["global@13#18^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj3", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#18^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#19^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj3", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#19^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#21^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#21^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj4", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj3", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,15]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,15]}}}]);

    m.readVar(["global^list", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,5]}},"name":"list"}]);

    m.readProperty(["obj2", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,12]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,13],"end":[9,14]}},"name":"a"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,15]}},"name":"append"}]);

    m.initVar(["global@13#23^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj2", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj3", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#23^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#24^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj3", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj3", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj4", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#24^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#25^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj4", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#25^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#27^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#27^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj5", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj4", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,15]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,15]}}}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[11,17],"end":[11,27]}},"name":"LinkedList"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[11,28],"end":[11,29]}}}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[11,13],"end":[11,30]}},"name":"LinkedList"}]);

    m.initVar(["global@10#30^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#30^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj6", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[11,13],"end":[11,30]}},"name":"LinkedList"}]);

    m.writeVar(["global^list2", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,30]}},"name":"list2"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,30]}}}]);

    m.readVar(["global^list2", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,6]}},"name":"list2"}]);

    m.readProperty(["obj6", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,14],"end":[12,15]}}}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,16]}},"name":"append"}]);

    m.initVar(["global@13#32^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#32^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#34^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#34^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj7", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,16]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,16]}}}]);

    m.readVar(["global^list2", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[13,6]}},"name":"list2"}]);

    m.readProperty(["obj6", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[13,13]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,14],"end":[13,15]}}}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[13,16]}},"name":"append"}]);

    m.initVar(["global@13#36^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj7", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#36^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#37^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj7", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#37^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#39^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#39^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj8", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj7", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[13,16]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[13,16]}}}]);

    m.readVar(["global^list2", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,6]}},"name":"list2"}]);

    m.readProperty(["obj6", "append", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,13]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[14,14],"end":[14,15]}}}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,16]}},"name":"append"}]);

    m.initVar(["global@13#41^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj7", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#41^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#42^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj7", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,17]}},"name":"this"}]);

    m.readProperty(["obj7", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,22]}}}]);

    m.readProperty(["obj8", "append", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,29]}}}]);

    m.readVar(["global@13#42^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[8,30],"end":[8,31]}},"name":"v"}]);

    m.functionInvokeStart(["global@13", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.initVar(["global@13#43^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}},"name":"v"}]);

    m.functionEnter(["global@13", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,17]}},"name":"this"}]);

    m.readProperty(["obj8", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,13],"end":[7,22]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,17]}},"name":"this"}]);

    m.readVar(["global^LinkedList", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,29],"end":[10,39]}},"name":"LinkedList"}]);

    m.readVar(["global@13#43^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[10,40],"end":[10,41]}},"name":"v"}]);

    m.functionInvokeStart(["global@10", 1, 1, {"type":"functionInvocation","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.initVar(["global@10#45^v", {"type":"declaration","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}},"name":"v"}]);

    m.functionEnter(["global@10", 1, {"type":"functionEnter","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,13]}},"name":"this"}]);

    m.readVar(["global@10#45^v", {"type":"variable","location":{"fileName":"linkedList.js","pos":{"start":[3,22],"end":[3,23]}},"name":"v"}]);

    m.writeProperty(["obj9", "value", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[3,9],"end":[3,23]}}}]);

    m.functionExit(["global@10", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[1,62],"end":[21,2]}}}]);

    m.functionInvokeEnd(["global@10", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[10,25],"end":[10,42]}},"name":"LinkedList"}]);

    m.writeProperty(["obj8", "next", {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[10,13],"end":[10,42]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[8,13],"end":[8,32]}}}]);

    m.functionExit(["global@13", 9, {"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[6,5],"end":[12,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"linkedList.js","pos":{"start":[7,9],"end":[11,10]}}}]);

    m.functionInvokeEnd(["global@13", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,16]}},"name":"append"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[14,16]}}}]);

    m.readVar(["global^list2", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,11],"end":[24,16]}},"name":"list2"}]);

    m.writeVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,16]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,16]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}}}]);

    m.readVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}},"name":"z"}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,13]}},"name":"cur"}]);

    m.readProperty(["obj6", "value", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,19]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,14]}},"name":"cur"}]);

    m.readProperty(["obj6", "next", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,19]}}}]);

    m.writeVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}}}]);

    m.readVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}},"name":"z"}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,13]}},"name":"cur"}]);

    m.readProperty(["obj7", "value", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,19]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,14]}},"name":"cur"}]);

    m.readProperty(["obj7", "next", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,19]}}}]);

    m.writeVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}}}]);

    m.readVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}},"name":"z"}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,13]}},"name":"cur"}]);

    m.readProperty(["obj8", "value", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,19]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,14]}},"name":"cur"}]);

    m.readProperty(["obj8", "next", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,19]}}}]);

    m.writeVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}}}]);

    m.readVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}},"name":"z"}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,13]}},"name":"cur"}]);

    m.readProperty(["obj9", "value", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,10],"end":[26,19]}}}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,6]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[26,5],"end":[26,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,14]}},"name":"cur"}]);

    m.readProperty(["obj9", "next", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,11],"end":[27,19]}}}]);

    m.writeVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[27,5],"end":[27,19]}}}]);

    m.readVar(["global^cur", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}},"name":"cur"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[25,8],"end":[25,11]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[30,2]}}}]);

    m.endExecution([]);

};

