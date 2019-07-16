exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("b");

    m.initVar("numbers");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("b");

    m.push(false);

    m.push(false);

    m.push(false);

    m.readVar("b");

    m.push(false);

    m.writeProperty("obj0", "4");

    m.writeProperty("obj0", "3");

    m.writeProperty("obj0", "2");

    m.writeProperty("obj0", "1");

    m.writeProperty("obj0", "0");

    m.push(false);

    m.writeVar("numbers");

    m.readVar("numbers");

    m.readProperty("obj0", "reduce");

    m.push(false);

    m.functionCall("reduce", 1, 1);

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.writeVar("z");

    m.endExecution();

};

