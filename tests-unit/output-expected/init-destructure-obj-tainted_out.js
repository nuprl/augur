exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("a");

    m.readVar("a");

    m.writeProperty("obj0", "z");

    m.push(false);

    m.readProperty("obj0", "z");

    m.writeVar("z");

    m.endExecution();

}

