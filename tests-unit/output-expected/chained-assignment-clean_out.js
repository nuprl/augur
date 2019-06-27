exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("x");

    m.push(false);

    m.writeVar("y");

    m.push(false);

    m.writeVar("z");

    m.readVar("x");

    m.writeVar("y");

    m.writeVar("z");

    m.writeVar("a");

    m.endExecution();

}

