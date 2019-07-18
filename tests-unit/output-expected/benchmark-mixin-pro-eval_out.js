exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("Foo");

    m.initVar("payload");

    m.initVar("mixin");

    m.initVar("x");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("Foo");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("payload");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("payload");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("payload");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("createClass");

    m.initVar("instanceOf");

    m.initVar("superMethod");

    m.initVar("subOf");

    m.initVar("mixin");

    m.initVar("mixin_constructor");

    m.initVar("isEmpty");

    m.initVar("insert_proto");

    m.initVar("copyInto");

    m.initVar("inspect_protos");

    m.initVar("alias");

    m.initVar("util");

    m.push(false);

    m.writeVar("createClass");

    m.push(false);

    m.writeVar("instanceOf");

    m.push(false);

    m.writeVar("superMethod");

    m.push(false);

    m.writeVar("subOf");

    m.push(false);

    m.writeVar("mixin");

    m.push(false);

    m.writeVar("mixin_constructor");

    m.push(false);

    m.writeVar("isEmpty");

    m.push(false);

    m.writeVar("insert_proto");

    m.push(false);

    m.writeVar("copyInto");

    m.push(false);

    m.writeVar("inspect_protos");

    m.push(false);

    m.writeVar("alias");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("mixin");

    m.readVar("copyInto");

    m.writeProperty("obj0", "copyInto");

    m.readVar("mixin");

    m.readVar("alias");

    m.writeProperty("obj0", "alias");

    m.readVar("mixin");

    m.readVar("createClass");

    m.writeProperty("obj0", "createClass");

    m.readVar("mixin");

    m.readVar("createClass");

    m.writeProperty("obj0", "inherit");

    m.readVar("module");

    m.readVar("mixin");

    m.writeProperty("obj1", "exports");

    m.writeVar("mixin");

    m.push(false);

    m.writeVar("x");

    m.readVar("Object");

    m.readProperty("obj2", "defineProperty");

    m.readVar("Foo");

    m.push(false);

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj3", "value");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.unaryOp();

    m.readVar("mixin");

    m.readVar("Foo");

    m.readVar("x");

    m.functionCall("mixin", 2, 2);

    m.initVar("base");

    m.initVar("mixin");

    m.initVar("ctor");

    m.initVar("incl");

    m.readVar("base");

    m.writeVar("ctor");

    m.readVar("base");

    m.readProperty("obj4", "constructors");

    m.readVar("base");

    m.readVar("mixin");

    m.readVar("base");

    m.writeProperty("obj5", "1");

    m.writeProperty("obj5", "0");

    m.push(false);

    m.writeProperty("obj4", "constructors");

    m.readVar("base");

    m.readProperty("obj4", "prototype");

    m.readVar("mixin_constructor");

    m.readVar("base");

    m.readProperty("obj4", "name");

    m.readVar("base");

    m.functionCall("mixin_constructor", 2, 2);

    m.initVar("name");

    m.initVar("ctor");

    m.initVar("arguments");

    m.initVar("str");

    m.push(false);

    m.readProperty("obj6", "replace");

    m.push(false);

    m.readVar("name");

    m.functionCall("replace", 2, 2);

    m.writeVar("str");

    m.readVar("eval");

    m.readVar("str");

    m.builtin("eval", 1);

    m.push(false);

    m.writeVar("f");

    m.readVar("console");

    m.push(false);

    m.push(false);

    m.writeProperty("obj7", "my-awesome-prop-23-42");

    m.readVar("eval");

    m.readVar("name");

    m.builtin("eval", 1);

    m.push(false);

    m.readVar("console");

    m.push(false);

    m.readProperty("obj7", "my-awesome-prop-23-42");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj7", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj7", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

