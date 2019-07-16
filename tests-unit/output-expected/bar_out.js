exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("foo");

    m.initVar("bar");

    m.push(false);

    m.writeVar("foo");

    m.push(false);

    m.writeVar("bar");

    m.readVar("bar");

    m.functionCall("bar", 0, 0);

    m.unaryOp();

    m.readVar("foo");

    m.functionCall("foo", 0, 0);

    m.push(false);

    m.readVar("bar");

    m.functionCall("bar", 0, 0);

    m.unaryOp();

    m.readVar("foo");

    m.functionCall("foo", 0, 0);

    m.push(false);

    m.endExecution();

};

