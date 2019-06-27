exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("b");

    m.push(false);

    m.readVar("b");

    m.writeVar("c");

    m.readVar("c");

    m.writeVar("z");

    m.endExecution();

}

