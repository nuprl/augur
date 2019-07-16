exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("foo");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("foo");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.readVar("foo");

    m.readVar("a");

    m.push(false);

    m.writeVar("z");

    m.functionCall("foo", 2, 2);

    m.initVar("x");

    m.initVar("y");

    m.endExecution();

};

