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

    m.writeProperty("obj0", "2");

    m.writeProperty("obj0", "1");

    m.writeProperty("obj0", "0");

    m.push(false);

    m.writeVar("b");

    m.readVar("b");

    m.push(false);

    m.push(false);

    m.writeProperty("obj0", 2);

    m.readVar("b");

    m.push(false);

    m.readProperty("obj0", 2);

    m.writeVar("z");

    m.endExecution();

};

