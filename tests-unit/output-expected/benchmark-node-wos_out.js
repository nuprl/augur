exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[1,1],"end":[24,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[1,1],"end":[24,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"DUMMY_FILE"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"command"});

    m.initVar("wos", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[1,2],"end":[24,2]}},"name":"wos"});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[11,1],"end":[13,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[11,1],"end":[13,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[6,18],"end":[6,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[6,5],"end":[6,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[6,5],"end":[6,26]}}});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[8,15],"end":[8,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[8,15],"end":[8,38]}}});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[8,41],"end":[8,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[8,15],"end":[8,44]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[8,5],"end":[8,43]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[8,5],"end":[8,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[15,1],"end":[15,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[15,13],"end":[15,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"node-wos.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"node-wos.js","pos":{"start":[11,1],"end":[13,2]}},"name":"val"});

    m.readVar("command", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[12,5],"end":[12,12]}},"name":"command"});

    m.readVar("val", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[12,16],"end":[12,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[12,5],"end":[12,12]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[12,5],"end":[12,19]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[12,5],"end":[12,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"node-wos.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[15,1],"end":[15,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[17,11],"end":[17,18]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node-wos.js","pos":{"start":[17,19],"end":[17,29]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node-wos.js","pos":{"start":[17,11],"end":[17,30]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,1],"end":[228,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,1],"end":[228,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"__dirname"});

    m.initVar("_interopRequireDefault", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_interopRequireDefault"});

    m.initVar("_classCallCheck", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_classCallCheck"});

    m.initVar("getLinuxOperationSystemName", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"getLinuxOperationSystemName"});

    m.initVar("getMacOperationSystemName", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"getMacOperationSystemName"});

    m.initVar("getWindowsOperationSystem", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"getWindowsOperationSystem"});

    m.initVar("_createClass", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_createClass"});

    m.initVar("_os", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_os"});

    m.initVar("_os2", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_os2"});

    m.initVar("_child_process", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"_child_process"});

    m.initVar("NodeWOS", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,2],"end":[228,2]}},"name":"NodeWOS"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,1],"end":[15,96]}}});

    m.writeVar("_interopRequireDefault", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,1],"end":[15,96]}},"name":"_interopRequireDefault"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,1],"end":[17,154]}}});

    m.writeVar("_classCallCheck", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,1],"end":[17,154]}},"name":"_classCallCheck"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}}});

    m.writeVar("getLinuxOperationSystemName", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}},"name":"getLinuxOperationSystemName"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[208,1],"end":[212,2]}}});

    m.writeVar("getMacOperationSystemName", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[208,1],"end":[212,2]}},"name":"getMacOperationSystemName"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[220,1],"end":[224,2]}}});

    m.writeVar("getWindowsOperationSystem", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[220,1],"end":[224,2]}},"name":"getWindowsOperationSystem"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,20],"end":[3,562]}}});

    m.functionCall("", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,20],"end":[3,564]}}});

    m.initVar("defineProperties", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,20],"end":[3,562]}},"name":"defineProperties"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}}});

    m.writeVar("defineProperties", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"defineProperties"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,358],"end":[3,559]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,351],"end":[3,560]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,20],"end":[3,564]}}});

    m.writeVar("_createClass", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,5],"end":[3,564]}},"name":"_createClass"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,5],"end":[3,564]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,1],"end":[5,7]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,1],"end":[5,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,23],"end":[5,30]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,32],"end":[5,44]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[6,10],"end":[6,14]}}});

    m.writeProperty("obj1", "value", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,46],"end":[7,2]}}});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,1],"end":[7,3]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,1],"end":[7,3]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[5,1],"end":[7,3]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,11],"end":[9,18]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,19],"end":[9,23]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,11],"end":[9,24]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,11],"end":[9,24]}},"name":"require"});

    m.writeVar("_os", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,5],"end":[9,24]}},"name":"_os"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[9,5],"end":[9,24]}}});

    m.readVar("_interopRequireDefault", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,12],"end":[11,34]}},"name":"_interopRequireDefault"});

    m.readVar("_os", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,35],"end":[11,38]}},"name":"_os"});

    m.functionCall("_interopRequireDefault", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,12],"end":[11,39]}},"name":"_interopRequireDefault"});

    m.initVar("obj", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,1],"end":[15,96]}},"name":"obj"});

    m.readVar("obj", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,47],"end":[15,50]}},"name":"obj"});

    m.readVar("obj", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,54],"end":[15,57]}},"name":"obj"});

    m.readProperty("obj2", "__esModule", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,54],"end":[15,68]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,88],"end":[15,91]}},"name":"obj"});

    m.writeProperty("obj3", "default", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,77],"end":[15,93]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[15,40],"end":[15,94]}}});

    m.functionReturn("_interopRequireDefault", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,12],"end":[11,39]}},"name":"_interopRequireDefault"});

    m.writeVar("_os2", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,5],"end":[11,39]}},"name":"_os2"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[11,5],"end":[11,39]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,22],"end":[13,29]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,30],"end":[13,45]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,22],"end":[13,46]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,22],"end":[13,46]}},"name":"require"});

    m.writeVar("_child_process", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,5],"end":[13,46]}},"name":"_child_process"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[13,5],"end":[13,46]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,15],"end":[158,2]}}});

    m.functionCall("", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,15],"end":[158,4]}}});

    m.initVar("NodeWOS", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,15],"end":[158,2]}},"name":"NodeWOS"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[25,3],"end":[67,4]}}});

    m.writeVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[25,3],"end":[67,4]}},"name":"NodeWOS"});

    m.readVar("_createClass", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,3],"end":[74,15]}},"name":"_createClass"});

    m.readVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,16],"end":[74,23]}},"name":"NodeWOS"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[75,10],"end":[75,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[81,12],"end":[83,6]}}});

    m.writeProperty("obj4", "value", {});

    m.writeProperty("obj4", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,26],"end":[90,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[91,10],"end":[91,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[92,12],"end":[94,6]}}});

    m.writeProperty("obj5", "value", {});

    m.writeProperty("obj5", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[90,6],"end":[101,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[102,10],"end":[102,17]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[103,12],"end":[105,6]}}});

    m.writeProperty("obj6", "value", {});

    m.writeProperty("obj6", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[101,6],"end":[112,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[113,10],"end":[113,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[114,12],"end":[116,6]}}});

    m.writeProperty("obj7", "value", {});

    m.writeProperty("obj7", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[112,6],"end":[123,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[124,10],"end":[124,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[125,12],"end":[127,6]}}});

    m.writeProperty("obj8", "value", {});

    m.writeProperty("obj8", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[123,6],"end":[135,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[136,10],"end":[136,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[137,12],"end":[149,6]}}});

    m.writeProperty("obj9", "value", {});

    m.writeProperty("obj9", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[135,6],"end":[150,4]}}});

    m.writeProperty("obj10", "5", {});

    m.writeProperty("obj10", "4", {});

    m.writeProperty("obj10", "3", {});

    m.writeProperty("obj10", "2", {});

    m.writeProperty("obj10", "1", {});

    m.writeProperty("obj10", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,25],"end":[150,5]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[151,10],"end":[151,14]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[152,12],"end":[154,6]}}});

    m.writeProperty("obj11", "value", {});

    m.writeProperty("obj11", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[150,8],"end":[155,4]}}});

    m.writeProperty("obj12", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[150,7],"end":[155,5]}}});

    m.functionCall("", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,3],"end":[155,6]}}});

    m.initVar("Constructor", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,358],"end":[3,559]}},"name":"Constructor"});

    m.initVar("protoProps", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,358],"end":[3,559]}},"name":"protoProps"});

    m.initVar("staticProps", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,358],"end":[3,559]}},"name":"staticProps"});

    m.readVar("protoProps", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,412],"end":[3,422]}},"name":"protoProps"});

    m.readVar("defineProperties", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,424],"end":[3,440]}},"name":"defineProperties"});

    m.readVar("Constructor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,441],"end":[3,452]}},"name":"Constructor"});

    m.readProperty("obj13", "prototype", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,441],"end":[3,462]}}});

    m.readVar("protoProps", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,464],"end":[3,474]}},"name":"protoProps"});

    m.functionCall("defineProperties", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,424],"end":[3,475]}},"name":"defineProperties"});

    m.initVar("target", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"target"});

    m.initVar("props", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"props"});

    m.initVar("i", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"i"});

    m.initVar("descriptor", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,90],"end":[3,91]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,86],"end":[3,91]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,86],"end":[3,91]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 0, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj4", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj4", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj4", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj4", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj4", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 1, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj5", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj5", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj5", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj5", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj5", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 2, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj6", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj6", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj6", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj6", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj6", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 3, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj7", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj7", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj7", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj7", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj7", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 4, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj8", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj8", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj8", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj8", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj8", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj10", 5, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj9", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj9", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj9", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj9", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj9", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj10", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.functionReturn("defineProperties", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,424],"end":[3,475]}},"name":"defineProperties"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,424],"end":[3,475]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,408],"end":[3,476]}}});

    m.readVar("staticProps", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,481],"end":[3,492]}},"name":"staticProps"});

    m.readVar("defineProperties", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,494],"end":[3,510]}},"name":"defineProperties"});

    m.readVar("Constructor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,511],"end":[3,522]}},"name":"Constructor"});

    m.readVar("staticProps", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,524],"end":[3,535]}},"name":"staticProps"});

    m.functionCall("defineProperties", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,494],"end":[3,536]}},"name":"defineProperties"});

    m.initVar("target", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"target"});

    m.initVar("props", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"props"});

    m.initVar("i", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"i"});

    m.initVar("descriptor", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,34],"end":[3,350]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,90],"end":[3,91]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,86],"end":[3,91]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,86],"end":[3,91]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj12", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,140]}},"name":"props"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,141],"end":[3,142]}},"name":"i"});

    m.readProperty("obj12", 0, {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,135],"end":[3,143]}}});

    m.writeVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}},"name":"descriptor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,122],"end":[3,143]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,155]}},"name":"descriptor"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,179]}},"name":"descriptor"});

    m.readProperty("obj11", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,169],"end":[3,190]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,194],"end":[3,199]}}});

    m.writeProperty("obj11", "enumerable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,145],"end":[3,199]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,211]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,227],"end":[3,231]}}});

    m.writeProperty("obj11", "configurable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,201],"end":[3,231]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,244]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,248],"end":[3,258]}},"name":"descriptor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,237],"end":[3,258]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,270]}},"name":"descriptor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,282],"end":[3,286]}}});

    m.writeProperty("obj11", "writable", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,260],"end":[3,286]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,233],"end":[3,287]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,294]}},"name":"Object"});

    m.readProperty("obj0", "defineProperty", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,309]}}});

    m.readVar("target", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,310],"end":[3,316]}},"name":"target"});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,328]}},"name":"descriptor"});

    m.readProperty("obj11", "key", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,318],"end":[3,332]}}});

    m.readVar("descriptor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,334],"end":[3,344]}},"name":"descriptor"});

    m.functionCall("defineProperty", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.functionReturn("defineProperty", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}},"name":"defineProperty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,288],"end":[3,345]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,111],"end":[3,114]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,94]}},"name":"i"});

    m.readVar("props", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,102]}},"name":"props"});

    m.readProperty("obj12", "length", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,97],"end":[3,109]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,93],"end":[3,109]}}});

    m.functionReturn("defineProperties", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,494],"end":[3,536]}},"name":"defineProperties"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,494],"end":[3,536]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,477],"end":[3,537]}}});

    m.readVar("Constructor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,545],"end":[3,556]}},"name":"Constructor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[3,538],"end":[3,557]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,3],"end":[155,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[74,3],"end":[155,6]}}});

    m.readVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[157,10],"end":[157,17]}},"name":"NodeWOS"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[157,3],"end":[157,18]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,15],"end":[158,4]}}});

    m.writeVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,5],"end":[158,4]}},"name":"NodeWOS"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[24,5],"end":[158,4]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,1],"end":[226,7]}},"name":"module"});

    m.readVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,22],"end":[226,29]}},"name":"NodeWOS"});

    m.functionCall("NodeWOS", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,18],"end":[226,31]}},"name":"NodeWOS"});

    m.initVar("platform", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[25,3],"end":[67,4]}},"name":"platform"});

    m.initVar("arch", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[25,3],"end":[67,4]}},"name":"arch"});

    m.readVar("_classCallCheck", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,5],"end":[26,20]}},"name":"_classCallCheck"});

    m.readVar("this", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,21],"end":[26,25]}},"name":"this"});

    m.readVar("NodeWOS", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,27],"end":[26,34]}},"name":"NodeWOS"});

    m.functionCall("_classCallCheck", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,5],"end":[26,35]}},"name":"_classCallCheck"});

    m.initVar("instance", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,1],"end":[17,154]}},"name":"instance"});

    m.initVar("Constructor", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,1],"end":[17,154]}},"name":"Constructor"});

    m.readVar("instance", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,57],"end":[17,65]}},"name":"instance"});

    m.readVar("Constructor", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,77],"end":[17,88]}},"name":"Constructor"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,56],"end":[17,89]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[17,51],"end":[17,152]}}});

    m.functionReturn("_classCallCheck", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,5],"end":[26,35]}},"name":"_classCallCheck"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[26,5],"end":[26,35]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[28,20],"end":[28,29]}}});

    m.writeVar("platform", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[28,9],"end":[28,29]}},"name":"platform"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[28,9],"end":[28,29]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[29,16],"end":[29,25]}}});

    m.writeVar("arch", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[29,9],"end":[29,25]}},"name":"arch"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[29,9],"end":[29,25]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[31,13],"end":[31,20]}},"name":"process"});

    m.readProperty("obj14", "platform", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[31,13],"end":[31,29]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[31,20],"end":[31,29]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[32,7],"end":[34,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[32,7],"end":[34,15]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[35,7],"end":[37,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[35,7],"end":[37,15]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[36,20],"end":[36,27]}}});

    m.writeVar("platform", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[36,9],"end":[36,27]}},"name":"platform"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[36,9],"end":[36,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[32,7],"end":[34,15]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[52,13],"end":[52,20]}},"name":"process"});

    m.readProperty("obj14", "arch", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[52,13],"end":[52,25]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[52,20],"end":[52,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[53,7],"end":[55,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[53,7],"end":[55,15]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[54,16],"end":[54,23]}}});

    m.writeVar("arch", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[54,9],"end":[54,23]}},"name":"arch"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[54,9],"end":[54,23]}}});

    m.readVar("this", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[65,5],"end":[65,9]}},"name":"this"});

    m.readVar("platform", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[65,21],"end":[65,29]}},"name":"platform"});

    m.writeProperty("obj15", "platform", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[65,5],"end":[65,29]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[65,5],"end":[65,29]}}});

    m.readVar("this", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[66,5],"end":[66,9]}},"name":"this"});

    m.readVar("arch", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[66,17],"end":[66,21]}},"name":"arch"});

    m.writeProperty("obj15", "arch", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[66,5],"end":[66,21]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[66,5],"end":[66,21]}}});

    m.functionReturn("NodeWOS", {"type":"functionReturn","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,18],"end":[226,31]}},"name":"NodeWOS"});

    m.writeProperty("obj16", "exports", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,1],"end":[226,31]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[226,1],"end":[226,31]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node-wos.js","pos":{"start":[17,11],"end":[17,30]}},"name":"require"});

    m.writeVar("wos", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[17,5],"end":[17,30]}},"name":"wos"});

    m.pop({"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[17,5],"end":[17,30]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[18,1],"end":[18,8]}},"name":"console"});

    m.readProperty("obj17", "log", {"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[18,1],"end":[18,12]}}});

    m.readVar("wos", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[18,13],"end":[18,16]}},"name":"wos"});

    m.readProperty("obj15", "getOSName", {"type":"expr","location":{"fileName":"node-wos.js","pos":{"start":[18,13],"end":[18,26]}}});

    m.readVar("command", {"type":"variable","location":{"fileName":"node-wos.js","pos":{"start":[18,27],"end":[18,34]}},"name":"command"});

    m.functionCall("getOSName", 1, 1, {"type":"functionInvocation","location":{"fileName":"node-wos.js","pos":{"start":[18,13],"end":[18,35]}},"name":"getOSName"});

    m.initVar("verbose", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[137,12],"end":[149,6]}},"name":"verbose"});

    m.readVar("this", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[139,15],"end":[139,19]}},"name":"this"});

    m.readProperty("obj15", "platform", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[139,15],"end":[139,28]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[139,19],"end":[139,28]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[140,9],"end":[141,55]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[140,9],"end":[141,55]}}});

    m.readVar("getLinuxOperationSystemName", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[141,18],"end":[141,45]}},"name":"getLinuxOperationSystemName"});

    m.readVar("verbose", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[141,46],"end":[141,53]}},"name":"verbose"});

    m.functionCall("getLinuxOperationSystemName", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[141,18],"end":[141,54]}},"name":"getLinuxOperationSystemName"});

    m.initVar("verbose", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}},"name":"verbose"});

    m.initVar("OSName", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}},"name":"OSName"});

    m.initVar("buffer", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}},"name":"buffer"});

    m.initVar("release", {"type":"declaration","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[168,1],"end":[200,2]}},"name":"release"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[169,16],"end":[169,25]}}});

    m.writeVar("OSName", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[169,7],"end":[169,25]}},"name":"OSName"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[169,7],"end":[169,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[170,17],"end":[170,18]}}});

    m.readVar("_child_process", {"type":"variable","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[170,20],"end":[170,34]}},"name":"_child_process"});

    m.readProperty("obj18", "execSync", {"type":"expr","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[170,20],"end":[170,43]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[170,45],"end":[170,61]}}});

    m.functionCall("execSync", 2, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/node-wos/dist/index.js","pos":{"start":[170,16],"end":[170,62]}},"name":"execSync"});

    m.endExecution();

};

