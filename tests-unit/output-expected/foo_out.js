exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("foo");

    m.push(false);

    m.writeVar("bar");

    m.readVar("bar");

    m.functionCall(0, 0);

    m.readVar("foo");

    m.functionCall(0, 0);

    m.push(false);

    m.readVar("foo");

    m.functionCall(0, 0);

    m.push(false);

    m.endExecution();

}

