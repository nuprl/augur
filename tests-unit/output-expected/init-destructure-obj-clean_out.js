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

    m.readVar("a");

    m.push(false);

    m.writeProperty("obj0", "z");

    m.writeProperty("obj0", "b");

    m.push(false);

    m.readProperty("obj0", "z");

    m.writeVar("z");

    m.endExecution();

};

