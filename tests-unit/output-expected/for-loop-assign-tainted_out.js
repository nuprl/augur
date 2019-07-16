exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("b");

    m.initVar("c");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.push(false);

    m.readVar("a");

    m.push(false);

    m.push(false);

    m.writeProperty("obj0", "4");

    m.writeProperty("obj0", "3");

    m.writeProperty("obj0", "2");

    m.writeProperty("obj0", "1");

    m.writeProperty("obj0", "0");

    m.push(false);

    m.writeVar("b");

    m.push(false);

    m.writeVar("c");

    m.push(false);

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.readVar("z");

    m.readVar("a");

    m.binaryOp();

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.readVar("z");

    m.readVar("a");

    m.binaryOp();

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.readVar("z");

    m.readVar("a");

    m.binaryOp();

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.readVar("z");

    m.readVar("a");

    m.binaryOp();

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.readVar("z");

    m.readVar("a");

    m.binaryOp();

    m.writeVar("z");

    m.readVar("z");

    m.readVar("c");

    m.binaryOp();

    m.endExecution();

};

