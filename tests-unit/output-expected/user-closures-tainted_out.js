exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("MyPromise");

    m.initVar("identity");

    m.initVar("a");

    m.push(false);

    m.writeVar("MyPromise");

    m.push(false);

    m.writeVar("identity");

    m.push(false);

    m.writeVar("a");

    m.readVar("identity");

    m.readVar("a");

    m.functionCall(1, 1);

    m.initVar("x");

    m.readVar("MyPromise");

    m.push(false);

    m.functionCall(1, 1);

    m.initVar("executor");

    m.readVar("executor");

    m.push(false);

    m.push(false);

    m.functionCall(2, 2);

    m.initVar("resolve");

    m.initVar("reject");

    m.readVar("resolve");

    m.readVar("x");

    m.functionCall(1, 1);

    m.initVar("val");

    m.readVar("val");

    m.push(false);

    m.writeProperty("obj0", "then");

    m.readProperty("obj0", "then");

    m.push(false);

    m.functionCall(1, 1);

    m.initVar("onfulfilled");

    m.endExecution();

};

