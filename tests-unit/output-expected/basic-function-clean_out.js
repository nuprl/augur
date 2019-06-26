exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("test");

    m.push(false);

    m.writeVar("a");

    m.readVar("test");

    m.functionCall(0, 0);

    m.push(false);

    m.writeVar("z");

    m.endExecution();

}

