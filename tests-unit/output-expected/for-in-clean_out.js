exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

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

    m.readVar("a");

    m.readVar("a");

    m.readVar("a");

    m.writeProperty("obj0", "c");

    m.writeProperty("obj0", "b");

    m.writeProperty("obj0", "d");

    m.push(false);

    m.writeVar("b");

    m.initVar("k");

    m.readVar("b");

    m.writeVar("k");

    m.readVar("b");

    m.readVar("k");

    m.push(false);

    m.writeProperty("obj0", "d");

    m.writeVar("k");

    m.readVar("b");

    m.readVar("k");

    m.push(false);

    m.writeProperty("obj0", "b");

    m.writeVar("k");

    m.readVar("b");

    m.readVar("k");

    m.push(false);

    m.writeProperty("obj0", "c");

    m.readVar("b");

    m.readProperty("obj0", "b");

    m.writeVar("z");

    m.endExecution();

};

