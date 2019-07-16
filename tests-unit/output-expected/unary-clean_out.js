exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("b");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("b");

    m.readVar("b");

    m.push(false);

    m.binaryOp();

    m.writeVar("b");

    m.writeVar("z");

    m.endExecution();

};

