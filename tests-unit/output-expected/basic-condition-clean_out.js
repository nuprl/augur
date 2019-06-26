exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.push(false);

    m.push(false);

    m.writeVar("z");

    m.endExecution();

}

