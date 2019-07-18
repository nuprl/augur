exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("DUMMY_FILE");

    m.initVar("command");

    m.initVar("wos");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("DUMMY_FILE");

    m.push(false);

    m.readVar("DUMMY_FILE");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("command");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("command");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("command");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_interopRequireDefault");

    m.initVar("_classCallCheck");

    m.initVar("getLinuxOperationSystemName");

    m.initVar("getMacOperationSystemName");

    m.initVar("getWindowsOperationSystem");

    m.initVar("_createClass");

    m.initVar("_os");

    m.initVar("_os2");

    m.initVar("_child_process");

    m.initVar("NodeWOS");

    m.push(false);

    m.writeVar("_interopRequireDefault");

    m.push(false);

    m.writeVar("_classCallCheck");

    m.push(false);

    m.writeVar("getLinuxOperationSystemName");

    m.push(false);

    m.writeVar("getMacOperationSystemName");

    m.push(false);

    m.writeVar("getWindowsOperationSystem");

    m.push(false);

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("defineProperties");

    m.push(false);

    m.writeVar("defineProperties");

    m.push(false);

    m.writeVar("_createClass");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("exports");

    m.push(false);

    m.push(false);

    m.writeProperty("obj1", "value");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_os");

    m.readVar("_interopRequireDefault");

    m.readVar("_os");

    m.functionCall("_interopRequireDefault", 1, 1);

    m.initVar("obj");

    m.readVar("obj");

    m.readVar("obj");

    m.readProperty("obj2", "__esModule");

    m.readVar("obj");

    m.writeProperty("obj3", "default");

    m.push(false);

    m.writeVar("_os2");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_child_process");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("NodeWOS");

    m.push(false);

    m.writeVar("NodeWOS");

    m.readVar("_createClass");

    m.readVar("NodeWOS");

    m.push(false);

    m.push(false);

    m.writeProperty("obj4", "value");

    m.writeProperty("obj4", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj5", "value");

    m.writeProperty("obj5", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj6", "value");

    m.writeProperty("obj6", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj7", "value");

    m.writeProperty("obj7", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj8", "value");

    m.writeProperty("obj8", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj9", "value");

    m.writeProperty("obj9", "key");

    m.push(false);

    m.writeProperty("obj10", "5");

    m.writeProperty("obj10", "4");

    m.writeProperty("obj10", "3");

    m.writeProperty("obj10", "2");

    m.writeProperty("obj10", "1");

    m.writeProperty("obj10", "0");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj11", "value");

    m.writeProperty("obj11", "key");

    m.push(false);

    m.writeProperty("obj12", "0");

    m.push(false);

    m.functionCall("", 3, 3);

    m.initVar("Constructor");

    m.initVar("protoProps");

    m.initVar("staticProps");

    m.readVar("protoProps");

    m.unaryOp();

    m.readVar("defineProperties");

    m.readVar("Constructor");

    m.readProperty("obj13", "prototype");

    m.readVar("protoProps");

    m.functionCall("defineProperties", 2, 2);

    m.initVar("target");

    m.initVar("props");

    m.initVar("i");

    m.initVar("descriptor");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 0);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj4", "enumerable");

    m.push(false);

    m.writeProperty("obj4", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj4", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj4", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj4", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 1);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj5", "enumerable");

    m.push(false);

    m.writeProperty("obj5", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj5", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj5", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj5", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 2);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj6", "enumerable");

    m.push(false);

    m.writeProperty("obj6", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj6", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj6", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj6", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 3);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj7", "enumerable");

    m.push(false);

    m.writeProperty("obj7", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj7", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj7", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj7", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 4);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj8", "enumerable");

    m.push(false);

    m.writeProperty("obj8", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj8", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj8", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj8", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj10", 5);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj9", "enumerable");

    m.push(false);

    m.writeProperty("obj9", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj9", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj9", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj9", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj10", "length");

    m.binaryOp();

    m.readVar("staticProps");

    m.unaryOp();

    m.readVar("defineProperties");

    m.readVar("Constructor");

    m.readVar("staticProps");

    m.functionCall("defineProperties", 2, 2);

    m.initVar("target");

    m.initVar("props");

    m.initVar("i");

    m.initVar("descriptor");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj12", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.readProperty("obj12", 0);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.readVar("descriptor");

    m.readProperty("obj11", "enumerable");

    m.push(false);

    m.writeProperty("obj11", "enumerable");

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj11", "configurable");

    m.push(false);

    m.readVar("descriptor");

    m.binaryOp();

    m.unaryOp();

    m.readVar("descriptor");

    m.push(false);

    m.writeProperty("obj11", "writable");

    m.readVar("Object");

    m.readProperty("obj0", "defineProperty");

    m.readVar("target");

    m.readVar("descriptor");

    m.readProperty("obj11", "key");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj12", "length");

    m.binaryOp();

    m.readVar("Constructor");

    m.readVar("NodeWOS");

    m.writeVar("NodeWOS");

    m.readVar("module");

    m.readVar("NodeWOS");

    m.functionCall("NodeWOS", 0, 0);

    m.initVar("platform");

    m.initVar("arch");

    m.readVar("_classCallCheck");

    m.readVar("NodeWOS");

    m.functionCall("_classCallCheck", 2, 2);

    m.initVar("instance");

    m.initVar("Constructor");

    m.readVar("instance");

    m.readVar("Constructor");

    m.binaryOp();

    m.push(false);

    m.writeVar("platform");

    m.push(false);

    m.writeVar("arch");

    m.readVar("process");

    m.readProperty("obj14", "platform");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.push(false);

    m.writeVar("platform");

    m.readVar("process");

    m.readProperty("obj14", "arch");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("arch");

    m.readVar("platform");

    m.writeProperty("obj15", "platform");

    m.readVar("arch");

    m.writeProperty("obj15", "arch");

    m.writeProperty("obj16", "exports");

    m.writeVar("wos");

    m.readVar("console");

    m.readProperty("obj17", "log");

    m.readVar("wos");

    m.readProperty("obj15", "getOSName");

    m.readVar("command");

    m.functionCall("getOSName", 1, 1);

    m.initVar("verbose");

    m.readProperty("obj15", "platform");

    m.push(false);

    m.binaryOp();

    m.readVar("getLinuxOperationSystemName");

    m.readVar("verbose");

    m.functionCall("getLinuxOperationSystemName", 1, 1);

    m.initVar("verbose");

    m.initVar("OSName");

    m.initVar("buffer");

    m.initVar("release");

    m.push(false);

    m.writeVar("OSName");

    m.push(false);

    m.readVar("_child_process");

    m.readProperty("obj18", "execSync");

    m.push(false);

    m.functionCall("execSync", 1, 1);

    m.endExecution();

};

