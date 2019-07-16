exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("Square");

    m.initVar("a");

    m.initVar("z");

    m.initVar("s");

    m.push(false);

    m.writeVar("Square");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.readVar("Square");

    m.push(false);

    m.readVar("a");

    m.functionCall("Square", 2, 2);

    m.initVar("width");

    m.initVar("height");

    m.initVar("doIExist");

    m.readVar("height");

    m.writeVar("z");

    m.binaryOp();

    m.writeVar("doIExist");

    m.writeVar("s");

    m.endExecution();

};

