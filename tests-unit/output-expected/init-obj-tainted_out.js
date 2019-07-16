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

    m.push(false);

    m.readVar("a");

    m.writeProperty("obj0", "2a");

    m.writeProperty("obj0", "y");

    m.writeProperty("obj0", "x");

    m.push(false);

    m.writeVar("b");

    m.readVar("b");

    m.push(false);

    m.readProperty("obj0", "2a");

    m.writeVar("z");

    m.endExecution();

};

