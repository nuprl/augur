exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("obj");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("obj");

    m.readVar("obj");

    m.push(false);

    m.readProperty("obj0", "\"); /* ");

    m.readVar("a");

    m.writeVar("z");

    m.readVar("obj");

    m.push(false);

    m.readProperty("obj0", " */ // ");

    m.endExecution();

};

