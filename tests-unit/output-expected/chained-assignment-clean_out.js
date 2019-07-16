exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("x");

    m.initVar("y");

    m.initVar("z");

    m.push(false);

    m.writeVar("x");

    m.push(false);

    m.writeVar("y");

    m.push(false);

    m.writeVar("z");

    m.readVar("x");

    m.writeVar("y");

    m.writeVar("z");

    m.writeVar("a");

    m.endExecution();

};

