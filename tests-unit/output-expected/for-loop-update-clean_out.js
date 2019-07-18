exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("z");

    m.readVar("a");

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.endExecution();

};

