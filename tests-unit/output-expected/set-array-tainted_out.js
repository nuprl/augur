exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("a");

    m.writeProperty("obj0", "2");

    m.writeProperty("obj0", "1");

    m.writeProperty("obj0", "0");

    m.push(false);

    m.writeVar("b");

    m.readVar("b");

    m.push(false);

    m.readVar("a");

    m.writeProperty("obj0", 2);

    m.readVar("b");

    m.push(false);

    m.readProperty("obj0", 2);

    m.writeVar("z");

    m.endExecution();

}

