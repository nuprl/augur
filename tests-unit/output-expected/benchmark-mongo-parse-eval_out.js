exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("payload");

    m.initVar("parser");

    m.initVar("query");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("payload");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isInclusive");

    m.initVar("parseQuery");

    m.initVar("parseFieldOperator");

    m.initVar("parseElemMatch");

    m.initVar("parseNot");

    m.initVar("fieldOperand");

    m.initVar("isObject");

    m.initVar("mapValues");

    m.initVar("matches");

    m.initVar("Parse");

    m.initVar("complexFieldIndependantOperators");

    m.initVar("simpleFieldIndependantOperators");

    m.initVar("Part");

    m.push(false);

    m.writeVar("isInclusive");

    m.push(false);

    m.writeVar("parseQuery");

    m.push(false);

    m.writeVar("parseFieldOperator");

    m.push(false);

    m.writeVar("parseElemMatch");

    m.push(false);

    m.writeVar("parseNot");

    m.push(false);

    m.writeVar("fieldOperand");

    m.push(false);

    m.writeVar("isObject");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("obj");

    m.initVar("addOperator");

    m.initVar("singleValueOperators");

    m.initVar("arrayOperators");

    m.initVar("mapValues");

    m.push(false);

    m.writeVar("obj");

    m.push(false);

    m.writeVar("addOperator");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj0", "$not");

    m.writeProperty("obj0", "$ne");

    m.writeProperty("obj0", "$lte");

    m.writeProperty("obj0", "$lt");

    m.writeProperty("obj0", "$gte");

    m.writeProperty("obj0", "$gt");

    m.push(false);

    m.writeVar("singleValueOperators");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj1", "$in");

    m.writeProperty("obj1", "$all");

    m.writeProperty("obj1", "$nin");

    m.push(false);

    m.writeVar("arrayOperators");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj2", "exports");

    m.writeVar("mapValues");

    m.writeVar("mapValues");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("partMatches");

    m.initVar("valueTest");

    m.initVar("mongoEqual");

    m.initVar("validateDocumentObject");

    m.initVar("DotNotationPointers");

    m.initVar("simpleComparators");

    m.initVar("compoundOperatorComparators");

    m.initVar("matches");

    m.push(false);

    m.writeVar("partMatches");

    m.push(false);

    m.writeVar("valueTest");

    m.push(false);

    m.writeVar("mongoEqual");

    m.push(false);

    m.writeVar("validateDocumentObject");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("createPointers");

    m.initVar("getValue");

    m.initVar("createProperty");

    m.initVar("isInteger");

    m.initVar("DotNotationPointers");

    m.initVar("DotNotationPointer");

    m.push(false);

    m.writeVar("createPointers");

    m.push(false);

    m.writeVar("getValue");

    m.push(false);

    m.writeVar("createProperty");

    m.push(false);

    m.writeVar("isInteger");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj3", "exports");

    m.writeVar("DotNotationPointers");

    m.push(false);

    m.writeVar("DotNotationPointer");

    m.readVar("DotNotationPointer");

    m.push(false);

    m.writeProperty("obj4", "prototype");

    m.readVar("Object");

    m.readProperty("obj5", "defineProperty");

    m.readVar("DotNotationPointer");

    m.readProperty("obj4", "prototype");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj6", "set");

    m.writeProperty("obj6", "get");

    m.push(false);

    m.functionCall("defineProperty", 3, 3);

    m.writeVar("DotNotationPointers");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj7", "$all");

    m.writeProperty("obj7", "$nin");

    m.writeProperty("obj7", "$in");

    m.writeProperty("obj7", "$exists");

    m.writeProperty("obj7", "$regex");

    m.writeProperty("obj7", "$mod");

    m.writeProperty("obj7", "$ne");

    m.writeProperty("obj7", "$lte");

    m.writeProperty("obj7", "$lt");

    m.writeProperty("obj7", "$gte");

    m.writeProperty("obj7", "$gt");

    m.push(false);

    m.writeVar("simpleComparators");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj8", "$nor");

    m.writeProperty("obj8", "$or");

    m.writeProperty("obj8", "$and");

    m.push(false);

    m.writeVar("compoundOperatorComparators");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj9", "exports");

    m.writeVar("matches");

    m.writeVar("matches");

    m.readVar("exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeProperty("obj10", "DotNotationPointers");

    m.push(false);

    m.writeVar("Parse");

    m.readVar("Parse");

    m.push(false);

    m.writeProperty("obj11", "prototype");

    m.readVar("Parse");

    m.readProperty("obj11", "prototype");

    m.push(false);

    m.writeProperty("obj12", "mapValues");

    m.readVar("Parse");

    m.readProperty("obj11", "prototype");

    m.push(false);

    m.writeProperty("obj12", "matches");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj10", "parse");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj10", "inclusive");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj13", "$nor");

    m.writeProperty("obj13", "$or");

    m.writeProperty("obj13", "$and");

    m.push(false);

    m.writeVar("complexFieldIndependantOperators");

    m.push(false);

    m.push(false);

    m.writeProperty("obj14", "$comment");

    m.writeProperty("obj14", "$text");

    m.push(false);

    m.writeVar("simpleFieldIndependantOperators");

    m.push(false);

    m.writeVar("Part");

    m.writeVar("parser");

    m.readVar("parser");

    m.readProperty("obj10", "parse");

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.functionCall("", 1, 1);

    m.initVar("mongoQuery");

    m.readVar("Parse");

    m.readVar("mongoQuery");

    m.functionCall("Parse", 1, 1);

    m.initVar("mongoQuery");

    m.readVar("parseQuery");

    m.readVar("mongoQuery");

    m.functionCall("parseQuery", 1, 1);

    m.initVar("query");

    m.initVar("arguments");

    m.initVar("normalizedFunction");

    m.initVar("parts");

    m.initVar("key");

    m.initVar("operator");

    m.initVar("operands");

    m.initVar("innerParts");

    m.initVar("field");

    m.initVar("innerOperator");

    m.initVar("innerOperand");

    m.readVar("query");

    m.readVar("Function");

    m.binaryOp();

    m.readVar("query");

    m.readVar("query");

    m.readVar("Function");

    m.binaryOp();

    m.readVar("eval");

    m.push(false);

    m.readVar("query");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.builtin("eval", 1);

    m.push(false);

    m.readVar("console");

    m.push(false);

    m.push(false);

    m.writeProperty("obj15", "my-awesome-prop-23-42");

    m.writeVar("normalizedFunction");

    m.readVar("Part");

    m.readVar("undefined");

    m.push(false);

    m.readVar("normalizedFunction");

    m.functionCall("Part", 5, 3);

    m.initVar("field");

    m.initVar("operator");

    m.initVar("operand");

    m.initVar("parts");

    m.initVar("implicitField");

    m.readVar("parts");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.push(false);

    m.writeVar("parts");

    m.readVar("field");

    m.writeProperty("obj16", "field");

    m.readVar("operator");

    m.writeProperty("obj16", "operator");

    m.readVar("operand");

    m.writeProperty("obj16", "operand");

    m.readVar("parts");

    m.writeProperty("obj16", "parts");

    m.readVar("implicitField");

    m.writeProperty("obj16", "implicitField");

    m.writeProperty("obj17", "0");

    m.push(false);

    m.writeProperty("obj18", "parts");

    m.writeVar("query");

    m.readVar("console");

    m.push(false);

    m.readProperty("obj15", "my-awesome-prop-23-42");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj15", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

