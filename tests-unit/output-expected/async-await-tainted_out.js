exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("id");

    m.initVar("assignToZ");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("id");

    m.push(false);

    m.writeVar("assignToZ");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.readVar("assignToZ");

    m.readVar("a");

    m.functionCall(1, 1);

    m.initVar("x");

    m.unaryOp();

    m.readVar("id");

    m.readVar("x");

    m.functionCall(1, 1);

    m.initVar("x");

    m.readVar("x");

    m.unaryOp();

    m.writeVar("z");

    m.endExecution();

};

