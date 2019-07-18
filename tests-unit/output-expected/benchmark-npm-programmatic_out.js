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

    m.initVar("npm");

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

    m.initVar("Promise");

    m.initVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("noConflict");

    m.initVar("old");

    m.initVar("bluebird");

    m.push(false);

    m.writeVar("noConflict");

    m.push(false);

    m.readVar("Promise");

    m.unaryOp();

    m.readVar("Promise");

    m.writeVar("old");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj0", "exports");

    m.functionCall("", 0, 0);

    m.initVar("Proxyable");

    m.initVar("check");

    m.initVar("Promise");

    m.initVar("deferResolve");

    m.initVar("deferReject");

    m.initVar("fillTypes");

    m.initVar("makeSelfResolutionError");

    m.initVar("reflectHandler");

    m.initVar("apiRejection");

    m.initVar("UNDEFINED_BINDING");

    m.initVar("util");

    m.initVar("getDomain");

    m.initVar("es5");

    m.initVar("Async");

    m.initVar("async");

    m.initVar("errors");

    m.initVar("TypeError");

    m.initVar("CancellationError");

    m.initVar("INTERNAL");

    m.initVar("APPLY");

    m.initVar("NEXT_FILTER");

    m.initVar("tryConvertToPromise");

    m.initVar("PromiseArray");

    m.initVar("Context");

    m.initVar("createContext");

    m.initVar("debug");

    m.initVar("CapturedTrace");

    m.initVar("PassThroughHandlerContext");

    m.initVar("catchFilter");

    m.initVar("nodebackForPromise");

    m.initVar("errorObj");

    m.initVar("tryCatch");

    m.push(false);

    m.writeVar("Proxyable");

    m.push(false);

    m.writeVar("check");

    m.push(false);

    m.writeVar("Promise");

    m.push(false);

    m.writeVar("deferResolve");

    m.push(false);

    m.writeVar("deferReject");

    m.push(false);

    m.writeVar("fillTypes");

    m.push(false);

    m.writeVar("makeSelfResolutionError");

    m.push(false);

    m.writeVar("reflectHandler");

    m.push(false);

    m.writeVar("apiRejection");

    m.push(false);

    m.writeVar("UNDEFINED_BINDING");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("tryCatcher");

    m.initVar("tryCatch");

    m.initVar("isPrimitive");

    m.initVar("isObject");

    m.initVar("maybeWrapAsError");

    m.initVar("withAppended");

    m.initVar("getDataPropertyOrDefault");

    m.initVar("notEnumerableProp");

    m.initVar("thrower");

    m.initVar("isClass");

    m.initVar("toFastProperties");

    m.initVar("isIdentifier");

    m.initVar("filledRange");

    m.initVar("safeToString");

    m.initVar("isError");

    m.initVar("markAsOriginatingFromRejection");

    m.initVar("originatesFromRejection");

    m.initVar("canAttachTrace");

    m.initVar("classString");

    m.initVar("copyDescriptors");

    m.initVar("env");

    m.initVar("getNativePromise");

    m.initVar("domainBind");

    m.initVar("es5");

    m.initVar("canEvaluate");

    m.initVar("errorObj");

    m.initVar("tryCatchTarget");

    m.initVar("globalObject");

    m.initVar("inherits");

    m.initVar("inheritedDataKeys");

    m.initVar("thisAssignmentPattern");

    m.initVar("rident");

    m.initVar("ensureErrorObject");

    m.initVar("asArray");

    m.initVar("ArrayFrom");

    m.initVar("isNode");

    m.initVar("hasEnvVariables");

    m.initVar("ret");

    m.push(false);

    m.writeVar("tryCatcher");

    m.push(false);

    m.writeVar("tryCatch");

    m.push(false);

    m.writeVar("isPrimitive");

    m.push(false);

    m.writeVar("isObject");

    m.push(false);

    m.writeVar("maybeWrapAsError");

    m.push(false);

    m.writeVar("withAppended");

    m.push(false);

    m.writeVar("getDataPropertyOrDefault");

    m.push(false);

    m.writeVar("notEnumerableProp");

    m.push(false);

    m.writeVar("thrower");

    m.push(false);

    m.writeVar("isClass");

    m.push(false);

    m.writeVar("toFastProperties");

    m.push(false);

    m.writeVar("isIdentifier");

    m.push(false);

    m.writeVar("filledRange");

    m.push(false);

    m.writeVar("safeToString");

    m.push(false);

    m.writeVar("isError");

    m.push(false);

    m.writeVar("markAsOriginatingFromRejection");

    m.push(false);

    m.writeVar("originatesFromRejection");

    m.push(false);

    m.writeVar("canAttachTrace");

    m.push(false);

    m.writeVar("classString");

    m.push(false);

    m.writeVar("copyDescriptors");

    m.push(false);

    m.writeVar("env");

    m.push(false);

    m.writeVar("getNativePromise");

    m.push(false);

    m.writeVar("domainBind");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isES5");

    m.initVar("has");

    m.initVar("str");

    m.initVar("proto");

    m.initVar("ObjectKeys");

    m.initVar("ObjectGetDescriptor");

    m.initVar("ObjectDefineProperty");

    m.initVar("ObjectFreeze");

    m.initVar("ObjectGetPrototypeOf");

    m.initVar("ArrayIsArray");

    m.push(false);

    m.functionCall("", 0, 0);

    m.push(false);

    m.push(false);

    m.binaryOp();

    m.writeVar("isES5");

    m.readVar("isES5");

    m.unaryOp();

    m.readVar("module");

    m.readVar("Object");

    m.readProperty("obj1", "freeze");

    m.readVar("Object");

    m.readProperty("obj1", "defineProperty");

    m.readVar("Object");

    m.readProperty("obj1", "getOwnPropertyDescriptor");

    m.readVar("Object");

    m.readProperty("obj1", "keys");

    m.readVar("Object");

    m.readProperty("obj1", "getOwnPropertyNames");

    m.readVar("Object");

    m.readProperty("obj1", "getPrototypeOf");

    m.readVar("Array");

    m.readProperty("obj2", "isArray");

    m.readVar("isES5");

    m.push(false);

    m.writeProperty("obj3", "propertyIsWritable");

    m.writeProperty("obj3", "isES5");

    m.writeProperty("obj3", "isArray");

    m.writeProperty("obj3", "getPrototypeOf");

    m.writeProperty("obj3", "names");

    m.writeProperty("obj3", "keys");

    m.writeProperty("obj3", "getDescriptor");

    m.writeProperty("obj3", "defineProperty");

    m.writeProperty("obj3", "freeze");

    m.push(false);

    m.writeProperty("obj4", "exports");

    m.writeVar("es5");

    m.readVar("navigator");

    m.writeVar("canEvaluate");

    m.push(false);

    m.writeProperty("obj5", "e");

    m.push(false);

    m.writeVar("errorObj");

    m.readVar("self");

    m.readVar("window");

    m.readVar("global");

    m.readVar("global");

    m.writeVar("globalObject");

    m.push(false);

    m.writeVar("inherits");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("excludedPrototypes");

    m.initVar("isExcludedProto");

    m.initVar("getKeys");

    m.initVar("hasProp");

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("Object");

    m.readProperty("obj1", "prototype");

    m.readVar("Function");

    m.readProperty("obj6", "prototype");

    m.writeProperty("obj7", "2");

    m.writeProperty("obj7", "1");

    m.writeProperty("obj7", "0");

    m.push(false);

    m.writeVar("excludedPrototypes");

    m.push(false);

    m.writeVar("isExcludedProto");

    m.readVar("es5");

    m.readProperty("obj3", "isES5");

    m.readVar("Object");

    m.readProperty("obj1", "getOwnPropertyNames");

    m.writeVar("getKeys");

    m.push(false);

    m.writeVar("inheritedDataKeys");

    m.push(false);

    m.writeVar("thisAssignmentPattern");

    m.push(false);

    m.writeVar("rident");

    m.push(false);

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("Error");

    m.functionCall("Error", 1, 0);

    m.binaryOp();

    m.push(false);

    m.writeVar("ensureErrorObject");

    m.push(false);

    m.writeVar("asArray");

    m.readVar("Symbol");

    m.unaryOp();

    m.readVar("Symbol");

    m.readProperty("obj8", "iterator");

    m.readVar("Array");

    m.readProperty("obj2", "from");

    m.push(false);

    m.writeVar("ArrayFrom");

    m.push(false);

    m.writeVar("asArray");

    m.readVar("process");

    m.unaryOp();

    m.readVar("classString");

    m.readVar("process");

    m.functionCall("classString", 1, 1);

    m.initVar("obj");

    m.push(false);

    m.readProperty("obj9", "toString");

    m.readProperty("obj10", "call");

    m.readVar("obj");

    m.functionCall("call", 1, 1);

    m.readProperty("obj11", "toLowerCase");

    m.functionCall("toLowerCase", 0, 0);

    m.push(false);

    m.binaryOp();

    m.writeVar("isNode");

    m.readVar("process");

    m.unaryOp();

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.unaryOp();

    m.writeVar("hasEnvVariables");

    m.readVar("isClass");

    m.readVar("isIdentifier");

    m.readVar("inheritedDataKeys");

    m.readVar("getDataPropertyOrDefault");

    m.readVar("thrower");

    m.readVar("es5");

    m.readProperty("obj3", "isArray");

    m.readVar("asArray");

    m.readVar("notEnumerableProp");

    m.readVar("isPrimitive");

    m.readVar("isObject");

    m.readVar("isError");

    m.readVar("canEvaluate");

    m.readVar("errorObj");

    m.readVar("tryCatch");

    m.readVar("inherits");

    m.readVar("withAppended");

    m.readVar("maybeWrapAsError");

    m.readVar("toFastProperties");

    m.readVar("filledRange");

    m.readVar("safeToString");

    m.readVar("canAttachTrace");

    m.readVar("ensureErrorObject");

    m.readVar("originatesFromRejection");

    m.readVar("markAsOriginatingFromRejection");

    m.readVar("classString");

    m.readVar("copyDescriptors");

    m.readVar("chrome");

    m.unaryOp();

    m.readVar("isNode");

    m.readVar("hasEnvVariables");

    m.readVar("env");

    m.readVar("globalObject");

    m.readVar("getNativePromise");

    m.readVar("domainBind");

    m.writeProperty("obj13", "domainBind");

    m.writeProperty("obj13", "getNativePromise");

    m.writeProperty("obj13", "global");

    m.writeProperty("obj13", "env");

    m.writeProperty("obj13", "hasEnvVariables");

    m.writeProperty("obj13", "isNode");

    m.writeProperty("obj13", "hasDevTools");

    m.writeProperty("obj13", "copyDescriptors");

    m.writeProperty("obj13", "classString");

    m.writeProperty("obj13", "markAsOriginatingFromRejection");

    m.writeProperty("obj13", "originatesFromRejection");

    m.writeProperty("obj13", "ensureErrorObject");

    m.writeProperty("obj13", "canAttachTrace");

    m.writeProperty("obj13", "toString");

    m.writeProperty("obj13", "filledRange");

    m.writeProperty("obj13", "toFastProperties");

    m.writeProperty("obj13", "maybeWrapAsError");

    m.writeProperty("obj13", "withAppended");

    m.writeProperty("obj13", "inherits");

    m.writeProperty("obj13", "tryCatch");

    m.writeProperty("obj13", "errorObj");

    m.writeProperty("obj13", "canEvaluate");

    m.writeProperty("obj13", "isError");

    m.writeProperty("obj13", "isObject");

    m.writeProperty("obj13", "isPrimitive");

    m.writeProperty("obj13", "notEnumerableProp");

    m.writeProperty("obj13", "asArray");

    m.writeProperty("obj13", "isArray");

    m.writeProperty("obj13", "thrower");

    m.writeProperty("obj13", "getDataPropertyOrDefault");

    m.writeProperty("obj13", "inheritedDataKeys");

    m.writeProperty("obj13", "isIdentifier");

    m.writeProperty("obj13", "isClass");

    m.push(false);

    m.writeVar("ret");

    m.readVar("ret");

    m.readVar("ret");

    m.readProperty("obj13", "isNode");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("version");

    m.readVar("process");

    m.readProperty("obj12", "versions");

    m.readProperty("obj14", "node");

    m.readProperty("obj15", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.readProperty("obj16", "map");

    m.readVar("Number");

    m.functionCall("map", 1, 1);

    m.writeVar("version");

    m.readVar("version");

    m.push(false);

    m.readProperty("obj17", 0);

    m.push(false);

    m.binaryOp();

    m.readVar("version");

    m.push(false);

    m.readProperty("obj17", 0);

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj13", "isRecentNode");

    m.readVar("ret");

    m.readProperty("obj13", "isNode");

    m.unaryOp();

    m.readVar("ret");

    m.readProperty("obj13", "toFastProperties");

    m.readVar("process");

    m.functionCall("toFastProperties", 1, 1);

    m.initVar("obj");

    m.initVar("arguments");

    m.initVar("FakeConstructor");

    m.initVar("l");

    m.push(false);

    m.writeVar("FakeConstructor");

    m.readVar("FakeConstructor");

    m.readVar("obj");

    m.writeProperty("obj18", "prototype");

    m.push(false);

    m.writeVar("l");

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("obj");

    m.readVar("Error");

    m.functionCall("Error", 1, 0);

    m.unaryOp();

    m.readVar("ret");

    m.readVar("e");

    m.writeProperty("obj13", "lastLineError");

    m.readVar("module");

    m.readVar("ret");

    m.writeProperty("obj19", "exports");

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "isNode");

    m.unaryOp();

    m.push(false);

    m.writeVar("getDomain");

    m.readVar("util");

    m.readProperty("obj13", "notEnumerableProp");

    m.readVar("Promise");

    m.push(false);

    m.readVar("getDomain");

    m.functionCall("notEnumerableProp", 3, 3);

    m.initVar("obj");

    m.initVar("name");

    m.initVar("value");

    m.initVar("descriptor");

    m.readVar("isPrimitive");

    m.readVar("obj");

    m.functionCall("isPrimitive", 1, 1);

    m.initVar("val");

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.readVar("val");

    m.readVar("value");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj20", "writable");

    m.writeProperty("obj20", "enumerable");

    m.writeProperty("obj20", "configurable");

    m.writeProperty("obj20", "value");

    m.push(false);

    m.writeVar("descriptor");

    m.readVar("es5");

    m.readProperty("obj3", "defineProperty");

    m.readVar("obj");

    m.readVar("name");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("obj");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("es5");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("Async");

    m.initVar("AsyncInvokeLater");

    m.initVar("AsyncInvoke");

    m.initVar("AsyncSettlePromises");

    m.initVar("firstLineError");

    m.initVar("schedule");

    m.initVar("Queue");

    m.initVar("util");

    m.push(false);

    m.writeVar("Async");

    m.push(false);

    m.writeVar("AsyncInvokeLater");

    m.push(false);

    m.writeVar("AsyncInvoke");

    m.push(false);

    m.writeVar("AsyncSettlePromises");

    m.push(false);

    m.readVar("Error");

    m.functionCall("Error", 1, 0);

    m.unaryOp();

    m.readVar("e");

    m.writeVar("firstLineError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("util");

    m.initVar("schedule");

    m.initVar("noAsyncScheduler");

    m.initVar("NativePromise");

    m.initVar("GlobalSetImmediate");

    m.initVar("ProcessNextTick");

    m.initVar("nativePromise");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.push(false);

    m.writeVar("noAsyncScheduler");

    m.readVar("util");

    m.readProperty("obj13", "getNativePromise");

    m.functionCall("getNativePromise", 0, 0);

    m.initVar("promise");

    m.readVar("Promise");

    m.unaryOp();

    m.readVar("Promise");

    m.push(false);

    m.functionCall("Promise", 1, 1);

    m.push(false);

    m.writeVar("promise");

    m.push(false);

    m.readProperty("obj21", "toString");

    m.readProperty("obj10", "call");

    m.readVar("promise");

    m.functionCall("call", 1, 1);

    m.push(false);

    m.binaryOp();

    m.readVar("Promise");

    m.writeVar("NativePromise");

    m.readVar("util");

    m.readProperty("obj13", "isNode");

    m.readVar("MutationObserver");

    m.readVar("global");

    m.readVar("setImmediate");

    m.writeVar("GlobalSetImmediate");

    m.readVar("process");

    m.readProperty("obj12", "nextTick");

    m.writeVar("ProcessNextTick");

    m.readVar("util");

    m.readProperty("obj13", "isRecentNode");

    m.push(false);

    m.writeVar("schedule");

    m.readVar("module");

    m.readVar("schedule");

    m.writeProperty("obj22", "exports");

    m.writeVar("schedule");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("arrayMove");

    m.initVar("Queue");

    m.push(false);

    m.writeVar("arrayMove");

    m.push(false);

    m.writeVar("Queue");

    m.push(false);

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "_willBeOverCapacity");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "_pushOne");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "push");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "shift");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "length");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "_checkCapacity");

    m.readVar("Queue");

    m.readProperty("obj23", "prototype");

    m.push(false);

    m.writeProperty("obj24", "_resizeTo");

    m.readVar("module");

    m.readVar("Queue");

    m.writeProperty("obj25", "exports");

    m.writeVar("Queue");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "setScheduler");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "hasCustomScheduler");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "enableTrampoline");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "disableTrampolineIfNecessary");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "haveItemsQueued");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "fatalError");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "throwLater");

    m.readVar("util");

    m.readProperty("obj13", "hasDevTools");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.readVar("AsyncInvokeLater");

    m.writeProperty("obj27", "invokeLater");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.readVar("AsyncInvoke");

    m.writeProperty("obj27", "invoke");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.readVar("AsyncSettlePromises");

    m.writeProperty("obj27", "settlePromises");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "_drainQueue");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "_drainQueues");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "_queueTick");

    m.readVar("Async");

    m.readProperty("obj26", "prototype");

    m.push(false);

    m.writeProperty("obj27", "_reset");

    m.readVar("module");

    m.readVar("Async");

    m.writeProperty("obj28", "exports");

    m.readVar("module");

    m.readProperty("obj28", "exports");

    m.readVar("firstLineError");

    m.writeProperty("obj26", "firstLineError");

    m.writeVar("Async");

    m.readVar("Async");

    m.functionCall("Async", 0, 0);

    m.initVar("self");

    m.push(false);

    m.writeProperty("obj29", "_customScheduler");

    m.push(false);

    m.writeProperty("obj29", "_isTickUsed");

    m.readVar("Queue");

    m.push(false);

    m.functionCall("Queue", 1, 1);

    m.initVar("capacity");

    m.readVar("capacity");

    m.writeProperty("obj30", "_capacity");

    m.push(false);

    m.writeProperty("obj30", "_length");

    m.push(false);

    m.writeProperty("obj30", "_front");

    m.writeProperty("obj29", "_lateQueue");

    m.readVar("Queue");

    m.push(false);

    m.functionCall("Queue", 1, 1);

    m.initVar("capacity");

    m.readVar("capacity");

    m.writeProperty("obj31", "_capacity");

    m.push(false);

    m.writeProperty("obj31", "_length");

    m.push(false);

    m.writeProperty("obj31", "_front");

    m.writeProperty("obj29", "_normalQueue");

    m.push(false);

    m.writeProperty("obj29", "_haveDrainedQueues");

    m.push(false);

    m.writeProperty("obj29", "_trampolineEnabled");

    m.writeVar("self");

    m.push(false);

    m.writeProperty("obj29", "drainQueues");

    m.readVar("schedule");

    m.writeProperty("obj29", "_schedule");

    m.writeVar("async");

    m.readVar("es5");

    m.readProperty("obj3", "defineProperty");

    m.readVar("Promise");

    m.push(false);

    m.readVar("async");

    m.writeProperty("obj32", "value");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("subError");

    m.initVar("OperationalError");

    m.initVar("es5");

    m.initVar("Objectfreeze");

    m.initVar("util");

    m.initVar("inherits");

    m.initVar("notEnumerableProp");

    m.initVar("_TypeError");

    m.initVar("_RangeError");

    m.initVar("Warning");

    m.initVar("CancellationError");

    m.initVar("TimeoutError");

    m.initVar("AggregateError");

    m.initVar("methods");

    m.initVar("i");

    m.initVar("level");

    m.initVar("errorTypes");

    m.push(false);

    m.writeVar("subError");

    m.push(false);

    m.writeVar("OperationalError");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("es5");

    m.readVar("es5");

    m.readProperty("obj3", "freeze");

    m.writeVar("Objectfreeze");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.writeVar("inherits");

    m.readVar("util");

    m.readProperty("obj13", "notEnumerableProp");

    m.writeVar("notEnumerableProp");

    m.readVar("subError");

    m.push(false);

    m.push(false);

    m.functionCall("subError", 2, 2);

    m.initVar("nameProperty");

    m.initVar("defaultMessage");

    m.initVar("SubError");

    m.push(false);

    m.writeVar("SubError");

    m.readVar("inherits");

    m.readVar("SubError");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj33", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj35", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj36", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj36", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj37", "prototype");

    m.readVar("Child");

    m.readProperty("obj37", "prototype");

    m.readVar("SubError");

    m.writeVar("Warning");

    m.readVar("subError");

    m.push(false);

    m.push(false);

    m.functionCall("subError", 2, 2);

    m.initVar("nameProperty");

    m.initVar("defaultMessage");

    m.initVar("SubError");

    m.push(false);

    m.writeVar("SubError");

    m.readVar("inherits");

    m.readVar("SubError");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj38", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj39", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj40", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj40", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj41", "prototype");

    m.readVar("Child");

    m.readProperty("obj41", "prototype");

    m.readVar("SubError");

    m.writeVar("CancellationError");

    m.readVar("subError");

    m.push(false);

    m.push(false);

    m.functionCall("subError", 2, 2);

    m.initVar("nameProperty");

    m.initVar("defaultMessage");

    m.initVar("SubError");

    m.push(false);

    m.writeVar("SubError");

    m.readVar("inherits");

    m.readVar("SubError");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj42", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj43", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj44", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj44", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj45", "prototype");

    m.readVar("Child");

    m.readProperty("obj45", "prototype");

    m.readVar("SubError");

    m.writeVar("TimeoutError");

    m.readVar("subError");

    m.push(false);

    m.push(false);

    m.functionCall("subError", 2, 2);

    m.initVar("nameProperty");

    m.initVar("defaultMessage");

    m.initVar("SubError");

    m.push(false);

    m.writeVar("SubError");

    m.readVar("inherits");

    m.readVar("SubError");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj46", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj47", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj48", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj48", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj49", "prototype");

    m.readVar("Child");

    m.readProperty("obj49", "prototype");

    m.readVar("SubError");

    m.writeVar("AggregateError");

    m.readVar("TypeError");

    m.writeVar("_TypeError");

    m.readVar("RangeError");

    m.writeVar("_RangeError");

    m.push(false);

    m.readProperty("obj50", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.writeVar("methods");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 0);

    m.readProperty("obj52", "join");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 0);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 0);

    m.readProperty("obj52", "join");

    m.writeProperty("obj48", "join");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 1);

    m.readProperty("obj52", "pop");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 1);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 1);

    m.readProperty("obj52", "pop");

    m.writeProperty("obj48", "pop");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 2);

    m.readProperty("obj52", "push");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 2);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 2);

    m.readProperty("obj52", "push");

    m.writeProperty("obj48", "push");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 3);

    m.readProperty("obj52", "shift");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 3);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 3);

    m.readProperty("obj52", "shift");

    m.writeProperty("obj48", "shift");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 4);

    m.readProperty("obj52", "unshift");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 4);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 4);

    m.readProperty("obj52", "unshift");

    m.writeProperty("obj48", "unshift");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 5);

    m.readProperty("obj52", "slice");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 5);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 5);

    m.readProperty("obj52", "slice");

    m.writeProperty("obj48", "slice");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 6);

    m.readProperty("obj52", "filter");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 6);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 6);

    m.readProperty("obj52", "filter");

    m.writeProperty("obj48", "filter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 7);

    m.readProperty("obj52", "forEach");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 7);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 7);

    m.readProperty("obj52", "forEach");

    m.writeProperty("obj48", "forEach");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 8);

    m.readProperty("obj52", "some");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 8);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 8);

    m.readProperty("obj52", "some");

    m.writeProperty("obj48", "some");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 9);

    m.readProperty("obj52", "every");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 9);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 9);

    m.readProperty("obj52", "every");

    m.writeProperty("obj48", "every");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 10);

    m.readProperty("obj52", "map");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 10);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 10);

    m.readProperty("obj52", "map");

    m.writeProperty("obj48", "map");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 11);

    m.readProperty("obj52", "indexOf");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 11);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 11);

    m.readProperty("obj52", "indexOf");

    m.writeProperty("obj48", "indexOf");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 12);

    m.readProperty("obj52", "lastIndexOf");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 12);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 12);

    m.readProperty("obj52", "lastIndexOf");

    m.writeProperty("obj48", "lastIndexOf");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 13);

    m.readProperty("obj52", "reduce");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 13);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 13);

    m.readProperty("obj52", "reduce");

    m.writeProperty("obj48", "reduce");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 14);

    m.readProperty("obj52", "reduceRight");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 14);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 14);

    m.readProperty("obj52", "reduceRight");

    m.writeProperty("obj48", "reduceRight");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 15);

    m.readProperty("obj52", "sort");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 15);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 15);

    m.readProperty("obj52", "sort");

    m.writeProperty("obj48", "sort");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 16);

    m.readProperty("obj52", "reverse");

    m.unaryOp();

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 16);

    m.readVar("Array");

    m.readProperty("obj2", "prototype");

    m.readVar("methods");

    m.readVar("i");

    m.readProperty("obj51", 16);

    m.readProperty("obj52", "reverse");

    m.writeProperty("obj48", "reverse");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("methods");

    m.readProperty("obj51", "length");

    m.binaryOp();

    m.readVar("es5");

    m.readProperty("obj3", "defineProperty");

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj53", "enumerable");

    m.writeProperty("obj53", "writable");

    m.writeProperty("obj53", "configurable");

    m.writeProperty("obj53", "value");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.push(false);

    m.writeProperty("obj48", "isOperational");

    m.push(false);

    m.writeVar("level");

    m.readVar("AggregateError");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj48", "toString");

    m.readVar("inherits");

    m.readVar("OperationalError");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj54", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj55", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj56", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj56", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj57", "prototype");

    m.readVar("Child");

    m.readProperty("obj57", "prototype");

    m.readVar("Error");

    m.push(false);

    m.readProperty("obj34", "__BluebirdErrorTypes__");

    m.writeVar("errorTypes");

    m.readVar("errorTypes");

    m.readVar("Objectfreeze");

    m.readVar("CancellationError");

    m.readVar("TimeoutError");

    m.readVar("OperationalError");

    m.readVar("OperationalError");

    m.readVar("AggregateError");

    m.writeProperty("obj58", "AggregateError");

    m.writeProperty("obj58", "RejectionError");

    m.writeProperty("obj58", "OperationalError");

    m.writeProperty("obj58", "TimeoutError");

    m.writeProperty("obj58", "CancellationError");

    m.push(false);

    m.functionCall("freeze", 1, 1);

    m.writeVar("errorTypes");

    m.readVar("es5");

    m.readProperty("obj3", "defineProperty");

    m.readVar("Error");

    m.push(false);

    m.readVar("errorTypes");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj59", "configurable");

    m.writeProperty("obj59", "enumerable");

    m.writeProperty("obj59", "writable");

    m.writeProperty("obj59", "value");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.readVar("module");

    m.readVar("Error");

    m.readVar("_TypeError");

    m.readVar("_RangeError");

    m.readVar("errorTypes");

    m.readProperty("obj58", "CancellationError");

    m.readVar("errorTypes");

    m.readProperty("obj58", "OperationalError");

    m.readVar("errorTypes");

    m.readProperty("obj58", "TimeoutError");

    m.readVar("errorTypes");

    m.readProperty("obj58", "AggregateError");

    m.readVar("Warning");

    m.writeProperty("obj60", "Warning");

    m.writeProperty("obj60", "AggregateError");

    m.writeProperty("obj60", "TimeoutError");

    m.writeProperty("obj60", "OperationalError");

    m.writeProperty("obj60", "CancellationError");

    m.writeProperty("obj60", "RangeError");

    m.writeProperty("obj60", "TypeError");

    m.writeProperty("obj60", "Error");

    m.push(false);

    m.writeProperty("obj61", "exports");

    m.writeVar("errors");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "TypeError");

    m.writeProperty("obj62", "TypeError");

    m.writeVar("TypeError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "RangeError");

    m.writeProperty("obj62", "RangeError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "CancellationError");

    m.writeProperty("obj62", "CancellationError");

    m.writeVar("CancellationError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "TimeoutError");

    m.writeProperty("obj62", "TimeoutError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "OperationalError");

    m.writeProperty("obj62", "OperationalError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "OperationalError");

    m.writeProperty("obj62", "RejectionError");

    m.readVar("Promise");

    m.readVar("errors");

    m.readProperty("obj60", "AggregateError");

    m.writeProperty("obj62", "AggregateError");

    m.push(false);

    m.writeVar("INTERNAL");

    m.push(false);

    m.writeVar("APPLY");

    m.push(false);

    m.writeVar("NEXT_FILTER");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj63", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("", 2, 2);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("doGetThen");

    m.initVar("getThen");

    m.initVar("isAnyBluebirdPromise");

    m.initVar("doThenable");

    m.initVar("util");

    m.initVar("errorObj");

    m.initVar("isObject");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("tryConvertToPromise");

    m.push(false);

    m.writeVar("doGetThen");

    m.push(false);

    m.writeVar("getThen");

    m.push(false);

    m.writeVar("isAnyBluebirdPromise");

    m.push(false);

    m.writeVar("doThenable");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("util");

    m.readProperty("obj13", "isObject");

    m.writeVar("isObject");

    m.push(false);

    m.readProperty("obj64", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("tryConvertToPromise");

    m.writeVar("tryConvertToPromise");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj65", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.readVar("tryConvertToPromise");

    m.readVar("apiRejection");

    m.readVar("Proxyable");

    m.functionCall("", 5, 5);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("apiRejection");

    m.initVar("Proxyable");

    m.initVar("toResolutionValue");

    m.initVar("PromiseArray");

    m.initVar("util");

    m.initVar("isArray");

    m.push(false);

    m.writeVar("toResolutionValue");

    m.push(false);

    m.writeVar("PromiseArray");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "isArray");

    m.writeVar("isArray");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("PromiseArray");

    m.readVar("Proxyable");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj66", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj67", "prototype");

    m.writeProperty("obj68", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj69", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj69", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj67", "prototype");

    m.writeProperty("obj70", "prototype");

    m.readVar("Child");

    m.readProperty("obj70", "prototype");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "length");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "promise");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_init");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_iterate");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_isResolved");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_resolve");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_cancel");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_reject");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_promiseFulfilled");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_promiseCancelled");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_promiseRejected");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "_resultCancelled");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "shouldCopyValues");

    m.readVar("PromiseArray");

    m.readProperty("obj70", "prototype");

    m.push(false);

    m.writeProperty("obj69", "getActualLength");

    m.readVar("PromiseArray");

    m.writeVar("PromiseArray");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj71", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("Context");

    m.initVar("createContext");

    m.initVar("peekContext");

    m.initVar("longStackTraces");

    m.initVar("contextStack");

    m.push(false);

    m.writeVar("Context");

    m.push(false);

    m.writeVar("createContext");

    m.push(false);

    m.writeVar("peekContext");

    m.push(false);

    m.writeVar("longStackTraces");

    m.push(false);

    m.writeVar("contextStack");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_promiseCreated");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_pushContext");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_popContext");

    m.readVar("Promise");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_peekContext");

    m.writeProperty("obj62", "_peekContext");

    m.readVar("Context");

    m.readProperty("obj73", "prototype");

    m.push(false);

    m.writeProperty("obj74", "_pushContext");

    m.readVar("Context");

    m.readProperty("obj73", "prototype");

    m.push(false);

    m.writeProperty("obj74", "_popContext");

    m.readVar("Context");

    m.push(false);

    m.writeProperty("obj73", "CapturedTrace");

    m.readVar("Context");

    m.readVar("createContext");

    m.writeProperty("obj73", "create");

    m.readVar("Context");

    m.push(false);

    m.writeProperty("obj73", "deactivateLongStackTraces");

    m.readVar("Context");

    m.push(false);

    m.writeProperty("obj73", "activateLongStackTraces");

    m.readVar("Context");

    m.writeVar("Context");

    m.readVar("Context");

    m.readProperty("obj73", "create");

    m.writeVar("createContext");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj75", "exports");

    m.readVar("Promise");

    m.readVar("Context");

    m.functionCall("", 2, 2);

    m.initVar("Promise");

    m.initVar("Context");

    m.initVar("generatePromiseLifecycleEventObject");

    m.initVar("defaultFireEvent");

    m.initVar("cancellationExecute");

    m.initVar("cancellationAttachCancellationCallback");

    m.initVar("cancellationOnCancel");

    m.initVar("cancellationSetOnCancel");

    m.initVar("cancellationClearCancellationData");

    m.initVar("cancellationPropagateFrom");

    m.initVar("bindingPropagateFrom");

    m.initVar("boundValueFunction");

    m.initVar("longStackTracesCaptureStackTrace");

    m.initVar("longStackTracesAttachExtraTrace");

    m.initVar("checkForgottenReturns");

    m.initVar("deprecated");

    m.initVar("warn");

    m.initVar("reconstructStack");

    m.initVar("removeDuplicateOrEmptyJumps");

    m.initVar("removeCommonRoots");

    m.initVar("cleanStack");

    m.initVar("stackFramesAsArray");

    m.initVar("parseStackAndMessage");

    m.initVar("formatAndLogError");

    m.initVar("fireRejectionEvent");

    m.initVar("formatNonError");

    m.initVar("snip");

    m.initVar("longStackTracesIsSupported");

    m.initVar("parseLineInfo");

    m.initVar("setBounds");

    m.initVar("CapturedTrace");

    m.initVar("getDomain");

    m.initVar("async");

    m.initVar("Warning");

    m.initVar("util");

    m.initVar("canAttachTrace");

    m.initVar("unhandledRejectionHandled");

    m.initVar("possiblyUnhandledRejection");

    m.initVar("bluebirdFramePattern");

    m.initVar("nodeFramePattern");

    m.initVar("parseLinePattern");

    m.initVar("stackFramePattern");

    m.initVar("formatStack");

    m.initVar("indentStackFrames");

    m.initVar("printWarning");

    m.initVar("debugging");

    m.initVar("warnings");

    m.initVar("longStackTraces");

    m.initVar("wForgottenReturn");

    m.initVar("disableLongStackTraces");

    m.initVar("fireDomEvent");

    m.initVar("fireGlobalEvent");

    m.initVar("eventToObjectGenerator");

    m.initVar("activeFireEvent");

    m.initVar("propagateFromFunction");

    m.initVar("shouldIgnore");

    m.initVar("parseLineInfoRegex");

    m.initVar("captureStackTrace");

    m.initVar("config");

    m.push(false);

    m.writeVar("generatePromiseLifecycleEventObject");

    m.push(false);

    m.writeVar("defaultFireEvent");

    m.push(false);

    m.writeVar("cancellationExecute");

    m.push(false);

    m.writeVar("cancellationAttachCancellationCallback");

    m.push(false);

    m.writeVar("cancellationOnCancel");

    m.push(false);

    m.writeVar("cancellationSetOnCancel");

    m.push(false);

    m.writeVar("cancellationClearCancellationData");

    m.push(false);

    m.writeVar("cancellationPropagateFrom");

    m.push(false);

    m.writeVar("bindingPropagateFrom");

    m.push(false);

    m.writeVar("boundValueFunction");

    m.push(false);

    m.writeVar("longStackTracesCaptureStackTrace");

    m.push(false);

    m.writeVar("longStackTracesAttachExtraTrace");

    m.push(false);

    m.writeVar("checkForgottenReturns");

    m.push(false);

    m.writeVar("deprecated");

    m.push(false);

    m.writeVar("warn");

    m.push(false);

    m.writeVar("reconstructStack");

    m.push(false);

    m.writeVar("removeDuplicateOrEmptyJumps");

    m.push(false);

    m.writeVar("removeCommonRoots");

    m.push(false);

    m.writeVar("cleanStack");

    m.push(false);

    m.writeVar("stackFramesAsArray");

    m.push(false);

    m.writeVar("parseStackAndMessage");

    m.push(false);

    m.writeVar("formatAndLogError");

    m.push(false);

    m.writeVar("fireRejectionEvent");

    m.push(false);

    m.writeVar("formatNonError");

    m.push(false);

    m.writeVar("snip");

    m.push(false);

    m.writeVar("longStackTracesIsSupported");

    m.push(false);

    m.writeVar("parseLineInfo");

    m.push(false);

    m.writeVar("setBounds");

    m.push(false);

    m.writeVar("CapturedTrace");

    m.readVar("Promise");

    m.readProperty("obj62", "_getDomain");

    m.writeVar("getDomain");

    m.readVar("Promise");

    m.readProperty("obj62", "_async");

    m.writeVar("async");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj60", "Warning");

    m.writeVar("Warning");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "canAttachTrace");

    m.writeVar("canAttachTrace");

    m.push(false);

    m.writeVar("bluebirdFramePattern");

    m.push(false);

    m.writeVar("nodeFramePattern");

    m.push(false);

    m.writeVar("parseLinePattern");

    m.push(false);

    m.writeVar("stackFramePattern");

    m.push(false);

    m.writeVar("formatStack");

    m.push(false);

    m.writeVar("indentStackFrames");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_DEBUG");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.push(false);

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_DEBUG");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "NODE_ENV");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.writeVar("debugging");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_WARNINGS");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("debugging");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_WARNINGS");

    m.unaryOp();

    m.unaryOp();

    m.writeVar("warnings");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_LONG_STACK_TRACES");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("debugging");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_LONG_STACK_TRACES");

    m.unaryOp();

    m.unaryOp();

    m.writeVar("longStackTraces");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_W_FORGOTTEN_RETURN");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("warnings");

    m.readVar("util");

    m.readProperty("obj13", "env");

    m.push(false);

    m.functionCall("env", 1, 1);

    m.initVar("key");

    m.readVar("hasEnvVariables");

    m.readVar("process");

    m.readProperty("obj12", "env");

    m.readVar("key");

    m.readProperty("obj76", "BLUEBIRD_W_FORGOTTEN_RETURN");

    m.unaryOp();

    m.unaryOp();

    m.writeVar("wForgottenReturn");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "suppressUnhandledRejections");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_ensurePossibleRejectionHandled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_notifyUnhandledRejectionIsHandled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setReturnedNonUndefined");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_returnedNonUndefined");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_notifyUnhandledRejection");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setUnhandledRejectionIsNotified");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_unsetUnhandledRejectionIsNotified");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isUnhandledRejectionNotified");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setRejectionIsUnhandled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_unsetRejectionIsUnhandled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isRejectionUnhandled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_warn");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "onPossiblyUnhandledRejection");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "onUnhandledRejectionHandled");

    m.push(false);

    m.writeVar("disableLongStackTraces");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "longStackTraces");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "hasLongStackTraces");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("event");

    m.readVar("CustomEvent");

    m.readVar("Event");

    m.push(false);

    m.push(false);

    m.writeVar("fireDomEvent");

    m.push(false);

    m.functionCall("", 0, 0);

    m.readVar("util");

    m.readProperty("obj13", "isNode");

    m.push(false);

    m.writeVar("fireGlobalEvent");

    m.readVar("generatePromiseLifecycleEventObject");

    m.readVar("generatePromiseLifecycleEventObject");

    m.readVar("generatePromiseLifecycleEventObject");

    m.readVar("generatePromiseLifecycleEventObject");

    m.readVar("generatePromiseLifecycleEventObject");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("generatePromiseLifecycleEventObject");

    m.writeProperty("obj77", "rejectionHandled");

    m.writeProperty("obj77", "unhandledRejection");

    m.writeProperty("obj77", "warning");

    m.writeProperty("obj77", "promiseChained");

    m.writeProperty("obj77", "promiseCancelled");

    m.writeProperty("obj77", "promiseResolved");

    m.writeProperty("obj77", "promiseRejected");

    m.writeProperty("obj77", "promiseFulfilled");

    m.writeProperty("obj77", "promiseCreated");

    m.push(false);

    m.writeVar("eventToObjectGenerator");

    m.push(false);

    m.writeVar("activeFireEvent");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "config");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.readVar("defaultFireEvent");

    m.writeProperty("obj72", "_fireEvent");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_execute");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_onCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setOnCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_attachCancellationCallback");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_captureStackTrace");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_attachExtraTrace");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_clearCancellationData");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_propagateFrom");

    m.readVar("bindingPropagateFrom");

    m.writeVar("propagateFromFunction");

    m.push(false);

    m.writeVar("shouldIgnore");

    m.push(false);

    m.writeVar("parseLineInfoRegex");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("CapturedTrace");

    m.readVar("Error");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj78", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj79", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj80", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj80", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj34", "prototype");

    m.writeProperty("obj81", "prototype");

    m.readVar("Child");

    m.readProperty("obj81", "prototype");

    m.readVar("Context");

    m.readVar("CapturedTrace");

    m.writeProperty("obj73", "CapturedTrace");

    m.readVar("CapturedTrace");

    m.readProperty("obj81", "prototype");

    m.push(false);

    m.writeProperty("obj80", "uncycle");

    m.readVar("CapturedTrace");

    m.readProperty("obj81", "prototype");

    m.push(false);

    m.writeProperty("obj80", "attachExtraTrace");

    m.push(false);

    m.push(false);

    m.functionCall("stackDetection", 0, 1);

    m.initVar("v8stackFramePattern");

    m.initVar("v8stackFormatter");

    m.initVar("captureStackTrace");

    m.initVar("err");

    m.initVar("hasStackAfterThrow");

    m.push(false);

    m.writeVar("v8stackFramePattern");

    m.push(false);

    m.writeVar("v8stackFormatter");

    m.readVar("Error");

    m.readProperty("obj34", "stackTraceLimit");

    m.readVar("Error");

    m.readProperty("obj34", "captureStackTrace");

    m.readVar("Error");

    m.readProperty("obj34", "stackTraceLimit");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj34", "stackTraceLimit");

    m.readVar("v8stackFramePattern");

    m.writeVar("stackFramePattern");

    m.readVar("v8stackFormatter");

    m.writeVar("formatStack");

    m.readVar("Error");

    m.readProperty("obj34", "captureStackTrace");

    m.writeVar("captureStackTrace");

    m.push(false);

    m.writeVar("shouldIgnore");

    m.push(false);

    m.writeVar("captureStackTrace");

    m.readVar("console");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj82", "warn");

    m.unaryOp();

    m.push(false);

    m.writeVar("printWarning");

    m.readVar("util");

    m.readProperty("obj13", "isNode");

    m.readVar("process");

    m.readProperty("obj12", "stderr");

    m.readProperty("obj83", "isTTY");

    m.readVar("util");

    m.readProperty("obj13", "isNode");

    m.unaryOp();

    m.readVar("warnings");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj84", "monitoring");

    m.writeProperty("obj84", "cancellation");

    m.writeProperty("obj84", "longStackTraces");

    m.writeProperty("obj84", "warnings");

    m.push(false);

    m.writeVar("config");

    m.readVar("longStackTraces");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("checkForgottenReturns");

    m.readVar("setBounds");

    m.readVar("warn");

    m.readVar("deprecated");

    m.readVar("CapturedTrace");

    m.readVar("fireDomEvent");

    m.readVar("fireGlobalEvent");

    m.writeProperty("obj85", "fireGlobalEvent");

    m.writeProperty("obj85", "fireDomEvent");

    m.writeProperty("obj85", "CapturedTrace");

    m.writeProperty("obj85", "deprecated");

    m.writeProperty("obj85", "warn");

    m.writeProperty("obj85", "setBounds");

    m.writeProperty("obj85", "checkForgottenReturns");

    m.writeProperty("obj85", "boundValueFunction");

    m.writeProperty("obj85", "propagateFromFunction");

    m.writeProperty("obj85", "monitoring");

    m.writeProperty("obj85", "cancellation");

    m.writeProperty("obj85", "warnings");

    m.writeProperty("obj85", "longStackTraces");

    m.push(false);

    m.writeVar("debug");

    m.readVar("debug");

    m.readProperty("obj85", "CapturedTrace");

    m.writeVar("CapturedTrace");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj86", "exports");

    m.readVar("Promise");

    m.readVar("tryConvertToPromise");

    m.readVar("NEXT_FILTER");

    m.functionCall("", 3, 3);

    m.initVar("Promise");

    m.initVar("tryConvertToPromise");

    m.initVar("NEXT_FILTER");

    m.initVar("PassThroughHandlerContext");

    m.initVar("FinallyHandlerCancelReaction");

    m.initVar("checkCancel");

    m.initVar("succeed");

    m.initVar("fail");

    m.initVar("finallyHandler");

    m.initVar("util");

    m.initVar("CancellationError");

    m.initVar("errorObj");

    m.initVar("catchFilter");

    m.push(false);

    m.writeVar("PassThroughHandlerContext");

    m.push(false);

    m.writeVar("FinallyHandlerCancelReaction");

    m.push(false);

    m.writeVar("checkCancel");

    m.push(false);

    m.writeVar("succeed");

    m.push(false);

    m.writeVar("fail");

    m.push(false);

    m.writeVar("finallyHandler");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("Promise");

    m.readProperty("obj62", "CancellationError");

    m.writeVar("CancellationError");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj87", "exports");

    m.readVar("NEXT_FILTER");

    m.functionCall("", 1, 1);

    m.initVar("NEXT_FILTER");

    m.initVar("catchFilter");

    m.initVar("util");

    m.initVar("getKeys");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.push(false);

    m.writeVar("catchFilter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj3", "keys");

    m.writeVar("getKeys");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("catchFilter");

    m.writeVar("catchFilter");

    m.readVar("PassThroughHandlerContext");

    m.readProperty("obj88", "prototype");

    m.push(false);

    m.writeProperty("obj89", "isFinallyHandler");

    m.readVar("FinallyHandlerCancelReaction");

    m.readProperty("obj90", "prototype");

    m.push(false);

    m.writeProperty("obj91", "_resultCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_passThrough");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.push(false);

    m.writeProperty("obj72", "finally");

    m.writeProperty("obj72", "lastly");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "tap");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "tapCatch");

    m.readVar("PassThroughHandlerContext");

    m.writeVar("PassThroughHandlerContext");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readVar("NEXT_FILTER");

    m.functionCall("", 1, 1);

    m.initVar("NEXT_FILTER");

    m.initVar("catchFilter");

    m.initVar("util");

    m.initVar("getKeys");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.push(false);

    m.writeVar("catchFilter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj3", "keys");

    m.writeVar("getKeys");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("catchFilter");

    m.writeVar("catchFilter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isUntypedError");

    m.initVar("wrapAsOperationalError");

    m.initVar("nodebackForPromise");

    m.initVar("util");

    m.initVar("maybeWrapAsError");

    m.initVar("errors");

    m.initVar("OperationalError");

    m.initVar("es5");

    m.initVar("rErrorKey");

    m.push(false);

    m.writeVar("isUntypedError");

    m.push(false);

    m.writeVar("wrapAsOperationalError");

    m.push(false);

    m.writeVar("nodebackForPromise");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "maybeWrapAsError");

    m.writeVar("maybeWrapAsError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("errors");

    m.readVar("errors");

    m.readProperty("obj60", "OperationalError");

    m.writeVar("OperationalError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("es5");

    m.push(false);

    m.writeVar("rErrorKey");

    m.readVar("module");

    m.readVar("nodebackForPromise");

    m.writeProperty("obj92", "exports");

    m.writeVar("nodebackForPromise");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "toString");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.push(false);

    m.writeProperty("obj72", "catch");

    m.writeProperty("obj72", "caught");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "reflect");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "then");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "done");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "spread");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "toJSON");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "all");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "error");

    m.readVar("Promise");

    m.readVar("module");

    m.readProperty("obj0", "exports");

    m.writeProperty("obj62", "getNewLibraryCopy");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "is");

    m.readVar("Promise");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "fromCallback");

    m.writeProperty("obj62", "fromNode");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "all");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "cast");

    m.readVar("Promise");

    m.readVar("Promise");

    m.readVar("Promise");

    m.readProperty("obj62", "cast");

    m.writeProperty("obj62", "fulfilled");

    m.writeProperty("obj62", "resolve");

    m.readVar("Promise");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "rejected");

    m.writeProperty("obj62", "reject");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "setScheduler");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_then");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_length");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isFateSealed");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isFollowing");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setLength");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setFulfilled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setRejected");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setFollowing");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setIsFinal");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isFinal");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_unsetCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setWillBeCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setAsyncGuaranteed");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_receiverAt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_promiseAt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_fulfillmentHandlerAt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_rejectionHandlerAt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_boundValue");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_migrateCallback0");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_migrateCallbackAt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_addCallbacks");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_proxy");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_resolveCallback");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_rejectCallback");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_resolveFromExecutor");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromiseFromHandler");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_target");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_followee");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setFollowee");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromise");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromiseLateCancellationObserver");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromiseCtx");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromise0");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_clearCallbackDataAtIndex");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_fulfill");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_reject");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_fulfillPromises");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_rejectPromises");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settlePromises");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_settledValue");

    m.readVar("Promise");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "pending");

    m.writeProperty("obj62", "defer");

    m.readVar("util");

    m.readProperty("obj13", "notEnumerableProp");

    m.readVar("Promise");

    m.push(false);

    m.readVar("makeSelfResolutionError");

    m.functionCall("notEnumerableProp", 3, 3);

    m.initVar("obj");

    m.initVar("name");

    m.initVar("value");

    m.initVar("descriptor");

    m.readVar("isPrimitive");

    m.readVar("obj");

    m.functionCall("isPrimitive", 1, 1);

    m.initVar("val");

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.push(false);

    m.binaryOp();

    m.readVar("val");

    m.readVar("val");

    m.readVar("value");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj93", "writable");

    m.writeProperty("obj93", "enumerable");

    m.writeProperty("obj93", "configurable");

    m.writeProperty("obj93", "value");

    m.push(false);

    m.writeVar("descriptor");

    m.readVar("es5");

    m.readProperty("obj3", "defineProperty");

    m.readVar("obj");

    m.readVar("name");

    m.readVar("descriptor");

    m.functionCall("defineProperty", 3, 3);

    m.readVar("obj");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj94", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.readVar("tryConvertToPromise");

    m.readVar("apiRejection");

    m.readVar("debug");

    m.functionCall("", 5, 5);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("apiRejection");

    m.initVar("debug");

    m.initVar("util");

    m.initVar("tryCatch");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "method");

    m.readVar("Promise");

    m.readVar("Promise");

    m.push(false);

    m.push(false);

    m.writeProperty("obj62", "try");

    m.writeProperty("obj62", "attempt");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_resolveFromSyncValue");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj95", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.readVar("tryConvertToPromise");

    m.readVar("debug");

    m.functionCall("", 4, 4);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("debug");

    m.initVar("calledBind");

    m.initVar("rejectThis");

    m.initVar("targetRejected");

    m.initVar("bindingResolved");

    m.initVar("bindingRejected");

    m.push(false);

    m.writeVar("calledBind");

    m.push(false);

    m.writeVar("rejectThis");

    m.push(false);

    m.writeVar("targetRejected");

    m.push(false);

    m.writeVar("bindingResolved");

    m.push(false);

    m.writeVar("bindingRejected");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "bind");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setBoundTo");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isBound");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "bind");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj96", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("apiRejection");

    m.readVar("debug");

    m.functionCall("", 4, 4);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("apiRejection");

    m.initVar("debug");

    m.initVar("util");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("async");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("Promise");

    m.readProperty("obj62", "_async");

    m.writeVar("async");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "cancel");

    m.writeProperty("obj72", "break");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_branchHasCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_enoughBranchesHaveCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_cancelBy");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_cancelBranched");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_cancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_cancelPromises");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_unsetOnCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isCancellable");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isCancellable");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_doInvokeOnCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_invokeOnCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_invokeInternalOnCancel");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_resultCancelled");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj97", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("returner");

    m.initVar("thrower");

    m.push(false);

    m.writeVar("returner");

    m.push(false);

    m.writeVar("thrower");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "thenReturn");

    m.writeProperty("obj72", "return");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "thenThrow");

    m.writeProperty("obj72", "throw");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "catchThrow");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "catchReturn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj98", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("PromiseInspection");

    m.initVar("value");

    m.initVar("reason");

    m.initVar("isFulfilled");

    m.initVar("isRejected");

    m.initVar("isPending");

    m.initVar("isResolved");

    m.push(false);

    m.writeVar("PromiseInspection");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "_settledValue");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "value");

    m.writeVar("value");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "reason");

    m.writeProperty("obj100", "error");

    m.writeVar("reason");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "isFulfilled");

    m.writeVar("isFulfilled");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "isRejected");

    m.writeVar("isRejected");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "isPending");

    m.writeVar("isPending");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "isResolved");

    m.writeVar("isResolved");

    m.readVar("PromiseInspection");

    m.readProperty("obj99", "prototype");

    m.push(false);

    m.writeProperty("obj100", "isCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "__isCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isCancelled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isPending");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isRejected");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isFulfilled");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "isResolved");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "value");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "reason");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_value");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_reason");

    m.readVar("Promise");

    m.readVar("PromiseInspection");

    m.writeProperty("obj62", "PromiseInspection");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj101", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("tryConvertToPromise");

    m.readVar("INTERNAL");

    m.readVar("async");

    m.readVar("getDomain");

    m.functionCall("", 6, 6);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("tryConvertToPromise");

    m.initVar("INTERNAL");

    m.initVar("async");

    m.initVar("getDomain");

    m.initVar("util");

    m.initVar("canEvaluate");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("reject");

    m.initVar("thenCallback");

    m.initVar("promiseSetter");

    m.initVar("generateHolderClass");

    m.initVar("holderClasses");

    m.initVar("thenCallbacks");

    m.initVar("promiseSetters");

    m.initVar("i");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "canEvaluate");

    m.writeVar("canEvaluate");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.push(false);

    m.readVar("canEvaluate");

    m.push(false);

    m.writeVar("thenCallback");

    m.push(false);

    m.writeVar("promiseSetter");

    m.push(false);

    m.writeVar("generateHolderClass");

    m.push(false);

    m.writeVar("holderClasses");

    m.push(false);

    m.writeVar("thenCallbacks");

    m.push(false);

    m.writeVar("promiseSetters");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj103", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj103", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj103", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj103", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj103", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj104", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj103", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj106", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj107", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj108", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj109", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$1");

    m.push(false);

    m.writeVar("Holder$1");

    m.push(false);

    m.readVar("Holder$1");

    m.readProperty("obj110", "prototype");

    m.push(false);

    m.writeProperty("obj111", "_callFunction");

    m.readVar("Holder$1");

    m.readProperty("obj110", "prototype");

    m.push(false);

    m.writeProperty("obj111", "checkFulfillment");

    m.readVar("Holder$1");

    m.readProperty("obj110", "prototype");

    m.push(false);

    m.writeProperty("obj111", "_resultCancelled");

    m.readVar("Holder$1");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj116", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj116", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj116", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj116", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj116", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj116", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj116", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj117", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj116", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj118", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj119", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj120", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj121", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$2");

    m.push(false);

    m.writeVar("Holder$2");

    m.push(false);

    m.readVar("Holder$2");

    m.readProperty("obj122", "prototype");

    m.push(false);

    m.writeProperty("obj123", "_callFunction");

    m.readVar("Holder$2");

    m.readProperty("obj122", "prototype");

    m.push(false);

    m.writeProperty("obj123", "checkFulfillment");

    m.readVar("Holder$2");

    m.readProperty("obj122", "prototype");

    m.push(false);

    m.writeProperty("obj123", "_resultCancelled");

    m.readVar("Holder$2");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj124", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj124", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj124", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj124", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj124", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj124", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj124", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj124", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj124", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj125", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj124", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj126", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj127", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj128", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj129", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$3");

    m.push(false);

    m.writeVar("Holder$3");

    m.push(false);

    m.readVar("Holder$3");

    m.readProperty("obj130", "prototype");

    m.push(false);

    m.writeProperty("obj131", "_callFunction");

    m.readVar("Holder$3");

    m.readProperty("obj130", "prototype");

    m.push(false);

    m.writeProperty("obj131", "checkFulfillment");

    m.readVar("Holder$3");

    m.readProperty("obj130", "prototype");

    m.push(false);

    m.writeProperty("obj131", "_resultCancelled");

    m.readVar("Holder$3");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj132", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj132", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj132", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj132", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj132", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj132", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj132", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj132", 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj132", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj132", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj132", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj133", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj132", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj134", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj135", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj136", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj137", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$4");

    m.push(false);

    m.writeVar("Holder$4");

    m.push(false);

    m.readVar("Holder$4");

    m.readProperty("obj138", "prototype");

    m.push(false);

    m.writeProperty("obj139", "_callFunction");

    m.readVar("Holder$4");

    m.readProperty("obj138", "prototype");

    m.push(false);

    m.writeProperty("obj139", "checkFulfillment");

    m.readVar("Holder$4");

    m.readProperty("obj138", "prototype");

    m.push(false);

    m.writeProperty("obj139", "_resultCancelled");

    m.readVar("Holder$4");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj140", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj140", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj140", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj140", 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj140", 4);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj140", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj140", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj140", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj141", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj140", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj142", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj143", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj144", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj145", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$5");

    m.push(false);

    m.writeVar("Holder$5");

    m.push(false);

    m.readVar("Holder$5");

    m.readProperty("obj146", "prototype");

    m.push(false);

    m.writeProperty("obj147", "_callFunction");

    m.readVar("Holder$5");

    m.readProperty("obj146", "prototype");

    m.push(false);

    m.writeProperty("obj147", "checkFulfillment");

    m.readVar("Holder$5");

    m.readProperty("obj146", "prototype");

    m.push(false);

    m.writeProperty("obj147", "_resultCancelled");

    m.readVar("Holder$5");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 4);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj148", 5);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj148", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj148", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj148", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj149", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj148", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj150", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj151", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj152", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj153", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$6");

    m.push(false);

    m.writeVar("Holder$6");

    m.push(false);

    m.readVar("Holder$6");

    m.readProperty("obj154", "prototype");

    m.push(false);

    m.writeProperty("obj155", "_callFunction");

    m.readVar("Holder$6");

    m.readProperty("obj154", "prototype");

    m.push(false);

    m.writeProperty("obj155", "checkFulfillment");

    m.readVar("Holder$6");

    m.readProperty("obj154", "prototype");

    m.push(false);

    m.writeProperty("obj155", "_resultCancelled");

    m.readVar("Holder$6");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 4);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 5);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj156", 6);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj156", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj156", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj156", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj157", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj156", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj158", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj159", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj160", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj161", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$7");

    m.push(false);

    m.writeVar("Holder$7");

    m.push(false);

    m.readVar("Holder$7");

    m.readProperty("obj162", "prototype");

    m.push(false);

    m.writeProperty("obj163", "_callFunction");

    m.readVar("Holder$7");

    m.readProperty("obj162", "prototype");

    m.push(false);

    m.writeProperty("obj163", "checkFulfillment");

    m.readVar("Holder$7");

    m.readProperty("obj162", "prototype");

    m.push(false);

    m.writeProperty("obj163", "_resultCancelled");

    m.readVar("Holder$7");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("holderClasses");

    m.readProperty("obj102", "push");

    m.readVar("generateHolderClass");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("generateHolderClass", 1, 1);

    m.initVar("total");

    m.initVar("props");

    m.initVar("i");

    m.initVar("assignment");

    m.initVar("cancellationCode");

    m.initVar("passedArguments");

    m.initVar("name");

    m.initVar("code");

    m.readVar("Array");

    m.readVar("total");

    m.functionCall("Array", 1, 1);

    m.writeVar("props");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 2);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 3);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 4);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 5);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 6);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readVar("i");

    m.push(false);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj164", 7);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("props");

    m.readProperty("obj164", "length");

    m.binaryOp();

    m.readVar("props");

    m.readProperty("obj164", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("assignment");

    m.push(false);

    m.readVar("props");

    m.readProperty("obj164", "map");

    m.push(false);

    m.functionCall("map", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.initVar("prop");

    m.push(false);

    m.readVar("prop");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj165", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.writeVar("cancellationCode");

    m.readVar("props");

    m.readProperty("obj164", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.writeVar("passedArguments");

    m.push(false);

    m.readVar("total");

    m.binaryOp();

    m.writeVar("name");

    m.push(false);

    m.writeVar("code");

    m.readVar("code");

    m.readProperty("obj105", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj166", "replace");

    m.push(false);

    m.readVar("total");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj167", "replace");

    m.push(false);

    m.readVar("passedArguments");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj168", "replace");

    m.push(false);

    m.readVar("assignment");

    m.functionCall("replace", 2, 2);

    m.readProperty("obj169", "replace");

    m.push(false);

    m.readVar("cancellationCode");

    m.functionCall("replace", 2, 2);

    m.writeVar("code");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("code");

    m.functionCall("Function", 1, 5);

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("anonymous", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.push(false);

    m.readVar("tryCatch");

    m.readVar("errorObj");

    m.readVar("Promise");

    m.readVar("async");

    m.functionCall("", 4, 4);

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("Promise");

    m.initVar("async");

    m.initVar("Holder$8");

    m.push(false);

    m.writeVar("Holder$8");

    m.push(false);

    m.readVar("Holder$8");

    m.readProperty("obj170", "prototype");

    m.push(false);

    m.writeProperty("obj171", "_callFunction");

    m.readVar("Holder$8");

    m.readProperty("obj170", "prototype");

    m.push(false);

    m.writeProperty("obj171", "checkFulfillment");

    m.readVar("Holder$8");

    m.readProperty("obj170", "prototype");

    m.push(false);

    m.writeProperty("obj171", "_resultCancelled");

    m.readVar("Holder$8");

    m.functionCall("push", 1, 1);

    m.readVar("thenCallbacks");

    m.readProperty("obj112", "push");

    m.readVar("thenCallback");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("thenCallback", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj113", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("promiseSetters");

    m.readProperty("obj114", "push");

    m.readVar("promiseSetter");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.functionCall("promiseSetter", 1, 1);

    m.initVar("i");

    m.readVar("Function");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj115", "replace");

    m.push(false);

    m.readVar("i");

    m.functionCall("replace", 2, 2);

    m.functionCall("Function", 1, 3);

    m.push(false);

    m.functionCall("push", 1, 1);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("reject");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "join");

    m.readVar("Promise");

    m.readVar("Promise");

    m.writeProperty("obj62", "Promise");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "version");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj172", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("apiRejection");

    m.readVar("tryConvertToPromise");

    m.readVar("INTERNAL");

    m.readVar("debug");

    m.functionCall("", 6, 6);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("apiRejection");

    m.initVar("tryConvertToPromise");

    m.initVar("INTERNAL");

    m.initVar("debug");

    m.initVar("MappingPromiseArray");

    m.initVar("map");

    m.initVar("getDomain");

    m.initVar("util");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.initVar("async");

    m.push(false);

    m.writeVar("MappingPromiseArray");

    m.push(false);

    m.writeVar("map");

    m.readVar("Promise");

    m.readProperty("obj62", "_getDomain");

    m.writeVar("getDomain");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("Promise");

    m.readProperty("obj62", "_async");

    m.writeVar("async");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("MappingPromiseArray");

    m.readVar("PromiseArray");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj173", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeProperty("obj174", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj175", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj175", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj177", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj177", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "constructor");

    m.writeProperty("obj175", "constructor$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj178", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj178", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj179", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj179", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "length");

    m.writeProperty("obj175", "length$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "promise");

    m.writeProperty("obj175", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj181", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj181", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_init");

    m.writeProperty("obj175", "_init$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj182", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj182", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_iterate");

    m.writeProperty("obj175", "_iterate$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj183", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj183", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_isResolved");

    m.writeProperty("obj175", "_isResolved$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj184", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj184", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resolve");

    m.writeProperty("obj175", "_resolve$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj185", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj185", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_cancel");

    m.writeProperty("obj175", "_cancel$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj186", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj186", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_reject");

    m.writeProperty("obj175", "_reject$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj187", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj187", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseFulfilled");

    m.writeProperty("obj175", "_promiseFulfilled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj188", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj188", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseCancelled");

    m.writeProperty("obj175", "_promiseCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj189", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj189", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseRejected");

    m.writeProperty("obj175", "_promiseRejected$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj190", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj190", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resultCancelled");

    m.writeProperty("obj175", "_resultCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj191", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj191", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "shouldCopyValues");

    m.writeProperty("obj175", "shouldCopyValues$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj192", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj192", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "getActualLength");

    m.writeProperty("obj175", "getActualLength$");

    m.writeProperty("obj193", "prototype");

    m.readVar("Child");

    m.readProperty("obj193", "prototype");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "_asyncInit");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "_init");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "_promiseFulfilled");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "_drainQueue");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "_filter");

    m.readVar("MappingPromiseArray");

    m.readProperty("obj193", "prototype");

    m.push(false);

    m.writeProperty("obj175", "preservedValues");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "map");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "map");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("cr");

    m.initVar("callerCache");

    m.initVar("getterCache");

    m.push(false);

    m.readVar("Object");

    m.readProperty("obj1", "create");

    m.writeVar("cr");

    m.readVar("cr");

    m.readVar("cr");

    m.push(false);

    m.functionCall("create", 2, 1);

    m.writeVar("callerCache");

    m.readVar("cr");

    m.push(false);

    m.functionCall("create", 2, 1);

    m.writeVar("getterCache");

    m.readVar("callerCache");

    m.push(false);

    m.readVar("getterCache");

    m.push(false);

    m.push(false);

    m.writeProperty("obj194", " size");

    m.writeProperty("obj195", " size");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj196", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("ensureMethod");

    m.initVar("caller");

    m.initVar("namedGetter");

    m.initVar("indexedGetter");

    m.initVar("util");

    m.initVar("canEvaluate");

    m.initVar("isIdentifier");

    m.initVar("getMethodCaller");

    m.initVar("getGetter");

    m.initVar("makeMethodCaller");

    m.initVar("makeGetter");

    m.initVar("getCompiled");

    m.push(false);

    m.writeVar("ensureMethod");

    m.push(false);

    m.writeVar("caller");

    m.push(false);

    m.writeVar("namedGetter");

    m.push(false);

    m.writeVar("indexedGetter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "canEvaluate");

    m.writeVar("canEvaluate");

    m.readVar("util");

    m.readProperty("obj13", "isIdentifier");

    m.writeVar("isIdentifier");

    m.push(false);

    m.push(false);

    m.writeVar("makeMethodCaller");

    m.push(false);

    m.writeVar("makeGetter");

    m.push(false);

    m.writeVar("getCompiled");

    m.push(false);

    m.writeVar("getMethodCaller");

    m.push(false);

    m.writeVar("getGetter");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "call");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "get");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj197", "exports");

    m.readVar("Promise");

    m.readVar("apiRejection");

    m.readVar("tryConvertToPromise");

    m.readVar("createContext");

    m.readVar("INTERNAL");

    m.readVar("debug");

    m.functionCall("", 6, 6);

    m.initVar("Promise");

    m.initVar("apiRejection");

    m.initVar("tryConvertToPromise");

    m.initVar("createContext");

    m.initVar("INTERNAL");

    m.initVar("debug");

    m.initVar("thrower");

    m.initVar("castPreservingDisposable");

    m.initVar("dispose");

    m.initVar("Disposer");

    m.initVar("FunctionDisposer");

    m.initVar("maybeUnwrapDisposer");

    m.initVar("ResourceList");

    m.initVar("util");

    m.initVar("TypeError");

    m.initVar("inherits");

    m.initVar("errorObj");

    m.initVar("tryCatch");

    m.initVar("NULL");

    m.push(false);

    m.writeVar("thrower");

    m.push(false);

    m.writeVar("castPreservingDisposable");

    m.push(false);

    m.writeVar("dispose");

    m.push(false);

    m.writeVar("Disposer");

    m.push(false);

    m.writeVar("FunctionDisposer");

    m.push(false);

    m.writeVar("maybeUnwrapDisposer");

    m.push(false);

    m.writeVar("ResourceList");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj60", "TypeError");

    m.writeVar("TypeError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj13", "inherits");

    m.writeVar("inherits");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.push(false);

    m.writeVar("NULL");

    m.readVar("Disposer");

    m.readProperty("obj198", "prototype");

    m.push(false);

    m.writeProperty("obj199", "data");

    m.readVar("Disposer");

    m.readProperty("obj198", "prototype");

    m.push(false);

    m.writeProperty("obj199", "promise");

    m.readVar("Disposer");

    m.readProperty("obj198", "prototype");

    m.push(false);

    m.writeProperty("obj199", "resource");

    m.readVar("Disposer");

    m.readProperty("obj198", "prototype");

    m.push(false);

    m.writeProperty("obj199", "tryDispose");

    m.readVar("Disposer");

    m.push(false);

    m.writeProperty("obj198", "isDisposer");

    m.readVar("inherits");

    m.readVar("FunctionDisposer");

    m.readVar("Disposer");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj200", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.writeProperty("obj201", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj202", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj202", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj203", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj203", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj199", "data");

    m.writeProperty("obj202", "data$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj199", "promise");

    m.writeProperty("obj202", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj204", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj204", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj199", "resource");

    m.writeProperty("obj202", "resource$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj205", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj205", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj198", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj199", "tryDispose");

    m.writeProperty("obj202", "tryDispose$");

    m.writeProperty("obj206", "prototype");

    m.readVar("Child");

    m.readProperty("obj206", "prototype");

    m.readVar("FunctionDisposer");

    m.readProperty("obj206", "prototype");

    m.push(false);

    m.writeProperty("obj202", "doDispose");

    m.readVar("ResourceList");

    m.readProperty("obj207", "prototype");

    m.push(false);

    m.writeProperty("obj208", "_resultCancelled");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "using");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_setDisposable");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_isDisposable");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_getDisposer");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "_unsetDisposable");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "disposer");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj209", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.readVar("debug");

    m.functionCall("", 3, 3);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("debug");

    m.initVar("HandleWrapper");

    m.initVar("successClear");

    m.initVar("failureClear");

    m.initVar("util");

    m.initVar("TimeoutError");

    m.initVar("afterValue");

    m.initVar("delay");

    m.initVar("afterTimeout");

    m.push(false);

    m.writeVar("HandleWrapper");

    m.push(false);

    m.writeVar("successClear");

    m.push(false);

    m.writeVar("failureClear");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("Promise");

    m.readProperty("obj62", "TimeoutError");

    m.writeVar("TimeoutError");

    m.readVar("HandleWrapper");

    m.readProperty("obj210", "prototype");

    m.push(false);

    m.writeProperty("obj211", "_resultCancelled");

    m.push(false);

    m.writeVar("afterValue");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "delay");

    m.writeVar("delay");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "delay");

    m.push(false);

    m.writeVar("afterTimeout");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "timeout");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj212", "exports");

    m.readVar("Promise");

    m.readVar("apiRejection");

    m.readVar("INTERNAL");

    m.readVar("tryConvertToPromise");

    m.readVar("Proxyable");

    m.readVar("debug");

    m.functionCall("", 6, 6);

    m.initVar("Promise");

    m.initVar("apiRejection");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("Proxyable");

    m.initVar("debug");

    m.initVar("promiseFromYieldHandler");

    m.initVar("PromiseSpawn");

    m.initVar("errors");

    m.initVar("TypeError");

    m.initVar("util");

    m.initVar("errorObj");

    m.initVar("tryCatch");

    m.initVar("yieldHandlers");

    m.push(false);

    m.writeVar("promiseFromYieldHandler");

    m.push(false);

    m.writeVar("PromiseSpawn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("errors");

    m.readVar("errors");

    m.readProperty("obj60", "TypeError");

    m.writeVar("TypeError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.push(false);

    m.writeVar("yieldHandlers");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("PromiseSpawn");

    m.readVar("Proxyable");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj213", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj67", "prototype");

    m.writeProperty("obj214", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj215", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj215", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj67", "prototype");

    m.writeProperty("obj216", "prototype");

    m.readVar("Child");

    m.readProperty("obj216", "prototype");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_isResolved");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_cleanup");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_promiseCancelled");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_promiseFulfilled");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_promiseRejected");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_resultCancelled");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "promise");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_run");

    m.readVar("PromiseSpawn");

    m.readProperty("obj216", "prototype");

    m.push(false);

    m.writeProperty("obj215", "_continue");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "coroutine");

    m.readVar("Promise");

    m.readProperty("obj62", "coroutine");

    m.push(false);

    m.writeProperty("obj217", "addYieldHandler");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "spawn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj218", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("spreadAdapter");

    m.initVar("successAdapter");

    m.initVar("errorAdapter");

    m.initVar("util");

    m.initVar("async");

    m.initVar("tryCatch");

    m.initVar("errorObj");

    m.push(false);

    m.writeVar("spreadAdapter");

    m.push(false);

    m.writeVar("successAdapter");

    m.push(false);

    m.writeVar("errorAdapter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("Promise");

    m.readProperty("obj62", "_async");

    m.writeVar("async");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "errorObj");

    m.writeVar("errorObj");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "nodeify");

    m.writeProperty("obj72", "asCallback");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj219", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("", 2, 2);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("propsFilter");

    m.initVar("isPromisified");

    m.initVar("hasPromisified");

    m.initVar("checkValid");

    m.initVar("promisifiableMethods");

    m.initVar("makeNodePromisifiedClosure");

    m.initVar("promisifyAll");

    m.initVar("promisify");

    m.initVar("THIS");

    m.initVar("util");

    m.initVar("nodebackForPromise");

    m.initVar("withAppended");

    m.initVar("maybeWrapAsError");

    m.initVar("canEvaluate");

    m.initVar("TypeError");

    m.initVar("defaultSuffix");

    m.initVar("defaultPromisified");

    m.initVar("noCopyProps");

    m.initVar("noCopyPropsPattern");

    m.initVar("defaultFilter");

    m.initVar("escapeIdentRegex");

    m.initVar("makeNodePromisifiedEval");

    m.initVar("switchCaseArgumentOrder");

    m.initVar("argumentSequence");

    m.initVar("parameterDeclaration");

    m.initVar("parameterCount");

    m.initVar("makeNodePromisified");

    m.push(false);

    m.writeVar("propsFilter");

    m.push(false);

    m.writeVar("isPromisified");

    m.push(false);

    m.writeVar("hasPromisified");

    m.push(false);

    m.writeVar("checkValid");

    m.push(false);

    m.writeVar("promisifiableMethods");

    m.push(false);

    m.writeVar("makeNodePromisifiedClosure");

    m.push(false);

    m.writeVar("promisifyAll");

    m.push(false);

    m.writeVar("promisify");

    m.push(false);

    m.writeVar("THIS");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("nodebackForPromise");

    m.readVar("util");

    m.readProperty("obj13", "withAppended");

    m.writeVar("withAppended");

    m.readVar("util");

    m.readProperty("obj13", "maybeWrapAsError");

    m.writeVar("maybeWrapAsError");

    m.readVar("util");

    m.readProperty("obj13", "canEvaluate");

    m.writeVar("canEvaluate");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj60", "TypeError");

    m.writeVar("TypeError");

    m.push(false);

    m.writeVar("defaultSuffix");

    m.push(false);

    m.writeProperty("obj220", "__isPromisified__");

    m.push(false);

    m.writeVar("defaultPromisified");

    m.writeProperty("obj221", "7");

    m.writeProperty("obj221", "6");

    m.writeProperty("obj221", "5");

    m.writeProperty("obj221", "4");

    m.writeProperty("obj221", "3");

    m.writeProperty("obj221", "2");

    m.writeProperty("obj221", "1");

    m.writeProperty("obj221", "0");

    m.push(false);

    m.writeVar("noCopyProps");

    m.readVar("RegExp");

    m.push(false);

    m.readVar("noCopyProps");

    m.readProperty("obj221", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.functionCall("RegExp", 2, 1);

    m.writeVar("noCopyPropsPattern");

    m.push(false);

    m.writeVar("defaultFilter");

    m.push(false);

    m.writeVar("escapeIdentRegex");

    m.push(false);

    m.push(false);

    m.writeVar("switchCaseArgumentOrder");

    m.push(false);

    m.writeVar("argumentSequence");

    m.push(false);

    m.writeVar("parameterDeclaration");

    m.push(false);

    m.writeVar("parameterCount");

    m.push(false);

    m.writeVar("makeNodePromisifiedEval");

    m.readVar("canEvaluate");

    m.readVar("makeNodePromisifiedEval");

    m.writeVar("makeNodePromisified");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "promisify");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "promisifyAll");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj222", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("tryConvertToPromise");

    m.readVar("apiRejection");

    m.functionCall("", 4, 4);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("tryConvertToPromise");

    m.initVar("apiRejection");

    m.initVar("PropertiesPromiseArray");

    m.initVar("props");

    m.initVar("util");

    m.initVar("isObject");

    m.initVar("es5");

    m.initVar("Es6Map");

    m.initVar("mapToEntries");

    m.initVar("entriesToMap");

    m.push(false);

    m.writeVar("PropertiesPromiseArray");

    m.push(false);

    m.writeVar("props");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "isObject");

    m.writeVar("isObject");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("es5");

    m.readVar("Map");

    m.unaryOp();

    m.readVar("Map");

    m.writeVar("Es6Map");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("extractEntry");

    m.initVar("index");

    m.initVar("size");

    m.push(false);

    m.writeVar("extractEntry");

    m.push(false);

    m.writeVar("index");

    m.push(false);

    m.writeVar("size");

    m.push(false);

    m.writeVar("mapToEntries");

    m.push(false);

    m.writeVar("entriesToMap");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("PropertiesPromiseArray");

    m.readVar("PromiseArray");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj223", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeProperty("obj224", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj225", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj225", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj177", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj177", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "constructor");

    m.writeProperty("obj225", "constructor$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj178", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj178", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj179", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj179", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "length");

    m.writeProperty("obj225", "length$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "promise");

    m.writeProperty("obj225", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj181", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj181", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_init");

    m.writeProperty("obj225", "_init$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj182", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj182", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_iterate");

    m.writeProperty("obj225", "_iterate$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj183", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj183", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_isResolved");

    m.writeProperty("obj225", "_isResolved$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj184", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj184", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resolve");

    m.writeProperty("obj225", "_resolve$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj185", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj185", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_cancel");

    m.writeProperty("obj225", "_cancel$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj186", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj186", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_reject");

    m.writeProperty("obj225", "_reject$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj187", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj187", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseFulfilled");

    m.writeProperty("obj225", "_promiseFulfilled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj188", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj188", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseCancelled");

    m.writeProperty("obj225", "_promiseCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj189", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj189", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseRejected");

    m.writeProperty("obj225", "_promiseRejected$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj190", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj190", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resultCancelled");

    m.writeProperty("obj225", "_resultCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj191", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj191", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "shouldCopyValues");

    m.writeProperty("obj225", "shouldCopyValues$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj192", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj192", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "getActualLength");

    m.writeProperty("obj225", "getActualLength$");

    m.writeProperty("obj226", "prototype");

    m.readVar("Child");

    m.readProperty("obj226", "prototype");

    m.readVar("PropertiesPromiseArray");

    m.readProperty("obj226", "prototype");

    m.push(false);

    m.writeProperty("obj225", "_init");

    m.readVar("PropertiesPromiseArray");

    m.readProperty("obj226", "prototype");

    m.push(false);

    m.writeProperty("obj225", "_promiseFulfilled");

    m.readVar("PropertiesPromiseArray");

    m.readProperty("obj226", "prototype");

    m.push(false);

    m.writeProperty("obj225", "shouldCopyValues");

    m.readVar("PropertiesPromiseArray");

    m.readProperty("obj226", "prototype");

    m.push(false);

    m.writeProperty("obj225", "getActualLength");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "props");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "props");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj227", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.readVar("tryConvertToPromise");

    m.readVar("apiRejection");

    m.functionCall("", 4, 4);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("tryConvertToPromise");

    m.initVar("apiRejection");

    m.initVar("race");

    m.initVar("util");

    m.initVar("raceLater");

    m.push(false);

    m.writeVar("race");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.push(false);

    m.writeVar("raceLater");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "race");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "race");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj228", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("apiRejection");

    m.readVar("tryConvertToPromise");

    m.readVar("INTERNAL");

    m.readVar("debug");

    m.functionCall("", 6, 6);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("apiRejection");

    m.initVar("tryConvertToPromise");

    m.initVar("INTERNAL");

    m.initVar("debug");

    m.initVar("ReductionPromiseArray");

    m.initVar("completed");

    m.initVar("reduce");

    m.initVar("gotAccum");

    m.initVar("gotValue");

    m.initVar("getDomain");

    m.initVar("util");

    m.initVar("tryCatch");

    m.push(false);

    m.writeVar("ReductionPromiseArray");

    m.push(false);

    m.writeVar("completed");

    m.push(false);

    m.writeVar("reduce");

    m.push(false);

    m.writeVar("gotAccum");

    m.push(false);

    m.writeVar("gotValue");

    m.readVar("Promise");

    m.readProperty("obj62", "_getDomain");

    m.writeVar("getDomain");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "tryCatch");

    m.writeVar("tryCatch");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("ReductionPromiseArray");

    m.readVar("PromiseArray");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj229", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeProperty("obj230", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj231", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj231", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj177", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj177", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "constructor");

    m.writeProperty("obj231", "constructor$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj178", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj178", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj179", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj179", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "length");

    m.writeProperty("obj231", "length$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "promise");

    m.writeProperty("obj231", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj181", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj181", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_init");

    m.writeProperty("obj231", "_init$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj182", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj182", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_iterate");

    m.writeProperty("obj231", "_iterate$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj183", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj183", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_isResolved");

    m.writeProperty("obj231", "_isResolved$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj184", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj184", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resolve");

    m.writeProperty("obj231", "_resolve$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj185", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj185", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_cancel");

    m.writeProperty("obj231", "_cancel$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj186", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj186", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_reject");

    m.writeProperty("obj231", "_reject$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj187", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj187", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseFulfilled");

    m.writeProperty("obj231", "_promiseFulfilled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj188", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj188", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseCancelled");

    m.writeProperty("obj231", "_promiseCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj189", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj189", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseRejected");

    m.writeProperty("obj231", "_promiseRejected$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj190", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj190", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resultCancelled");

    m.writeProperty("obj231", "_resultCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj191", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj191", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "shouldCopyValues");

    m.writeProperty("obj231", "shouldCopyValues$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj192", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj192", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "getActualLength");

    m.writeProperty("obj231", "getActualLength$");

    m.writeProperty("obj232", "prototype");

    m.readVar("Child");

    m.readProperty("obj232", "prototype");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_gotAccum");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_eachComplete");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_init");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_resolveEmptyArray");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "shouldCopyValues");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_resolve");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_resultCancelled");

    m.readVar("ReductionPromiseArray");

    m.readProperty("obj232", "prototype");

    m.push(false);

    m.writeProperty("obj231", "_iterate");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "reduce");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "reduce");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj233", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("debug");

    m.functionCall("", 3, 3);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("debug");

    m.initVar("SettledPromiseArray");

    m.initVar("PromiseInspection");

    m.initVar("util");

    m.push(false);

    m.writeVar("SettledPromiseArray");

    m.readVar("Promise");

    m.readProperty("obj62", "PromiseInspection");

    m.writeVar("PromiseInspection");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("SettledPromiseArray");

    m.readVar("PromiseArray");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj234", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeProperty("obj235", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj236", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj236", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj177", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj177", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "constructor");

    m.writeProperty("obj236", "constructor$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj178", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj178", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj179", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj179", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "length");

    m.writeProperty("obj236", "length$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "promise");

    m.writeProperty("obj236", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj181", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj181", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_init");

    m.writeProperty("obj236", "_init$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj182", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj182", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_iterate");

    m.writeProperty("obj236", "_iterate$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj183", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj183", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_isResolved");

    m.writeProperty("obj236", "_isResolved$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj184", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj184", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resolve");

    m.writeProperty("obj236", "_resolve$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj185", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj185", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_cancel");

    m.writeProperty("obj236", "_cancel$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj186", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj186", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_reject");

    m.writeProperty("obj236", "_reject$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj187", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj187", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseFulfilled");

    m.writeProperty("obj236", "_promiseFulfilled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj188", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj188", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseCancelled");

    m.writeProperty("obj236", "_promiseCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj189", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj189", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseRejected");

    m.writeProperty("obj236", "_promiseRejected$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj190", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj190", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resultCancelled");

    m.writeProperty("obj236", "_resultCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj191", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj191", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "shouldCopyValues");

    m.writeProperty("obj236", "shouldCopyValues$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj192", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj192", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "getActualLength");

    m.writeProperty("obj236", "getActualLength$");

    m.writeProperty("obj237", "prototype");

    m.readVar("Child");

    m.readProperty("obj237", "prototype");

    m.readVar("SettledPromiseArray");

    m.readProperty("obj237", "prototype");

    m.push(false);

    m.writeProperty("obj236", "_promiseResolved");

    m.readVar("SettledPromiseArray");

    m.readProperty("obj237", "prototype");

    m.push(false);

    m.writeProperty("obj236", "_promiseFulfilled");

    m.readVar("SettledPromiseArray");

    m.readProperty("obj237", "prototype");

    m.push(false);

    m.writeProperty("obj236", "_promiseRejected");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "settle");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "settle");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj238", "exports");

    m.readVar("Promise");

    m.readVar("PromiseArray");

    m.readVar("apiRejection");

    m.functionCall("", 3, 3);

    m.initVar("Promise");

    m.initVar("PromiseArray");

    m.initVar("apiRejection");

    m.initVar("SomePromiseArray");

    m.initVar("some");

    m.initVar("util");

    m.initVar("RangeError");

    m.initVar("AggregateError");

    m.initVar("isArray");

    m.initVar("CANCELLATION");

    m.push(false);

    m.writeVar("SomePromiseArray");

    m.push(false);

    m.writeVar("some");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj60", "RangeError");

    m.writeVar("RangeError");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj60", "AggregateError");

    m.writeVar("AggregateError");

    m.readVar("util");

    m.readProperty("obj13", "isArray");

    m.writeVar("isArray");

    m.push(false);

    m.writeVar("CANCELLATION");

    m.readVar("util");

    m.readProperty("obj13", "inherits");

    m.readVar("SomePromiseArray");

    m.readVar("PromiseArray");

    m.functionCall("inherits", 2, 2);

    m.initVar("Child");

    m.initVar("Parent");

    m.initVar("T");

    m.initVar("hasProp");

    m.push(false);

    m.writeVar("T");

    m.push(false);

    m.readProperty("obj239", "hasOwnProperty");

    m.writeVar("hasProp");

    m.readVar("T");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeProperty("obj240", "prototype");

    m.readVar("Child");

    m.readVar("T");

    m.functionCall("T", 0, 0);

    m.initVar("propertyName");

    m.readVar("Child");

    m.writeProperty("obj241", "constructor");

    m.readVar("Parent");

    m.writeProperty("obj241", "constructor$");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj177", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj177", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "constructor");

    m.writeProperty("obj241", "constructor$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj178", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj178", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj179", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj179", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "length");

    m.writeProperty("obj241", "length$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj180", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj180", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "promise");

    m.writeProperty("obj241", "promise$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj181", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj181", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_init");

    m.writeProperty("obj241", "_init$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj182", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj182", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_iterate");

    m.writeProperty("obj241", "_iterate$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj183", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj183", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_isResolved");

    m.writeProperty("obj241", "_isResolved$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj184", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj184", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resolve");

    m.writeProperty("obj241", "_resolve$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj185", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj185", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_cancel");

    m.writeProperty("obj241", "_cancel$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj186", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj186", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_reject");

    m.writeProperty("obj241", "_reject$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj187", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj187", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseFulfilled");

    m.writeProperty("obj241", "_promiseFulfilled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj188", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj188", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseCancelled");

    m.writeProperty("obj241", "_promiseCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj189", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj189", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_promiseRejected");

    m.writeProperty("obj241", "_promiseRejected$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj190", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj190", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "_resultCancelled");

    m.writeProperty("obj241", "_resultCancelled$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj191", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj191", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "shouldCopyValues");

    m.writeProperty("obj241", "shouldCopyValues$");

    m.writeVar("propertyName");

    m.readVar("hasProp");

    m.readProperty("obj176", "call");

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.functionCall("call", 1, 2);

    m.readVar("propertyName");

    m.readProperty("obj192", "charAt");

    m.readVar("propertyName");

    m.readProperty("obj192", "length");

    m.push(false);

    m.binaryOp();

    m.functionCall("charAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.unaryOp();

    m.readVar("propertyName");

    m.push(false);

    m.binaryOp();

    m.readVar("Parent");

    m.readProperty("obj70", "prototype");

    m.readVar("propertyName");

    m.readProperty("obj69", "getActualLength");

    m.writeProperty("obj241", "getActualLength$");

    m.writeProperty("obj242", "prototype");

    m.readVar("Child");

    m.readProperty("obj242", "prototype");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_init");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "init");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "setUnwrap");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "howMany");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "setHowMany");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_promiseFulfilled");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_promiseRejected");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_promiseCancelled");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_checkOutcome");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_fulfilled");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_rejected");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_addRejected");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_addFulfilled");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_canPossiblyFulfill");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_getRangeError");

    m.readVar("SomePromiseArray");

    m.readProperty("obj242", "prototype");

    m.push(false);

    m.writeProperty("obj241", "_resolveEmptyArray");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "some");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "some");

    m.readVar("Promise");

    m.readVar("SomePromiseArray");

    m.writeProperty("obj62", "_SomePromiseArray");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj243", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("", 2, 2);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("PromiseMap");

    m.readVar("Promise");

    m.readProperty("obj62", "map");

    m.writeVar("PromiseMap");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "filter");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "filter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj244", "exports");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("", 2, 2);

    m.initVar("Promise");

    m.initVar("INTERNAL");

    m.initVar("promiseAllThis");

    m.initVar("PromiseMapSeries");

    m.initVar("PromiseReduce");

    m.initVar("PromiseAll");

    m.push(false);

    m.writeVar("promiseAllThis");

    m.push(false);

    m.writeVar("PromiseMapSeries");

    m.readVar("Promise");

    m.readProperty("obj62", "reduce");

    m.writeVar("PromiseReduce");

    m.readVar("Promise");

    m.readProperty("obj62", "all");

    m.writeVar("PromiseAll");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "each");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "mapSeries");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "each");

    m.readVar("Promise");

    m.readVar("PromiseMapSeries");

    m.writeProperty("obj62", "mapSeries");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj245", "exports");

    m.readVar("Promise");

    m.functionCall("", 1, 1);

    m.initVar("Promise");

    m.initVar("any");

    m.initVar("SomePromiseArray");

    m.push(false);

    m.writeVar("any");

    m.readVar("Promise");

    m.readProperty("obj62", "_SomePromiseArray");

    m.writeVar("SomePromiseArray");

    m.readVar("Promise");

    m.push(false);

    m.writeProperty("obj62", "any");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.push(false);

    m.writeProperty("obj72", "any");

    m.readVar("util");

    m.readProperty("obj13", "toFastProperties");

    m.readVar("Promise");

    m.functionCall("toFastProperties", 1, 1);

    m.initVar("obj");

    m.initVar("arguments");

    m.initVar("FakeConstructor");

    m.initVar("l");

    m.push(false);

    m.writeVar("FakeConstructor");

    m.readVar("FakeConstructor");

    m.readVar("obj");

    m.writeProperty("obj246", "prototype");

    m.push(false);

    m.writeVar("l");

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("obj");

    m.readVar("util");

    m.readProperty("obj13", "toFastProperties");

    m.readVar("Promise");

    m.readProperty("obj62", "prototype");

    m.functionCall("toFastProperties", 1, 1);

    m.initVar("obj");

    m.initVar("arguments");

    m.initVar("FakeConstructor");

    m.initVar("l");

    m.push(false);

    m.writeVar("FakeConstructor");

    m.readVar("FakeConstructor");

    m.readVar("obj");

    m.writeProperty("obj247", "prototype");

    m.push(false);

    m.writeVar("l");

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("FakeConstructor");

    m.functionCall("FakeConstructor", 0, 0);

    m.push(false);

    m.readVar("l");

    m.push(false);

    m.binaryOp();

    m.writeVar("l");

    m.readVar("obj");

    m.readVar("fillTypes");

    m.push(false);

    m.writeProperty("obj248", "a");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj249", "_bitField");

    m.push(false);

    m.writeProperty("obj249", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj249", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj249", "_promise0");

    m.push(false);

    m.writeProperty("obj249", "_receiver0");

    m.readProperty("obj249", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj249", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj249", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj249", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj249", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj249", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj249", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.writeProperty("obj250", "b");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj251", "_bitField");

    m.push(false);

    m.writeProperty("obj251", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj251", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj251", "_promise0");

    m.push(false);

    m.writeProperty("obj251", "_receiver0");

    m.readProperty("obj251", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj251", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj251", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj251", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj251", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj251", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj251", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.writeProperty("obj252", "c");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj253", "_bitField");

    m.push(false);

    m.writeProperty("obj253", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj253", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj253", "_promise0");

    m.push(false);

    m.writeProperty("obj253", "_receiver0");

    m.readProperty("obj253", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj253", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj253", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj253", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj253", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj253", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj253", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj254", "_bitField");

    m.push(false);

    m.writeProperty("obj254", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj254", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj254", "_promise0");

    m.push(false);

    m.writeProperty("obj254", "_receiver0");

    m.readProperty("obj254", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj254", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj254", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj254", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj254", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj254", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj254", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj255", "_bitField");

    m.push(false);

    m.writeProperty("obj255", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj255", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj255", "_promise0");

    m.push(false);

    m.writeProperty("obj255", "_receiver0");

    m.readProperty("obj255", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj255", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj255", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj255", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj255", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj255", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj255", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj256", "_bitField");

    m.push(false);

    m.writeProperty("obj256", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj256", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj256", "_promise0");

    m.push(false);

    m.writeProperty("obj256", "_receiver0");

    m.readProperty("obj256", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj256", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj256", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj256", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj256", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj256", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj256", "_receiver0");

    m.readVar("fillTypes");

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj257", "_bitField");

    m.push(false);

    m.writeProperty("obj257", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj257", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj257", "_promise0");

    m.push(false);

    m.writeProperty("obj257", "_receiver0");

    m.readProperty("obj257", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj257", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj257", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj257", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj257", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj257", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj257", "_receiver0");

    m.readVar("fillTypes");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj258", "_bitField");

    m.push(false);

    m.writeProperty("obj258", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj258", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj258", "_promise0");

    m.push(false);

    m.writeProperty("obj258", "_receiver0");

    m.readProperty("obj258", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj258", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj258", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.functionCall("fillTypes", 1, 1);

    m.initVar("value");

    m.initVar("p");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj259", "_bitField");

    m.push(false);

    m.writeProperty("obj259", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj259", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj259", "_promise0");

    m.push(false);

    m.writeProperty("obj259", "_receiver0");

    m.readProperty("obj259", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj259", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj259", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("p");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj259", "_fulfillmentHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj259", "_rejectionHandler0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj259", "_promise0");

    m.readVar("p");

    m.readVar("value");

    m.writeProperty("obj259", "_receiver0");

    m.readVar("debug");

    m.readProperty("obj85", "setBounds");

    m.readVar("Async");

    m.readProperty("obj26", "firstLineError");

    m.readVar("util");

    m.readProperty("obj13", "lastLineError");

    m.functionCall("setBounds", 2, 2);

    m.initVar("firstLineError");

    m.initVar("lastLineError");

    m.initVar("firstStackLines");

    m.initVar("lastStackLines");

    m.initVar("firstIndex");

    m.initVar("lastIndex");

    m.initVar("firstFileName");

    m.initVar("lastFileName");

    m.initVar("i");

    m.initVar("result");

    m.readVar("longStackTracesIsSupported");

    m.functionCall("longStackTracesIsSupported", 0, 0);

    m.readVar("captureStackTrace");

    m.readVar("firstLineError");

    m.readProperty("obj260", "stack");

    m.readProperty("obj261", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.writeVar("firstStackLines");

    m.readVar("lastLineError");

    m.readProperty("obj262", "stack");

    m.readProperty("obj263", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.writeVar("lastStackLines");

    m.push(false);

    m.writeVar("firstIndex");

    m.push(false);

    m.writeVar("lastIndex");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("firstStackLines");

    m.readProperty("obj264", "length");

    m.binaryOp();

    m.readVar("parseLineInfo");

    m.readVar("firstStackLines");

    m.readVar("i");

    m.readProperty("obj264", 0);

    m.functionCall("parseLineInfo", 1, 1);

    m.initVar("line");

    m.initVar("matches");

    m.readVar("line");

    m.readProperty("obj265", "match");

    m.readVar("parseLineInfoRegex");

    m.functionCall("match", 1, 1);

    m.writeVar("matches");

    m.readVar("matches");

    m.writeVar("result");

    m.readVar("result");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("firstStackLines");

    m.readProperty("obj264", "length");

    m.binaryOp();

    m.readVar("parseLineInfo");

    m.readVar("firstStackLines");

    m.readVar("i");

    m.readProperty("obj264", 1);

    m.functionCall("parseLineInfo", 1, 1);

    m.initVar("line");

    m.initVar("matches");

    m.readVar("line");

    m.readProperty("obj266", "match");

    m.readVar("parseLineInfoRegex");

    m.functionCall("match", 1, 1);

    m.writeVar("matches");

    m.readVar("matches");

    m.readVar("matches");

    m.push(false);

    m.readProperty("obj267", 1);

    m.readVar("parseInt");

    m.readVar("matches");

    m.push(false);

    m.readProperty("obj267", 2);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.writeProperty("obj268", "line");

    m.writeProperty("obj268", "fileName");

    m.push(false);

    m.writeVar("result");

    m.readVar("result");

    m.readVar("result");

    m.readProperty("obj268", "fileName");

    m.writeVar("firstFileName");

    m.readVar("result");

    m.readProperty("obj268", "line");

    m.writeVar("firstIndex");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("lastStackLines");

    m.readProperty("obj269", "length");

    m.binaryOp();

    m.readVar("parseLineInfo");

    m.readVar("lastStackLines");

    m.readVar("i");

    m.readProperty("obj269", 0);

    m.functionCall("parseLineInfo", 1, 1);

    m.initVar("line");

    m.initVar("matches");

    m.readVar("line");

    m.readProperty("obj265", "match");

    m.readVar("parseLineInfoRegex");

    m.functionCall("match", 1, 1);

    m.writeVar("matches");

    m.readVar("matches");

    m.writeVar("result");

    m.readVar("result");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("lastStackLines");

    m.readProperty("obj269", "length");

    m.binaryOp();

    m.readVar("parseLineInfo");

    m.readVar("lastStackLines");

    m.readVar("i");

    m.readProperty("obj269", 1);

    m.functionCall("parseLineInfo", 1, 1);

    m.initVar("line");

    m.initVar("matches");

    m.readVar("line");

    m.readProperty("obj270", "match");

    m.readVar("parseLineInfoRegex");

    m.functionCall("match", 1, 1);

    m.writeVar("matches");

    m.readVar("matches");

    m.readVar("matches");

    m.push(false);

    m.readProperty("obj271", 1);

    m.readVar("parseInt");

    m.readVar("matches");

    m.push(false);

    m.readProperty("obj271", 2);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.writeProperty("obj272", "line");

    m.writeProperty("obj272", "fileName");

    m.push(false);

    m.writeVar("result");

    m.readVar("result");

    m.readVar("result");

    m.readProperty("obj272", "fileName");

    m.writeVar("lastFileName");

    m.readVar("result");

    m.readProperty("obj272", "line");

    m.writeVar("lastIndex");

    m.readVar("firstIndex");

    m.push(false);

    m.binaryOp();

    m.readVar("lastIndex");

    m.push(false);

    m.binaryOp();

    m.readVar("firstFileName");

    m.unaryOp();

    m.readVar("lastFileName");

    m.unaryOp();

    m.readVar("firstFileName");

    m.readVar("lastFileName");

    m.binaryOp();

    m.unaryOp();

    m.readVar("Promise");

    m.writeVar("bluebird");

    m.readVar("bluebird");

    m.readVar("noConflict");

    m.writeProperty("obj62", "noConflict");

    m.readVar("module");

    m.readVar("bluebird");

    m.writeProperty("obj273", "exports");

    m.writeVar("Promise");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj274", "exec");

    m.writeVar("exec");

    m.readVar("module");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj275", "list");

    m.writeProperty("obj275", "uninstall");

    m.writeProperty("obj275", "install");

    m.push(false);

    m.writeProperty("obj276", "exports");

    m.writeVar("npm");

    m.push(false);

    m.writeVar("command");

    m.readVar("npm");

    m.readProperty("obj275", "install");

    m.push(false);

    m.readVar("command");

    m.binaryOp();

    m.writeProperty("obj277", "0");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj278", "save");

    m.writeProperty("obj278", "cwd");

    m.push(false);

    m.functionCall("install", 2, 2);

    m.initVar("packages");

    m.initVar("opts");

    m.initVar("cmdString");

    m.readVar("packages");

    m.readProperty("obj277", "length");

    m.push(false);

    m.binaryOp();

    m.readVar("packages");

    m.unaryOp();

    m.readVar("packages");

    m.readProperty("obj277", "length");

    m.unaryOp();

    m.readVar("packages");

    m.readVar("opts");

    m.push(false);

    m.readVar("packages");

    m.readProperty("obj277", "join");

    m.push(false);

    m.functionCall("join", 1, 1);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "global");

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "save");

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "saveDev");

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "legacyBundling");

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "noOptional");

    m.push(false);

    m.binaryOp();

    m.readVar("opts");

    m.readProperty("obj278", "ignoreScripts");

    m.push(false);

    m.binaryOp();

    m.writeVar("cmdString");

    m.readVar("Promise");

    m.push(false);

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.unaryOp();

    m.readVar("check");

    m.readVar("executor");

    m.functionCall("check", 2, 2);

    m.initVar("self");

    m.initVar("executor");

    m.readVar("self");

    m.push(false);

    m.binaryOp();

    m.readVar("self");

    m.readProperty("obj279", "constructor");

    m.readVar("Promise");

    m.binaryOp();

    m.unaryOp();

    m.readVar("executor");

    m.push(false);

    m.writeProperty("obj279", "_bitField");

    m.push(false);

    m.writeProperty("obj279", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj279", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj279", "_promise0");

    m.push(false);

    m.writeProperty("obj279", "_receiver0");

    m.readProperty("obj279", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.writeVar("promise");

    m.readProperty("obj279", "_captureStackTrace");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj279", "_pushContext");

    m.functionCall("", 0, 0);

    m.push(false);

    m.push(false);

    m.writeVar("synchronous");

    m.readProperty("obj279", "_execute");

    m.readVar("executor");

    m.push(false);

    m.push(false);

    m.functionCall("", 3, 3);

    m.initVar("executor");

    m.initVar("resolve");

    m.initVar("reject");

    m.unaryOp();

    m.readVar("executor");

    m.readVar("resolve");

    m.readVar("reject");

    m.functionCall("", 2, 2);

    m.initVar("resolve");

    m.initVar("reject");

    m.initVar("cmd");

    m.initVar("consoleOutput");

    m.readVar("exec");

    m.readVar("cmdString");

    m.readVar("opts");

    m.readProperty("obj278", "cwd");

    m.readVar("opts");

    m.readProperty("obj278", "cwd");

    m.readVar("opts");

    m.readProperty("obj278", "maxBuffer");

    m.push(false);

    m.writeProperty("obj280", "maxBuffer");

    m.writeProperty("obj280", "cwd");

    m.push(false);

    m.push(false);

    m.functionCall("exec", 0, 3);

    m.writeVar("cmd");

    m.readVar("opts");

    m.readProperty("obj278", "output");

    m.writeVar("r");

    m.push(false);

    m.writeVar("synchronous");

    m.readProperty("obj279", "_popContext");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("r");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj279", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.readProperty("obj279", "then");

    m.push(false);

    m.functionCall("", 2, 1);

    m.initVar("didFulfill");

    m.initVar("didReject");

    m.initVar("arguments");

    m.initVar("msg");

    m.readVar("debug");

    m.readProperty("obj85", "warnings");

    m.functionCall("warnings", 0, 0);

    m.readVar("config");

    m.readProperty("obj84", "warnings");

    m.readProperty("obj279", "_then");

    m.readVar("didFulfill");

    m.readVar("didReject");

    m.push(false);

    m.push(false);

    m.push(false);

    m.functionCall("", 5, 5);

    m.initVar("didFulfill");

    m.initVar("didReject");

    m.initVar("_");

    m.initVar("receiver");

    m.initVar("internalData");

    m.initVar("haveInternalData");

    m.initVar("promise");

    m.initVar("target");

    m.initVar("bitField");

    m.initVar("domain");

    m.initVar("handler");

    m.initVar("value");

    m.initVar("settler");

    m.readVar("internalData");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("haveInternalData");

    m.readVar("haveInternalData");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj281", "_bitField");

    m.push(false);

    m.writeProperty("obj281", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj281", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj281", "_promise0");

    m.push(false);

    m.writeProperty("obj281", "_receiver0");

    m.readProperty("obj281", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj281", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj281", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("promise");

    m.readProperty("obj279", "_target");

    m.functionCall("", 0, 0);

    m.initVar("ret");

    m.writeVar("ret");

    m.readVar("ret");

    m.readProperty("obj279", "_isFollowing");

    m.functionCall("", 0, 0);

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("target");

    m.readVar("target");

    m.readProperty("obj279", "_bitField");

    m.writeVar("bitField");

    m.readVar("haveInternalData");

    m.readVar("promise");

    m.readProperty("obj281", "_propagateFrom");

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("parent");

    m.initVar("flags");

    m.readVar("promise");

    m.readProperty("obj281", "_captureStackTrace");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("receiver");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj279", "_fireEvent");

    m.push(false);

    m.readVar("promise");

    m.functionCall("defaultFireEvent", 0, 3);

    m.push(false);

    m.readVar("getDomain");

    m.functionCall("getDomain", 0, 0);

    m.initVar("ret");

    m.readVar("process");

    m.readProperty("obj12", "domain");

    m.writeVar("ret");

    m.readVar("ret");

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("domain");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("target");

    m.readProperty("obj279", "_addCallbacks");

    m.readVar("didFulfill");

    m.readVar("didReject");

    m.readVar("promise");

    m.readVar("receiver");

    m.readVar("domain");

    m.functionCall("", 5, 5);

    m.initVar("fulfill");

    m.initVar("reject");

    m.initVar("promise");

    m.initVar("receiver");

    m.initVar("domain");

    m.initVar("index");

    m.initVar("base");

    m.readProperty("obj279", "_length");

    m.functionCall("", 0, 0);

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.writeVar("index");

    m.readVar("index");

    m.push(false);

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.readVar("promise");

    m.writeProperty("obj279", "_promise0");

    m.readVar("receiver");

    m.writeProperty("obj279", "_receiver0");

    m.readVar("fulfill");

    m.unaryOp();

    m.readVar("domain");

    m.push(false);

    m.binaryOp();

    m.readVar("fulfill");

    m.writeProperty("obj279", "_fulfillmentHandler0");

    m.readVar("reject");

    m.readProperty("obj279", "_setLength");

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.functionCall("", 1, 1);

    m.initVar("len");

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj279", "_bitField");

    m.readVar("index");

    m.readVar("promise");

    m.readProperty("obj281", "catch");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("fn");

    m.initVar("arguments");

    m.initVar("len");

    m.initVar("catchInstances");

    m.initVar("j");

    m.initVar("i");

    m.initVar("item");

    m.readVar("arguments");

    m.readProperty("obj282", "length");

    m.writeVar("len");

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "then");

    m.push(false);

    m.readVar("fn");

    m.functionCall("", 2, 2);

    m.initVar("didFulfill");

    m.initVar("didReject");

    m.initVar("arguments");

    m.initVar("msg");

    m.readVar("debug");

    m.readProperty("obj85", "warnings");

    m.functionCall("warnings", 0, 0);

    m.readVar("config");

    m.readProperty("obj84", "warnings");

    m.readProperty("obj281", "_then");

    m.readVar("didFulfill");

    m.readVar("didReject");

    m.push(false);

    m.push(false);

    m.push(false);

    m.functionCall("", 5, 5);

    m.initVar("didFulfill");

    m.initVar("didReject");

    m.initVar("_");

    m.initVar("receiver");

    m.initVar("internalData");

    m.initVar("haveInternalData");

    m.initVar("promise");

    m.initVar("target");

    m.initVar("bitField");

    m.initVar("domain");

    m.initVar("handler");

    m.initVar("value");

    m.initVar("settler");

    m.readVar("internalData");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("haveInternalData");

    m.readVar("haveInternalData");

    m.readVar("Promise");

    m.readVar("INTERNAL");

    m.functionCall("Promise", 1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj283", "_bitField");

    m.push(false);

    m.writeProperty("obj283", "_fulfillmentHandler0");

    m.push(false);

    m.writeProperty("obj283", "_rejectionHandler0");

    m.push(false);

    m.writeProperty("obj283", "_promise0");

    m.push(false);

    m.writeProperty("obj283", "_receiver0");

    m.readProperty("obj283", "_resolveFromExecutor");

    m.readVar("executor");

    m.functionCall("", 1, 1);

    m.initVar("executor");

    m.initVar("promise");

    m.initVar("synchronous");

    m.initVar("r");

    m.readVar("executor");

    m.readVar("INTERNAL");

    m.binaryOp();

    m.readProperty("obj283", "_promiseCreated");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readProperty("obj283", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.writeVar("promise");

    m.readProperty("obj281", "_target");

    m.functionCall("", 0, 0);

    m.initVar("ret");

    m.writeVar("ret");

    m.readVar("ret");

    m.readProperty("obj281", "_isFollowing");

    m.functionCall("", 0, 0);

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("target");

    m.readVar("target");

    m.readProperty("obj281", "_bitField");

    m.writeVar("bitField");

    m.readVar("haveInternalData");

    m.readVar("promise");

    m.readProperty("obj283", "_propagateFrom");

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("parent");

    m.initVar("flags");

    m.readVar("promise");

    m.readProperty("obj283", "_captureStackTrace");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("receiver");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj281", "_fireEvent");

    m.push(false);

    m.readVar("promise");

    m.functionCall("defaultFireEvent", 0, 3);

    m.push(false);

    m.readVar("getDomain");

    m.functionCall("getDomain", 0, 0);

    m.initVar("ret");

    m.readVar("process");

    m.readProperty("obj12", "domain");

    m.writeVar("ret");

    m.readVar("ret");

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("domain");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("target");

    m.readProperty("obj281", "_addCallbacks");

    m.readVar("didFulfill");

    m.readVar("didReject");

    m.readVar("promise");

    m.readVar("receiver");

    m.readVar("domain");

    m.functionCall("", 5, 5);

    m.initVar("fulfill");

    m.initVar("reject");

    m.initVar("promise");

    m.initVar("receiver");

    m.initVar("domain");

    m.initVar("index");

    m.initVar("base");

    m.readProperty("obj281", "_length");

    m.functionCall("", 0, 0);

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.writeVar("index");

    m.readVar("index");

    m.push(false);

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.readVar("promise");

    m.writeProperty("obj281", "_promise0");

    m.readVar("receiver");

    m.writeProperty("obj281", "_receiver0");

    m.readVar("fulfill");

    m.readVar("reject");

    m.unaryOp();

    m.readVar("domain");

    m.push(false);

    m.binaryOp();

    m.readVar("reject");

    m.writeProperty("obj281", "_rejectionHandler0");

    m.readProperty("obj281", "_setLength");

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.functionCall("", 1, 1);

    m.initVar("len");

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj281", "_bitField");

    m.readVar("index");

    m.readVar("promise");

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj82", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("error");

    m.unaryOp();

    m.readVar("reject");

    m.readVar("error");

    m.functionCall("", 1, 1);

    m.initVar("reason");

    m.readVar("promise");

    m.readProperty("obj279", "_rejectCallback");

    m.readVar("reason");

    m.readVar("synchronous");

    m.functionCall("", 3, 2);

    m.initVar("reason");

    m.initVar("synchronous");

    m.initVar("ignoreNonErrorWarnings");

    m.initVar("trace");

    m.initVar("hasStack");

    m.initVar("message");

    m.readVar("util");

    m.readProperty("obj13", "ensureErrorObject");

    m.readVar("reason");

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readVar("canAttachTrace");

    m.readVar("value");

    m.functionCall("canAttachTrace", 1, 1);

    m.initVar("obj");

    m.readVar("isError");

    m.readVar("obj");

    m.functionCall("isError", 1, 1);

    m.initVar("obj");

    m.readVar("obj");

    m.readVar("Error");

    m.binaryOp();

    m.readVar("es5");

    m.readProperty("obj3", "propertyIsWritable");

    m.readVar("obj");

    m.push(false);

    m.functionCall("propertyIsWritable", 2, 2);

    m.initVar("obj");

    m.initVar("prop");

    m.initVar("descriptor");

    m.readVar("Object");

    m.readProperty("obj1", "getOwnPropertyDescriptor");

    m.readVar("obj");

    m.readVar("prop");

    m.functionCall("getOwnPropertyDescriptor", 2, 2);

    m.writeVar("descriptor");

    m.readVar("descriptor");

    m.unaryOp();

    m.readVar("descriptor");

    m.readProperty("obj284", "writable");

    m.unaryOp();

    m.unaryOp();

    m.readVar("value");

    m.writeVar("trace");

    m.readVar("trace");

    m.readVar("reason");

    m.binaryOp();

    m.writeVar("hasStack");

    m.readVar("hasStack");

    m.unaryOp();

    m.readProperty("obj279", "_attachExtraTrace");

    m.readVar("trace");

    m.readVar("synchronous");

    m.push(false);

    m.functionCall("", 0, 2);

    m.push(false);

    m.readProperty("obj279", "_reject");

    m.readVar("reason");

    m.functionCall("", 1, 1);

    m.initVar("reason");

    m.initVar("bitField");

    m.readProperty("obj279", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_setRejected");

    m.functionCall("", 0, 0);

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj279", "_bitField");

    m.readProperty("obj279", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.readVar("reason");

    m.writeProperty("obj279", "_fulfillmentHandler0");

    m.readProperty("obj279", "_isFinal");

    m.functionCall("", 0, 0);

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("async");

    m.readProperty("obj29", "settlePromises");

    m.functionCall("AsyncSettlePromises", 1, 1);

    m.initVar("promise");

    m.readProperty("obj29", "_normalQueue");

    m.readProperty("obj31", "_pushOne");

    m.readVar("promise");

    m.functionCall("", 1, 1);

    m.initVar("arg");

    m.initVar("length");

    m.initVar("i");

    m.readProperty("obj31", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj31", "_length");

    m.writeVar("length");

    m.readProperty("obj31", "_checkCapacity");

    m.readVar("length");

    m.push(false);

    m.binaryOp();

    m.functionCall("", 1, 1);

    m.initVar("size");

    m.readProperty("obj31", "_capacity");

    m.readVar("size");

    m.binaryOp();

    m.readProperty("obj31", "_front");

    m.readVar("length");

    m.binaryOp();

    m.readProperty("obj31", "_capacity");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("arg");

    m.writeProperty("obj31", 0);

    m.readVar("length");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj31", "_length");

    m.readProperty("obj29", "_queueTick");

    m.functionCall("", 0, 0);

    m.readProperty("obj29", "_isTickUsed");

    m.push(false);

    m.writeProperty("obj29", "_isTickUsed");

    m.readProperty("obj29", "_schedule");

    m.readProperty("obj29", "drainQueues");

    m.functionCall("", 1, 1);

    m.initVar("fn");

    m.readVar("GlobalSetImmediate");

    m.readProperty("obj285", "call");

    m.readVar("global");

    m.readVar("fn");

    m.functionCall("call", 1, 2);

    m.unaryOp();

    m.readVar("self");

    m.readProperty("obj29", "_drainQueues");

    m.functionCall("", 0, 0);

    m.readProperty("obj29", "_drainQueue");

    m.readProperty("obj29", "_normalQueue");

    m.functionCall("", 1, 1);

    m.initVar("queue");

    m.initVar("fn");

    m.initVar("receiver");

    m.initVar("arg");

    m.readVar("queue");

    m.readProperty("obj31", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj31", "_length");

    m.push(false);

    m.binaryOp();

    m.readVar("queue");

    m.readProperty("obj31", "shift");

    m.functionCall("", 0, 0);

    m.initVar("front");

    m.initVar("ret");

    m.readProperty("obj31", "_front");

    m.writeVar("front");

    m.readVar("front");

    m.readProperty("obj31", 0);

    m.writeVar("ret");

    m.readVar("front");

    m.push(false);

    m.writeProperty("obj31", 0);

    m.readVar("front");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj31", "_capacity");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj31", "_front");

    m.readProperty("obj31", "_length");

    m.unaryOp();

    m.writeProperty("obj31", "_length");

    m.readVar("ret");

    m.writeVar("fn");

    m.readVar("fn");

    m.readVar("fn");

    m.readProperty("obj279", "_settlePromises");

    m.functionCall("", 0, 0);

    m.initVar("bitField");

    m.initVar("len");

    m.initVar("reason");

    m.initVar("value");

    m.readProperty("obj279", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.writeVar("len");

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_fulfillmentHandler0");

    m.writeVar("reason");

    m.readProperty("obj279", "_settlePromise0");

    m.readProperty("obj279", "_rejectionHandler0");

    m.readVar("reason");

    m.readVar("bitField");

    m.functionCall("", 3, 3);

    m.initVar("handler");

    m.initVar("value");

    m.initVar("bitField");

    m.initVar("promise");

    m.initVar("receiver");

    m.readProperty("obj279", "_promise0");

    m.writeVar("promise");

    m.readProperty("obj279", "_receiverAt");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("index");

    m.initVar("ret");

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_receiver0");

    m.writeVar("ret");

    m.readVar("ret");

    m.readVar("UNDEFINED_BINDING");

    m.binaryOp();

    m.readVar("ret");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj279", "_isBound");

    m.functionCall("", 0, 0);

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("receiver");

    m.push(false);

    m.writeProperty("obj279", "_promise0");

    m.push(false);

    m.writeProperty("obj279", "_receiver0");

    m.readProperty("obj279", "_settlePromise");

    m.readVar("promise");

    m.readVar("handler");

    m.readVar("receiver");

    m.readVar("value");

    m.functionCall("", 4, 4);

    m.initVar("promise");

    m.initVar("handler");

    m.initVar("receiver");

    m.initVar("value");

    m.initVar("isPromise");

    m.initVar("bitField");

    m.initVar("asyncGuaranteed");

    m.readVar("promise");

    m.readVar("Promise");

    m.binaryOp();

    m.writeVar("isPromise");

    m.readProperty("obj279", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("asyncGuaranteed");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("handler");

    m.readVar("receiver");

    m.readVar("Proxyable");

    m.binaryOp();

    m.readVar("isPromise");

    m.readVar("asyncGuaranteed");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("promise");

    m.readProperty("obj281", "_reject");

    m.readVar("value");

    m.functionCall("", 1, 1);

    m.initVar("reason");

    m.initVar("bitField");

    m.readProperty("obj281", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_setRejected");

    m.functionCall("", 0, 0);

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj281", "_bitField");

    m.readProperty("obj281", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.readVar("reason");

    m.writeProperty("obj281", "_fulfillmentHandler0");

    m.readProperty("obj281", "_isFinal");

    m.functionCall("", 0, 0);

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("async");

    m.readProperty("obj29", "settlePromises");

    m.functionCall("AsyncSettlePromises", 1, 1);

    m.initVar("promise");

    m.readProperty("obj29", "_normalQueue");

    m.readProperty("obj31", "_pushOne");

    m.readVar("promise");

    m.functionCall("", 1, 1);

    m.initVar("arg");

    m.initVar("length");

    m.initVar("i");

    m.readProperty("obj31", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj31", "_length");

    m.writeVar("length");

    m.readProperty("obj31", "_checkCapacity");

    m.readVar("length");

    m.push(false);

    m.binaryOp();

    m.functionCall("", 1, 1);

    m.initVar("size");

    m.readProperty("obj31", "_capacity");

    m.readVar("size");

    m.binaryOp();

    m.readProperty("obj31", "_front");

    m.readVar("length");

    m.binaryOp();

    m.readProperty("obj31", "_capacity");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("arg");

    m.writeProperty("obj31", 1);

    m.readVar("length");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj31", "_length");

    m.readProperty("obj29", "_queueTick");

    m.functionCall("", 0, 0);

    m.readProperty("obj29", "_isTickUsed");

    m.readProperty("obj279", "_rejectPromises");

    m.readVar("len");

    m.readVar("reason");

    m.functionCall("", 2, 2);

    m.initVar("len");

    m.initVar("reason");

    m.initVar("i");

    m.initVar("handler");

    m.initVar("promise");

    m.initVar("receiver");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readProperty("obj279", "_setLength");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("len");

    m.readProperty("obj279", "_bitField");

    m.push(false);

    m.binaryOp();

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj279", "_bitField");

    m.readProperty("obj279", "_clearCancellationData");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("queue");

    m.readProperty("obj31", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj31", "_length");

    m.push(false);

    m.binaryOp();

    m.readVar("queue");

    m.readProperty("obj31", "shift");

    m.functionCall("", 0, 0);

    m.initVar("front");

    m.initVar("ret");

    m.readProperty("obj31", "_front");

    m.writeVar("front");

    m.readVar("front");

    m.readProperty("obj31", 1);

    m.writeVar("ret");

    m.readVar("front");

    m.push(false);

    m.writeProperty("obj31", 1);

    m.readVar("front");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj31", "_capacity");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj31", "_front");

    m.readProperty("obj31", "_length");

    m.unaryOp();

    m.writeProperty("obj31", "_length");

    m.readVar("ret");

    m.writeVar("fn");

    m.readVar("fn");

    m.readVar("fn");

    m.readProperty("obj281", "_settlePromises");

    m.functionCall("", 0, 0);

    m.initVar("bitField");

    m.initVar("len");

    m.initVar("reason");

    m.initVar("value");

    m.readProperty("obj281", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.writeVar("len");

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_fulfillmentHandler0");

    m.writeVar("reason");

    m.readProperty("obj281", "_settlePromise0");

    m.readProperty("obj281", "_rejectionHandler0");

    m.readVar("reason");

    m.readVar("bitField");

    m.functionCall("", 3, 3);

    m.initVar("handler");

    m.initVar("value");

    m.initVar("bitField");

    m.initVar("promise");

    m.initVar("receiver");

    m.readProperty("obj281", "_promise0");

    m.writeVar("promise");

    m.readProperty("obj281", "_receiverAt");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("index");

    m.initVar("ret");

    m.readVar("index");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_receiver0");

    m.writeVar("ret");

    m.readVar("ret");

    m.readVar("UNDEFINED_BINDING");

    m.binaryOp();

    m.readVar("ret");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_isBound");

    m.functionCall("", 0, 0);

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("ret");

    m.writeVar("receiver");

    m.push(false);

    m.writeProperty("obj281", "_promise0");

    m.push(false);

    m.writeProperty("obj281", "_receiver0");

    m.readProperty("obj281", "_settlePromise");

    m.readVar("promise");

    m.readVar("handler");

    m.readVar("receiver");

    m.readVar("value");

    m.functionCall("", 4, 4);

    m.initVar("promise");

    m.initVar("handler");

    m.initVar("receiver");

    m.initVar("value");

    m.initVar("isPromise");

    m.initVar("bitField");

    m.initVar("asyncGuaranteed");

    m.readVar("promise");

    m.readVar("Promise");

    m.binaryOp();

    m.writeVar("isPromise");

    m.readProperty("obj281", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.writeVar("asyncGuaranteed");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("handler");

    m.readVar("isPromise");

    m.readVar("asyncGuaranteed");

    m.readProperty("obj281", "_settlePromiseFromHandler");

    m.readVar("handler");

    m.readVar("receiver");

    m.readVar("value");

    m.readVar("promise");

    m.functionCall("", 4, 4);

    m.initVar("handler");

    m.initVar("receiver");

    m.initVar("value");

    m.initVar("promise");

    m.initVar("bitField");

    m.initVar("x");

    m.initVar("promiseCreated");

    m.readVar("promise");

    m.readProperty("obj283", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("promise");

    m.readProperty("obj283", "_pushContext");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("receiver");

    m.readVar("APPLY");

    m.binaryOp();

    m.unaryOp();

    m.readVar("tryCatch");

    m.readVar("handler");

    m.functionCall("tryCatch", 1, 1);

    m.initVar("fn");

    m.readVar("fn");

    m.writeVar("tryCatchTarget");

    m.readVar("tryCatcher");

    m.readProperty("obj286", "call");

    m.readVar("receiver");

    m.readVar("value");

    m.functionCall("call", 1, 2);

    m.initVar("target");

    m.readVar("tryCatchTarget");

    m.writeVar("target");

    m.push(false);

    m.writeVar("tryCatchTarget");

    m.readVar("target");

    m.readProperty("obj287", "apply");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj82", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.writeVar("x");

    m.readVar("promise");

    m.readProperty("obj283", "_popContext");

    m.functionCall("", 0, 0);

    m.push(false);

    m.writeVar("promiseCreated");

    m.readVar("promise");

    m.readProperty("obj283", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("x");

    m.readVar("NEXT_FILTER");

    m.binaryOp();

    m.readVar("x");

    m.readVar("errorObj");

    m.binaryOp();

    m.readVar("debug");

    m.readProperty("obj85", "checkForgottenReturns");

    m.readVar("x");

    m.readVar("promiseCreated");

    m.push(false);

    m.readVar("promise");

    m.functionCall("checkForgottenReturns", 5, 5);

    m.initVar("returnValue");

    m.initVar("promiseCreated");

    m.initVar("name");

    m.initVar("promise");

    m.initVar("parent");

    m.initVar("handlerLine");

    m.initVar("creatorLine");

    m.initVar("traceLines");

    m.initVar("stack");

    m.initVar("i");

    m.initVar("line");

    m.initVar("lineMatches");

    m.initVar("firstUserLine");

    m.initVar("msg");

    m.readVar("returnValue");

    m.push(false);

    m.binaryOp();

    m.readVar("promiseCreated");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("promise");

    m.readProperty("obj283", "_resolveCallback");

    m.readVar("x");

    m.functionCall("", 2, 1);

    m.initVar("value");

    m.initVar("shouldBind");

    m.initVar("maybePromise");

    m.initVar("promise");

    m.initVar("bitField");

    m.initVar("len");

    m.initVar("i");

    m.initVar("reason");

    m.readProperty("obj283", "_bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("value");

    m.binaryOp();

    m.readVar("tryConvertToPromise");

    m.readVar("value");

    m.functionCall("tryConvertToPromise", 2, 2);

    m.initVar("obj");

    m.initVar("context");

    m.initVar("then");

    m.initVar("ret");

    m.readVar("isObject");

    m.readVar("obj");

    m.functionCall("isObject", 1, 1);

    m.initVar("value");

    m.readVar("value");

    m.readVar("value");

    m.readVar("obj");

    m.writeVar("maybePromise");

    m.readVar("maybePromise");

    m.readVar("Promise");

    m.binaryOp();

    m.readProperty("obj283", "_fulfill");

    m.readVar("value");

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.initVar("bitField");

    m.initVar("err");

    m.readProperty("obj283", "_bitField");

    m.writeVar("bitField");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj283", "_setFulfilled");

    m.functionCall("", 0, 0);

    m.readProperty("obj283", "_bitField");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj283", "_bitField");

    m.readProperty("obj283", "_fireEvent");

    m.push(false);

    m.functionCall("defaultFireEvent", 0, 2);

    m.push(false);

    m.readVar("value");

    m.writeProperty("obj283", "_rejectionHandler0");

    m.readVar("bitField");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj281", "_rejectPromises");

    m.readVar("len");

    m.readVar("reason");

    m.functionCall("", 2, 2);

    m.initVar("len");

    m.initVar("reason");

    m.initVar("i");

    m.initVar("handler");

    m.initVar("promise");

    m.initVar("receiver");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readProperty("obj281", "_setLength");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("len");

    m.readProperty("obj281", "_bitField");

    m.push(false);

    m.binaryOp();

    m.readVar("len");

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj281", "_bitField");

    m.readProperty("obj281", "_clearCancellationData");

    m.functionCall("", 0, 0);

    m.push(false);

    m.readVar("queue");

    m.readProperty("obj31", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj31", "_length");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj29", "_reset");

    m.functionCall("", 0, 0);

    m.push(false);

    m.writeProperty("obj29", "_isTickUsed");

    m.push(false);

    m.writeProperty("obj29", "_haveDrainedQueues");

    m.readProperty("obj29", "_drainQueue");

    m.readProperty("obj29", "_lateQueue");

    m.functionCall("", 1, 1);

    m.initVar("queue");

    m.initVar("fn");

    m.initVar("receiver");

    m.initVar("arg");

    m.readVar("queue");

    m.readProperty("obj30", "length");

    m.functionCall("", 0, 0);

    m.readProperty("obj30", "_length");

    m.push(false);

    m.binaryOp();

    m.endExecution();

};

