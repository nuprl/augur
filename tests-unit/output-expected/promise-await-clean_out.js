exports.drive = (m) => {

    m.push(false);

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

    m.push(false);

    m.functionCall("assignToZ", 1, 1);

    m.initVar("x");

    m.unaryOp();

    m.readVar("id");

    m.readVar("x");

    m.functionCall("id", 1, 1);

    m.initVar("x");

    m.readVar("Promise");

    m.push(false);

    m.functionCall("Promise", 1, 1);

    m.initVar("resolve");

    m.readVar("resolve");

    m.readVar("x");

    m.functionCall("", 1, 1);

    m.unaryOp();

    m.writeVar("z");

    m.endExecution();

};

