exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("foo");

    m.initVar("bar");

    m.initVar("baz");

    m.initVar("T");

    m.initVar("t");

    m.initVar("i");

    m.push(false);

    m.writeVar("foo");

    m.push(false);

    m.writeVar("bar");

    m.push(false);

    m.writeVar("baz");

    m.push(false);

    m.writeVar("T");

    m.readVar("T");

    m.functionCall(0, 0);

    m.readVar("foo");

    m.writeProperty("obj0", "f");

    m.readVar("baz");

    m.writeProperty("obj0", "r");

    m.writeVar("t");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("t");

    m.readProperty("obj0", "r");

    m.functionCall(1, 0);

    m.initVar("c");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.initVar("a");

    m.readVar("a");

    m.readVar("t");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.initVar("a");

    m.readVar("a");

    m.readVar("t");

    m.readVar("bar");

    m.writeProperty("obj0", "f");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.readVar("t");

    m.readProperty("obj0", "r");

    m.functionCall(1, 0);

    m.initVar("c");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.initVar("b");

    m.readVar("b");

    m.readVar("t");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.initVar("b");

    m.readVar("b");

    m.readVar("t");

    m.readVar("bar");

    m.writeProperty("obj0", "f");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.endExecution();

};

