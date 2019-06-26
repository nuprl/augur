exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.push(false);

    m.writeVar("foo");

    m.push(false);

    m.writeVar("bar");

    m.push(false);

    m.writeVar("baz");

    m.push(false);

    m.writeVar("T");

    m.readVar("T");

    m.functionCall(0, 0);

    m.readVar("foo");

    m.writeProperty("obj0", "f");

    m.readVar("baz");

    m.writeProperty("obj0", "r");

    m.writeVar("t");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.readProperty("obj0", "r");

    m.functionCall(1, 0);

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.readVar("a");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.readVar("a");

    m.readVar("t");

    m.readVar("bar");

    m.writeProperty("obj0", "f");

    m.readVar("i");

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.readProperty("obj0", "r");

    m.functionCall(1, 0);

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.readVar("b");

    m.readProperty("obj0", "f");

    m.functionCall(1, 0);

    m.readVar("b");

    m.readVar("t");

    m.readVar("bar");

    m.writeProperty("obj0", "f");

    m.readVar("i");

    m.writeVar("i");

    m.readVar("i");

    m.push(false);

    m.endExecution();

}

