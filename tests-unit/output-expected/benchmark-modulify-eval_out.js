exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("payload");

    m.initVar("modulify");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("payload");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("payload");

    m.readVar("val");

    m.binaryOp();

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

    m.initVar("_g");

    m.initVar("modulify");

    m.unaryOp();

    m.readVar("global");

    m.writeVar("_g");

    m.push(false);

    m.writeProperty("obj0", "utils");

    m.push(false);

    m.writeVar("modulify");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "getNames");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "evaluator");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "getGlobals");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "getTopLevelNames");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "getExports");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "generateExportsString");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.push(false);

    m.writeProperty("obj1", "generateModuleString");

    m.readVar("modulify");

    m.push(false);

    m.writeProperty("obj0", "string");

    m.readVar("modulify");

    m.push(false);

    m.writeProperty("obj0", "file");

    m.unaryOp();

    m.readVar("module");

    m.readVar("modulify");

    m.writeProperty("obj2", "exports");

    m.writeVar("modulify");

    m.readVar("modulify");

    m.readProperty("obj0", "string");

    m.readVar("payload");

    m.functionCall("modulifyString", 1, 1);

    m.initVar("src");

    m.initVar("esprima");

    m.initVar("ast");

    m.initVar("out");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.push(false);

    m.functionCall("webpackUniversalModuleDefinition", 2, 2);

    m.initVar("root");

    m.initVar("factory");

    m.readVar("exports");

    m.readVar("module");

    m.unaryOp();

    m.readVar("module");

    m.readVar("factory");

    m.functionCall("", 0, 0);

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

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj3", "15");

    m.writeProperty("obj3", "14");

    m.writeProperty("obj3", "13");

    m.writeProperty("obj3", "12");

    m.writeProperty("obj3", "11");

    m.writeProperty("obj3", "10");

    m.writeProperty("obj3", "9");

    m.writeProperty("obj3", "8");

    m.writeProperty("obj3", "7");

    m.writeProperty("obj3", "6");

    m.writeProperty("obj3", "5");

    m.writeProperty("obj3", "4");

    m.writeProperty("obj3", "3");

    m.writeProperty("obj3", "2");

    m.writeProperty("obj3", "1");

    m.writeProperty("obj3", "0");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("modules");

    m.initVar("__webpack_require__");

    m.initVar("installedModules");

    m.push(false);

    m.writeVar("__webpack_require__");

    m.push(false);

    m.writeVar("installedModules");

    m.readVar("__webpack_require__");

    m.readVar("modules");

    m.writeProperty("obj4", "m");

    m.readVar("__webpack_require__");

    m.readVar("installedModules");

    m.writeProperty("obj4", "c");

    m.readVar("__webpack_require__");

    m.push(false);

    m.writeProperty("obj4", "p");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 0);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj6", "loaded");

    m.writeProperty("obj6", "id");

    m.writeProperty("obj6", "exports");

    m.push(false);

    m.writeProperty("obj5", 0);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 0);

    m.readProperty("obj7", "call");

    m.readVar("module");

    m.readProperty("obj6", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj6", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("parse");

    m.initVar("tokenize");

    m.initVar("comment_handler_1");

    m.initVar("parser_1");

    m.initVar("jsx_parser_1");

    m.initVar("tokenizer_1");

    m.initVar("syntax_1");

    m.push(false);

    m.writeVar("parse");

    m.push(false);

    m.writeVar("tokenize");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 1);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj8", "loaded");

    m.writeProperty("obj8", "id");

    m.writeProperty("obj8", "exports");

    m.push(false);

    m.writeProperty("obj5", 1);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 1);

    m.readProperty("obj9", "call");

    m.readVar("module");

    m.readProperty("obj8", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj8", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("syntax_1");

    m.initVar("CommentHandler");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj10", "loaded");

    m.writeProperty("obj10", "id");

    m.writeProperty("obj10", "exports");

    m.push(false);

    m.writeProperty("obj5", 2);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 2);

    m.readProperty("obj11", "call");

    m.readVar("module");

    m.readProperty("obj10", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj10", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.push(false);

    m.readVar("exports");

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

    m.writeProperty("obj12", "YieldExpression");

    m.writeProperty("obj12", "WithStatement");

    m.writeProperty("obj12", "WhileStatement");

    m.writeProperty("obj12", "VariableDeclarator");

    m.writeProperty("obj12", "VariableDeclaration");

    m.writeProperty("obj12", "UpdateExpression");

    m.writeProperty("obj12", "UnaryExpression");

    m.writeProperty("obj12", "TryStatement");

    m.writeProperty("obj12", "ThrowStatement");

    m.writeProperty("obj12", "ThisExpression");

    m.writeProperty("obj12", "TemplateLiteral");

    m.writeProperty("obj12", "TemplateElement");

    m.writeProperty("obj12", "TaggedTemplateExpression");

    m.writeProperty("obj12", "SwitchStatement");

    m.writeProperty("obj12", "SwitchCase");

    m.writeProperty("obj12", "Super");

    m.writeProperty("obj12", "SpreadElement");

    m.writeProperty("obj12", "SequenceExpression");

    m.writeProperty("obj12", "ReturnStatement");

    m.writeProperty("obj12", "RestElement");

    m.writeProperty("obj12", "Property");

    m.writeProperty("obj12", "Program");

    m.writeProperty("obj12", "ObjectPattern");

    m.writeProperty("obj12", "ObjectExpression");

    m.writeProperty("obj12", "NewExpression");

    m.writeProperty("obj12", "MethodDefinition");

    m.writeProperty("obj12", "MetaProperty");

    m.writeProperty("obj12", "MemberExpression");

    m.writeProperty("obj12", "LogicalExpression");

    m.writeProperty("obj12", "LabeledStatement");

    m.writeProperty("obj12", "Literal");

    m.writeProperty("obj12", "ImportSpecifier");

    m.writeProperty("obj12", "ImportNamespaceSpecifier");

    m.writeProperty("obj12", "ImportDefaultSpecifier");

    m.writeProperty("obj12", "ImportDeclaration");

    m.writeProperty("obj12", "IfStatement");

    m.writeProperty("obj12", "Identifier");

    m.writeProperty("obj12", "FunctionExpression");

    m.writeProperty("obj12", "FunctionDeclaration");

    m.writeProperty("obj12", "ForInStatement");

    m.writeProperty("obj12", "ForOfStatement");

    m.writeProperty("obj12", "ForStatement");

    m.writeProperty("obj12", "ExpressionStatement");

    m.writeProperty("obj12", "ExportSpecifier");

    m.writeProperty("obj12", "ExportNamedDeclaration");

    m.writeProperty("obj12", "ExportDefaultDeclaration");

    m.writeProperty("obj12", "ExportAllDeclaration");

    m.writeProperty("obj12", "EmptyStatement");

    m.writeProperty("obj12", "DebuggerStatement");

    m.writeProperty("obj12", "DoWhileStatement");

    m.writeProperty("obj12", "ContinueStatement");

    m.writeProperty("obj12", "ConditionalExpression");

    m.writeProperty("obj12", "ClassExpression");

    m.writeProperty("obj12", "ClassDeclaration");

    m.writeProperty("obj12", "ClassBody");

    m.writeProperty("obj12", "CatchClause");

    m.writeProperty("obj12", "CallExpression");

    m.writeProperty("obj12", "BreakStatement");

    m.writeProperty("obj12", "BinaryExpression");

    m.writeProperty("obj12", "BlockStatement");

    m.writeProperty("obj12", "ArrowFunctionExpression");

    m.writeProperty("obj12", "ArrayPattern");

    m.writeProperty("obj12", "ArrayExpression");

    m.writeProperty("obj12", "AssignmentPattern");

    m.writeProperty("obj12", "AssignmentExpression");

    m.push(false);

    m.writeProperty("obj13", "Syntax");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj10", "loaded");

    m.readVar("module");

    m.readProperty("obj10", "exports");

    m.writeVar("syntax_1");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("CommentHandler");

    m.push(false);

    m.writeVar("CommentHandler");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "insertInnerComments");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "findTrailingComments");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "findLeadingComments");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "visitNode");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "visitComment");

    m.readVar("CommentHandler");

    m.readProperty("obj14", "prototype");

    m.push(false);

    m.writeProperty("obj15", "visit");

    m.readVar("CommentHandler");

    m.writeVar("CommentHandler");

    m.readVar("exports");

    m.readVar("CommentHandler");

    m.writeProperty("obj16", "CommentHandler");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj8", "loaded");

    m.readVar("module");

    m.readProperty("obj8", "exports");

    m.writeVar("comment_handler_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 3);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj17", "loaded");

    m.writeProperty("obj17", "id");

    m.writeProperty("obj17", "exports");

    m.push(false);

    m.writeProperty("obj5", 3);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 3);

    m.readProperty("obj18", "call");

    m.readVar("module");

    m.readProperty("obj17", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj17", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("assert_1");

    m.initVar("messages_1");

    m.initVar("error_handler_1");

    m.initVar("token_1");

    m.initVar("scanner_1");

    m.initVar("syntax_1");

    m.initVar("Node");

    m.initVar("ArrowParameterPlaceHolder");

    m.initVar("Parser");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 4);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj19", "loaded");

    m.writeProperty("obj19", "id");

    m.writeProperty("obj19", "exports");

    m.push(false);

    m.writeProperty("obj5", 4);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 4);

    m.readProperty("obj20", "call");

    m.readVar("module");

    m.readProperty("obj19", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj19", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("assert");

    m.push(false);

    m.writeVar("assert");

    m.push(false);

    m.readVar("exports");

    m.readVar("assert");

    m.writeProperty("obj21", "assert");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj19", "loaded");

    m.readVar("module");

    m.readProperty("obj19", "exports");

    m.writeVar("assert_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 5);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj22", "loaded");

    m.writeProperty("obj22", "id");

    m.writeProperty("obj22", "exports");

    m.push(false);

    m.writeProperty("obj5", 5);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 5);

    m.readProperty("obj23", "call");

    m.readVar("module");

    m.readProperty("obj22", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj22", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.push(false);

    m.readVar("exports");

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

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj24", "ForInOfLoopInitializer");

    m.writeProperty("obj24", "DuplicateBinding");

    m.writeProperty("obj24", "IllegalExportDeclaration");

    m.writeProperty("obj24", "IllegalImportDeclaration");

    m.writeProperty("obj24", "InvalidModuleSpecifier");

    m.writeProperty("obj24", "NoAsAfterImportNamespace");

    m.writeProperty("obj24", "MissingFromClause");

    m.writeProperty("obj24", "StaticPrototype");

    m.writeProperty("obj24", "DuplicateConstructor");

    m.writeProperty("obj24", "ConstructorSpecialMethod");

    m.writeProperty("obj24", "DuplicateProtoProperty");

    m.writeProperty("obj24", "DefaultRestParameter");

    m.writeProperty("obj24", "ParameterAfterRestParameter");

    m.writeProperty("obj24", "TemplateOctalLiteral");

    m.writeProperty("obj24", "StrictReservedWord");

    m.writeProperty("obj24", "StrictLHSPrefix");

    m.writeProperty("obj24", "StrictLHSPostfix");

    m.writeProperty("obj24", "StrictLHSAssignment");

    m.writeProperty("obj24", "StrictDelete");

    m.writeProperty("obj24", "StrictOctalLiteral");

    m.writeProperty("obj24", "StrictFunctionName");

    m.writeProperty("obj24", "StrictParamDupe");

    m.writeProperty("obj24", "StrictParamName");

    m.writeProperty("obj24", "StrictVarName");

    m.writeProperty("obj24", "StrictCatchVariable");

    m.writeProperty("obj24", "StrictModeWith");

    m.writeProperty("obj24", "IllegalReturn");

    m.writeProperty("obj24", "IllegalBreak");

    m.writeProperty("obj24", "IllegalContinue");

    m.writeProperty("obj24", "Redeclaration");

    m.writeProperty("obj24", "UnknownLabel");

    m.writeProperty("obj24", "NoCatchOrFinally");

    m.writeProperty("obj24", "MultipleDefaultsInSwitch");

    m.writeProperty("obj24", "InvalidLHSInForLoop");

    m.writeProperty("obj24", "InvalidLHSInForIn");

    m.writeProperty("obj24", "InvalidLHSInAssignment");

    m.writeProperty("obj24", "UnterminatedRegExp");

    m.writeProperty("obj24", "InvalidRegExp");

    m.writeProperty("obj24", "NewlineAfterThrow");

    m.writeProperty("obj24", "UnexpectedEOS");

    m.writeProperty("obj24", "UnexpectedTemplate");

    m.writeProperty("obj24", "UnexpectedReserved");

    m.writeProperty("obj24", "UnexpectedIdentifier");

    m.writeProperty("obj24", "UnexpectedString");

    m.writeProperty("obj24", "UnexpectedNumber");

    m.writeProperty("obj24", "UnexpectedTokenIllegal");

    m.writeProperty("obj24", "UnexpectedToken");

    m.push(false);

    m.writeProperty("obj25", "Messages");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj22", "loaded");

    m.readVar("module");

    m.readProperty("obj22", "exports");

    m.writeVar("messages_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 6);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj26", "loaded");

    m.writeProperty("obj26", "id");

    m.writeProperty("obj26", "exports");

    m.push(false);

    m.writeProperty("obj5", 6);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 6);

    m.readProperty("obj27", "call");

    m.readVar("module");

    m.readProperty("obj26", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj26", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("ErrorHandler");

    m.push(false);

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ErrorHandler");

    m.push(false);

    m.writeVar("ErrorHandler");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "recordError");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "tolerate");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "constructError");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "createError");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "throwError");

    m.readVar("ErrorHandler");

    m.readProperty("obj28", "prototype");

    m.push(false);

    m.writeProperty("obj29", "tolerateError");

    m.readVar("ErrorHandler");

    m.writeVar("ErrorHandler");

    m.readVar("exports");

    m.readVar("ErrorHandler");

    m.writeProperty("obj30", "ErrorHandler");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj26", "loaded");

    m.readVar("module");

    m.readProperty("obj26", "exports");

    m.writeVar("error_handler_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj31", "loaded");

    m.writeProperty("obj31", "id");

    m.writeProperty("obj31", "exports");

    m.push(false);

    m.writeProperty("obj5", 7);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 7);

    m.readProperty("obj32", "call");

    m.readVar("module");

    m.readProperty("obj31", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj31", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("Token");

    m.push(false);

    m.push(false);

    m.readVar("exports");

    m.readProperty("obj33", "Token");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj33", "Token");

    m.functionCall("", 1, 1);

    m.initVar("Token");

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "BooleanLiteral");

    m.push(false);

    m.writeProperty("obj34", 1);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "EOF");

    m.push(false);

    m.writeProperty("obj34", 2);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "Identifier");

    m.push(false);

    m.writeProperty("obj34", 3);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "Keyword");

    m.push(false);

    m.writeProperty("obj34", 4);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "NullLiteral");

    m.push(false);

    m.writeProperty("obj34", 5);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "NumericLiteral");

    m.push(false);

    m.writeProperty("obj34", 6);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "Punctuator");

    m.push(false);

    m.writeProperty("obj34", 7);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "StringLiteral");

    m.push(false);

    m.writeProperty("obj34", 8);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "RegularExpression");

    m.push(false);

    m.writeProperty("obj34", 9);

    m.readVar("Token");

    m.readVar("Token");

    m.push(false);

    m.push(false);

    m.writeProperty("obj34", "Template");

    m.push(false);

    m.writeProperty("obj34", 10);

    m.readVar("exports");

    m.readProperty("obj33", "Token");

    m.writeVar("Token");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj33", "TokenName");

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "BooleanLiteral");

    m.push(false);

    m.writeProperty("obj35", 1);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "EOF");

    m.push(false);

    m.writeProperty("obj35", 2);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "Identifier");

    m.push(false);

    m.writeProperty("obj35", 3);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "Keyword");

    m.push(false);

    m.writeProperty("obj35", 4);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "NullLiteral");

    m.push(false);

    m.writeProperty("obj35", 5);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "NumericLiteral");

    m.push(false);

    m.writeProperty("obj35", 6);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "Punctuator");

    m.push(false);

    m.writeProperty("obj35", 7);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "StringLiteral");

    m.push(false);

    m.writeProperty("obj35", 8);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "RegularExpression");

    m.push(false);

    m.writeProperty("obj35", 9);

    m.readVar("exports");

    m.readProperty("obj33", "TokenName");

    m.readVar("Token");

    m.readProperty("obj34", "Template");

    m.push(false);

    m.writeProperty("obj35", 10);

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj31", "loaded");

    m.readVar("module");

    m.readProperty("obj31", "exports");

    m.writeVar("token_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 8);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj36", "loaded");

    m.writeProperty("obj36", "id");

    m.writeProperty("obj36", "exports");

    m.push(false);

    m.writeProperty("obj5", 8);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 8);

    m.readProperty("obj37", "call");

    m.readVar("module");

    m.readProperty("obj36", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj36", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("hexValue");

    m.initVar("octalValue");

    m.initVar("assert_1");

    m.initVar("messages_1");

    m.initVar("character_1");

    m.initVar("token_1");

    m.initVar("Scanner");

    m.push(false);

    m.writeVar("hexValue");

    m.push(false);

    m.writeVar("octalValue");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 4);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 4);

    m.readProperty("obj19", "exports");

    m.writeVar("assert_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 5);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 5);

    m.readProperty("obj22", "exports");

    m.writeVar("messages_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 9);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj38", "loaded");

    m.writeProperty("obj38", "id");

    m.writeProperty("obj38", "exports");

    m.push(false);

    m.writeProperty("obj5", 9);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 9);

    m.readProperty("obj39", "call");

    m.readVar("module");

    m.readProperty("obj38", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj38", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("Regex");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj40", "NonAsciiIdentifierPart");

    m.writeProperty("obj40", "NonAsciiIdentifierStart");

    m.push(false);

    m.writeVar("Regex");

    m.readVar("exports");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj41", "isOctalDigit");

    m.writeProperty("obj41", "isHexDigit");

    m.writeProperty("obj41", "isDecimalDigit");

    m.writeProperty("obj41", "isIdentifierPart");

    m.writeProperty("obj41", "isIdentifierStart");

    m.writeProperty("obj41", "isLineTerminator");

    m.writeProperty("obj41", "isWhiteSpace");

    m.writeProperty("obj41", "fromCodePoint");

    m.push(false);

    m.writeProperty("obj42", "Character");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj38", "loaded");

    m.readVar("module");

    m.readProperty("obj38", "exports");

    m.writeVar("character_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readProperty("obj31", "exports");

    m.writeVar("token_1");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Scanner");

    m.push(false);

    m.writeVar("Scanner");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "eof");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "throwUnexpectedToken");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "tolerateUnexpectedToken");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "skipSingleLineComment");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "skipMultiLineComment");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanComments");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "isFutureReservedWord");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "isStrictModeReservedWord");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "isRestrictedWord");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "isKeyword");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "codePointAt");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanHexEscape");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanUnicodeCodePointEscape");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "getIdentifier");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "getComplexIdentifier");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "octalToDecimal");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanIdentifier");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanPunctuator");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanHexLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanBinaryLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanOctalLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "isImplicitOctalLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanNumericLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanStringLiteral");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanTemplate");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "testRegExp");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanRegExpBody");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanRegExpFlags");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "scanRegExp");

    m.readVar("Scanner");

    m.readProperty("obj43", "prototype");

    m.push(false);

    m.writeProperty("obj44", "lex");

    m.readVar("Scanner");

    m.writeVar("Scanner");

    m.readVar("exports");

    m.readVar("Scanner");

    m.writeProperty("obj45", "Scanner");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj36", "loaded");

    m.readVar("module");

    m.readProperty("obj36", "exports");

    m.writeVar("scanner_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readProperty("obj10", "exports");

    m.writeVar("syntax_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 10);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj46", "loaded");

    m.writeProperty("obj46", "id");

    m.writeProperty("obj46", "exports");

    m.push(false);

    m.writeProperty("obj5", 10);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 10);

    m.readProperty("obj47", "call");

    m.readVar("module");

    m.readProperty("obj46", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj46", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("syntax_1");

    m.initVar("ArrayExpression");

    m.initVar("ArrayPattern");

    m.initVar("ArrowFunctionExpression");

    m.initVar("AssignmentExpression");

    m.initVar("AssignmentPattern");

    m.initVar("BinaryExpression");

    m.initVar("BlockStatement");

    m.initVar("BreakStatement");

    m.initVar("CallExpression");

    m.initVar("CatchClause");

    m.initVar("ClassBody");

    m.initVar("ClassDeclaration");

    m.initVar("ClassExpression");

    m.initVar("ComputedMemberExpression");

    m.initVar("ConditionalExpression");

    m.initVar("ContinueStatement");

    m.initVar("DebuggerStatement");

    m.initVar("Directive");

    m.initVar("DoWhileStatement");

    m.initVar("EmptyStatement");

    m.initVar("ExportAllDeclaration");

    m.initVar("ExportDefaultDeclaration");

    m.initVar("ExportNamedDeclaration");

    m.initVar("ExportSpecifier");

    m.initVar("ExpressionStatement");

    m.initVar("ForInStatement");

    m.initVar("ForOfStatement");

    m.initVar("ForStatement");

    m.initVar("FunctionDeclaration");

    m.initVar("FunctionExpression");

    m.initVar("Identifier");

    m.initVar("IfStatement");

    m.initVar("ImportDeclaration");

    m.initVar("ImportDefaultSpecifier");

    m.initVar("ImportNamespaceSpecifier");

    m.initVar("ImportSpecifier");

    m.initVar("LabeledStatement");

    m.initVar("Literal");

    m.initVar("MetaProperty");

    m.initVar("MethodDefinition");

    m.initVar("NewExpression");

    m.initVar("ObjectExpression");

    m.initVar("ObjectPattern");

    m.initVar("Program");

    m.initVar("Property");

    m.initVar("RegexLiteral");

    m.initVar("RestElement");

    m.initVar("ReturnStatement");

    m.initVar("SequenceExpression");

    m.initVar("SpreadElement");

    m.initVar("StaticMemberExpression");

    m.initVar("Super");

    m.initVar("SwitchCase");

    m.initVar("SwitchStatement");

    m.initVar("TaggedTemplateExpression");

    m.initVar("TemplateElement");

    m.initVar("TemplateLiteral");

    m.initVar("ThisExpression");

    m.initVar("ThrowStatement");

    m.initVar("TryStatement");

    m.initVar("UnaryExpression");

    m.initVar("UpdateExpression");

    m.initVar("VariableDeclaration");

    m.initVar("VariableDeclarator");

    m.initVar("WhileStatement");

    m.initVar("WithStatement");

    m.initVar("YieldExpression");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readProperty("obj10", "exports");

    m.writeVar("syntax_1");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ArrayExpression");

    m.push(false);

    m.writeVar("ArrayExpression");

    m.readVar("ArrayExpression");

    m.writeVar("ArrayExpression");

    m.readVar("exports");

    m.readVar("ArrayExpression");

    m.writeProperty("obj48", "ArrayExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ArrayPattern");

    m.push(false);

    m.writeVar("ArrayPattern");

    m.readVar("ArrayPattern");

    m.writeVar("ArrayPattern");

    m.readVar("exports");

    m.readVar("ArrayPattern");

    m.writeProperty("obj48", "ArrayPattern");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ArrowFunctionExpression");

    m.push(false);

    m.writeVar("ArrowFunctionExpression");

    m.readVar("ArrowFunctionExpression");

    m.writeVar("ArrowFunctionExpression");

    m.readVar("exports");

    m.readVar("ArrowFunctionExpression");

    m.writeProperty("obj48", "ArrowFunctionExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("AssignmentExpression");

    m.push(false);

    m.writeVar("AssignmentExpression");

    m.readVar("AssignmentExpression");

    m.writeVar("AssignmentExpression");

    m.readVar("exports");

    m.readVar("AssignmentExpression");

    m.writeProperty("obj48", "AssignmentExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("AssignmentPattern");

    m.push(false);

    m.writeVar("AssignmentPattern");

    m.readVar("AssignmentPattern");

    m.writeVar("AssignmentPattern");

    m.readVar("exports");

    m.readVar("AssignmentPattern");

    m.writeProperty("obj48", "AssignmentPattern");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("BinaryExpression");

    m.push(false);

    m.writeVar("BinaryExpression");

    m.readVar("BinaryExpression");

    m.writeVar("BinaryExpression");

    m.readVar("exports");

    m.readVar("BinaryExpression");

    m.writeProperty("obj48", "BinaryExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("BlockStatement");

    m.push(false);

    m.writeVar("BlockStatement");

    m.readVar("BlockStatement");

    m.writeVar("BlockStatement");

    m.readVar("exports");

    m.readVar("BlockStatement");

    m.writeProperty("obj48", "BlockStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("BreakStatement");

    m.push(false);

    m.writeVar("BreakStatement");

    m.readVar("BreakStatement");

    m.writeVar("BreakStatement");

    m.readVar("exports");

    m.readVar("BreakStatement");

    m.writeProperty("obj48", "BreakStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("CallExpression");

    m.push(false);

    m.writeVar("CallExpression");

    m.readVar("CallExpression");

    m.writeVar("CallExpression");

    m.readVar("exports");

    m.readVar("CallExpression");

    m.writeProperty("obj48", "CallExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("CatchClause");

    m.push(false);

    m.writeVar("CatchClause");

    m.readVar("CatchClause");

    m.writeVar("CatchClause");

    m.readVar("exports");

    m.readVar("CatchClause");

    m.writeProperty("obj48", "CatchClause");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ClassBody");

    m.push(false);

    m.writeVar("ClassBody");

    m.readVar("ClassBody");

    m.writeVar("ClassBody");

    m.readVar("exports");

    m.readVar("ClassBody");

    m.writeProperty("obj48", "ClassBody");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ClassDeclaration");

    m.push(false);

    m.writeVar("ClassDeclaration");

    m.readVar("ClassDeclaration");

    m.writeVar("ClassDeclaration");

    m.readVar("exports");

    m.readVar("ClassDeclaration");

    m.writeProperty("obj48", "ClassDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ClassExpression");

    m.push(false);

    m.writeVar("ClassExpression");

    m.readVar("ClassExpression");

    m.writeVar("ClassExpression");

    m.readVar("exports");

    m.readVar("ClassExpression");

    m.writeProperty("obj48", "ClassExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ComputedMemberExpression");

    m.push(false);

    m.writeVar("ComputedMemberExpression");

    m.readVar("ComputedMemberExpression");

    m.writeVar("ComputedMemberExpression");

    m.readVar("exports");

    m.readVar("ComputedMemberExpression");

    m.writeProperty("obj48", "ComputedMemberExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ConditionalExpression");

    m.push(false);

    m.writeVar("ConditionalExpression");

    m.readVar("ConditionalExpression");

    m.writeVar("ConditionalExpression");

    m.readVar("exports");

    m.readVar("ConditionalExpression");

    m.writeProperty("obj48", "ConditionalExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ContinueStatement");

    m.push(false);

    m.writeVar("ContinueStatement");

    m.readVar("ContinueStatement");

    m.writeVar("ContinueStatement");

    m.readVar("exports");

    m.readVar("ContinueStatement");

    m.writeProperty("obj48", "ContinueStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("DebuggerStatement");

    m.push(false);

    m.writeVar("DebuggerStatement");

    m.readVar("DebuggerStatement");

    m.writeVar("DebuggerStatement");

    m.readVar("exports");

    m.readVar("DebuggerStatement");

    m.writeProperty("obj48", "DebuggerStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Directive");

    m.push(false);

    m.writeVar("Directive");

    m.readVar("Directive");

    m.writeVar("Directive");

    m.readVar("exports");

    m.readVar("Directive");

    m.writeProperty("obj48", "Directive");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("DoWhileStatement");

    m.push(false);

    m.writeVar("DoWhileStatement");

    m.readVar("DoWhileStatement");

    m.writeVar("DoWhileStatement");

    m.readVar("exports");

    m.readVar("DoWhileStatement");

    m.writeProperty("obj48", "DoWhileStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("EmptyStatement");

    m.push(false);

    m.writeVar("EmptyStatement");

    m.readVar("EmptyStatement");

    m.writeVar("EmptyStatement");

    m.readVar("exports");

    m.readVar("EmptyStatement");

    m.writeProperty("obj48", "EmptyStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ExportAllDeclaration");

    m.push(false);

    m.writeVar("ExportAllDeclaration");

    m.readVar("ExportAllDeclaration");

    m.writeVar("ExportAllDeclaration");

    m.readVar("exports");

    m.readVar("ExportAllDeclaration");

    m.writeProperty("obj48", "ExportAllDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ExportDefaultDeclaration");

    m.push(false);

    m.writeVar("ExportDefaultDeclaration");

    m.readVar("ExportDefaultDeclaration");

    m.writeVar("ExportDefaultDeclaration");

    m.readVar("exports");

    m.readVar("ExportDefaultDeclaration");

    m.writeProperty("obj48", "ExportDefaultDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ExportNamedDeclaration");

    m.push(false);

    m.writeVar("ExportNamedDeclaration");

    m.readVar("ExportNamedDeclaration");

    m.writeVar("ExportNamedDeclaration");

    m.readVar("exports");

    m.readVar("ExportNamedDeclaration");

    m.writeProperty("obj48", "ExportNamedDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ExportSpecifier");

    m.push(false);

    m.writeVar("ExportSpecifier");

    m.readVar("ExportSpecifier");

    m.writeVar("ExportSpecifier");

    m.readVar("exports");

    m.readVar("ExportSpecifier");

    m.writeProperty("obj48", "ExportSpecifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ExpressionStatement");

    m.push(false);

    m.writeVar("ExpressionStatement");

    m.readVar("ExpressionStatement");

    m.writeVar("ExpressionStatement");

    m.readVar("exports");

    m.readVar("ExpressionStatement");

    m.writeProperty("obj48", "ExpressionStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ForInStatement");

    m.push(false);

    m.writeVar("ForInStatement");

    m.readVar("ForInStatement");

    m.writeVar("ForInStatement");

    m.readVar("exports");

    m.readVar("ForInStatement");

    m.writeProperty("obj48", "ForInStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ForOfStatement");

    m.push(false);

    m.writeVar("ForOfStatement");

    m.readVar("ForOfStatement");

    m.writeVar("ForOfStatement");

    m.readVar("exports");

    m.readVar("ForOfStatement");

    m.writeProperty("obj48", "ForOfStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ForStatement");

    m.push(false);

    m.writeVar("ForStatement");

    m.readVar("ForStatement");

    m.writeVar("ForStatement");

    m.readVar("exports");

    m.readVar("ForStatement");

    m.writeProperty("obj48", "ForStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("FunctionDeclaration");

    m.push(false);

    m.writeVar("FunctionDeclaration");

    m.readVar("FunctionDeclaration");

    m.writeVar("FunctionDeclaration");

    m.readVar("exports");

    m.readVar("FunctionDeclaration");

    m.writeProperty("obj48", "FunctionDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("FunctionExpression");

    m.push(false);

    m.writeVar("FunctionExpression");

    m.readVar("FunctionExpression");

    m.writeVar("FunctionExpression");

    m.readVar("exports");

    m.readVar("FunctionExpression");

    m.writeProperty("obj48", "FunctionExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Identifier");

    m.push(false);

    m.writeVar("Identifier");

    m.readVar("Identifier");

    m.writeVar("Identifier");

    m.readVar("exports");

    m.readVar("Identifier");

    m.writeProperty("obj48", "Identifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("IfStatement");

    m.push(false);

    m.writeVar("IfStatement");

    m.readVar("IfStatement");

    m.writeVar("IfStatement");

    m.readVar("exports");

    m.readVar("IfStatement");

    m.writeProperty("obj48", "IfStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ImportDeclaration");

    m.push(false);

    m.writeVar("ImportDeclaration");

    m.readVar("ImportDeclaration");

    m.writeVar("ImportDeclaration");

    m.readVar("exports");

    m.readVar("ImportDeclaration");

    m.writeProperty("obj48", "ImportDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ImportDefaultSpecifier");

    m.push(false);

    m.writeVar("ImportDefaultSpecifier");

    m.readVar("ImportDefaultSpecifier");

    m.writeVar("ImportDefaultSpecifier");

    m.readVar("exports");

    m.readVar("ImportDefaultSpecifier");

    m.writeProperty("obj48", "ImportDefaultSpecifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ImportNamespaceSpecifier");

    m.push(false);

    m.writeVar("ImportNamespaceSpecifier");

    m.readVar("ImportNamespaceSpecifier");

    m.writeVar("ImportNamespaceSpecifier");

    m.readVar("exports");

    m.readVar("ImportNamespaceSpecifier");

    m.writeProperty("obj48", "ImportNamespaceSpecifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ImportSpecifier");

    m.push(false);

    m.writeVar("ImportSpecifier");

    m.readVar("ImportSpecifier");

    m.writeVar("ImportSpecifier");

    m.readVar("exports");

    m.readVar("ImportSpecifier");

    m.writeProperty("obj48", "ImportSpecifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("LabeledStatement");

    m.push(false);

    m.writeVar("LabeledStatement");

    m.readVar("LabeledStatement");

    m.writeVar("LabeledStatement");

    m.readVar("exports");

    m.readVar("LabeledStatement");

    m.writeProperty("obj48", "LabeledStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Literal");

    m.push(false);

    m.writeVar("Literal");

    m.readVar("Literal");

    m.writeVar("Literal");

    m.readVar("exports");

    m.readVar("Literal");

    m.writeProperty("obj48", "Literal");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("MetaProperty");

    m.push(false);

    m.writeVar("MetaProperty");

    m.readVar("MetaProperty");

    m.writeVar("MetaProperty");

    m.readVar("exports");

    m.readVar("MetaProperty");

    m.writeProperty("obj48", "MetaProperty");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("MethodDefinition");

    m.push(false);

    m.writeVar("MethodDefinition");

    m.readVar("MethodDefinition");

    m.writeVar("MethodDefinition");

    m.readVar("exports");

    m.readVar("MethodDefinition");

    m.writeProperty("obj48", "MethodDefinition");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("NewExpression");

    m.push(false);

    m.writeVar("NewExpression");

    m.readVar("NewExpression");

    m.writeVar("NewExpression");

    m.readVar("exports");

    m.readVar("NewExpression");

    m.writeProperty("obj48", "NewExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ObjectExpression");

    m.push(false);

    m.writeVar("ObjectExpression");

    m.readVar("ObjectExpression");

    m.writeVar("ObjectExpression");

    m.readVar("exports");

    m.readVar("ObjectExpression");

    m.writeProperty("obj48", "ObjectExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ObjectPattern");

    m.push(false);

    m.writeVar("ObjectPattern");

    m.readVar("ObjectPattern");

    m.writeVar("ObjectPattern");

    m.readVar("exports");

    m.readVar("ObjectPattern");

    m.writeProperty("obj48", "ObjectPattern");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Program");

    m.push(false);

    m.writeVar("Program");

    m.readVar("Program");

    m.writeVar("Program");

    m.readVar("exports");

    m.readVar("Program");

    m.writeProperty("obj48", "Program");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Property");

    m.push(false);

    m.writeVar("Property");

    m.readVar("Property");

    m.writeVar("Property");

    m.readVar("exports");

    m.readVar("Property");

    m.writeProperty("obj48", "Property");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("RegexLiteral");

    m.push(false);

    m.writeVar("RegexLiteral");

    m.readVar("RegexLiteral");

    m.writeVar("RegexLiteral");

    m.readVar("exports");

    m.readVar("RegexLiteral");

    m.writeProperty("obj48", "RegexLiteral");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("RestElement");

    m.push(false);

    m.writeVar("RestElement");

    m.readVar("RestElement");

    m.writeVar("RestElement");

    m.readVar("exports");

    m.readVar("RestElement");

    m.writeProperty("obj48", "RestElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ReturnStatement");

    m.push(false);

    m.writeVar("ReturnStatement");

    m.readVar("ReturnStatement");

    m.writeVar("ReturnStatement");

    m.readVar("exports");

    m.readVar("ReturnStatement");

    m.writeProperty("obj48", "ReturnStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("SequenceExpression");

    m.push(false);

    m.writeVar("SequenceExpression");

    m.readVar("SequenceExpression");

    m.writeVar("SequenceExpression");

    m.readVar("exports");

    m.readVar("SequenceExpression");

    m.writeProperty("obj48", "SequenceExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("SpreadElement");

    m.push(false);

    m.writeVar("SpreadElement");

    m.readVar("SpreadElement");

    m.writeVar("SpreadElement");

    m.readVar("exports");

    m.readVar("SpreadElement");

    m.writeProperty("obj48", "SpreadElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("StaticMemberExpression");

    m.push(false);

    m.writeVar("StaticMemberExpression");

    m.readVar("StaticMemberExpression");

    m.writeVar("StaticMemberExpression");

    m.readVar("exports");

    m.readVar("StaticMemberExpression");

    m.writeProperty("obj48", "StaticMemberExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Super");

    m.push(false);

    m.writeVar("Super");

    m.readVar("Super");

    m.writeVar("Super");

    m.readVar("exports");

    m.readVar("Super");

    m.writeProperty("obj48", "Super");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("SwitchCase");

    m.push(false);

    m.writeVar("SwitchCase");

    m.readVar("SwitchCase");

    m.writeVar("SwitchCase");

    m.readVar("exports");

    m.readVar("SwitchCase");

    m.writeProperty("obj48", "SwitchCase");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("SwitchStatement");

    m.push(false);

    m.writeVar("SwitchStatement");

    m.readVar("SwitchStatement");

    m.writeVar("SwitchStatement");

    m.readVar("exports");

    m.readVar("SwitchStatement");

    m.writeProperty("obj48", "SwitchStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("TaggedTemplateExpression");

    m.push(false);

    m.writeVar("TaggedTemplateExpression");

    m.readVar("TaggedTemplateExpression");

    m.writeVar("TaggedTemplateExpression");

    m.readVar("exports");

    m.readVar("TaggedTemplateExpression");

    m.writeProperty("obj48", "TaggedTemplateExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("TemplateElement");

    m.push(false);

    m.writeVar("TemplateElement");

    m.readVar("TemplateElement");

    m.writeVar("TemplateElement");

    m.readVar("exports");

    m.readVar("TemplateElement");

    m.writeProperty("obj48", "TemplateElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("TemplateLiteral");

    m.push(false);

    m.writeVar("TemplateLiteral");

    m.readVar("TemplateLiteral");

    m.writeVar("TemplateLiteral");

    m.readVar("exports");

    m.readVar("TemplateLiteral");

    m.writeProperty("obj48", "TemplateLiteral");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ThisExpression");

    m.push(false);

    m.writeVar("ThisExpression");

    m.readVar("ThisExpression");

    m.writeVar("ThisExpression");

    m.readVar("exports");

    m.readVar("ThisExpression");

    m.writeProperty("obj48", "ThisExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("ThrowStatement");

    m.push(false);

    m.writeVar("ThrowStatement");

    m.readVar("ThrowStatement");

    m.writeVar("ThrowStatement");

    m.readVar("exports");

    m.readVar("ThrowStatement");

    m.writeProperty("obj48", "ThrowStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("TryStatement");

    m.push(false);

    m.writeVar("TryStatement");

    m.readVar("TryStatement");

    m.writeVar("TryStatement");

    m.readVar("exports");

    m.readVar("TryStatement");

    m.writeProperty("obj48", "TryStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("UnaryExpression");

    m.push(false);

    m.writeVar("UnaryExpression");

    m.readVar("UnaryExpression");

    m.writeVar("UnaryExpression");

    m.readVar("exports");

    m.readVar("UnaryExpression");

    m.writeProperty("obj48", "UnaryExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("UpdateExpression");

    m.push(false);

    m.writeVar("UpdateExpression");

    m.readVar("UpdateExpression");

    m.writeVar("UpdateExpression");

    m.readVar("exports");

    m.readVar("UpdateExpression");

    m.writeProperty("obj48", "UpdateExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("VariableDeclaration");

    m.push(false);

    m.writeVar("VariableDeclaration");

    m.readVar("VariableDeclaration");

    m.writeVar("VariableDeclaration");

    m.readVar("exports");

    m.readVar("VariableDeclaration");

    m.writeProperty("obj48", "VariableDeclaration");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("VariableDeclarator");

    m.push(false);

    m.writeVar("VariableDeclarator");

    m.readVar("VariableDeclarator");

    m.writeVar("VariableDeclarator");

    m.readVar("exports");

    m.readVar("VariableDeclarator");

    m.writeProperty("obj48", "VariableDeclarator");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("WhileStatement");

    m.push(false);

    m.writeVar("WhileStatement");

    m.readVar("WhileStatement");

    m.writeVar("WhileStatement");

    m.readVar("exports");

    m.readVar("WhileStatement");

    m.writeProperty("obj48", "WhileStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("WithStatement");

    m.push(false);

    m.writeVar("WithStatement");

    m.readVar("WithStatement");

    m.writeVar("WithStatement");

    m.readVar("exports");

    m.readVar("WithStatement");

    m.writeProperty("obj48", "WithStatement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("YieldExpression");

    m.push(false);

    m.writeVar("YieldExpression");

    m.readVar("YieldExpression");

    m.writeVar("YieldExpression");

    m.readVar("exports");

    m.readVar("YieldExpression");

    m.writeProperty("obj48", "YieldExpression");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj46", "loaded");

    m.readVar("module");

    m.readProperty("obj46", "exports");

    m.writeVar("Node");

    m.push(false);

    m.writeVar("ArrowParameterPlaceHolder");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Parser");

    m.push(false);

    m.writeVar("Parser");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "throwError");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "tolerateError");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "unexpectedTokenError");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "throwUnexpectedToken");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "tolerateUnexpectedToken");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "collectComments");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "getTokenRaw");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "convertToken");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "nextToken");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "nextRegexToken");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "createNode");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "startNode");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "finalize");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "expect");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "expectCommaSeparator");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "expectKeyword");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "match");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "matchKeyword");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "matchContextualKeyword");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "matchAssign");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "isolateCoverGrammar");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "inheritCoverGrammar");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "consumeSemicolon");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePrimaryExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseSpreadElement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseArrayInitializer");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePropertyMethod");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePropertyMethodFunction");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseObjectPropertyKey");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "isPropertyKey");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseObjectProperty");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseObjectInitializer");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseTemplateHead");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseTemplateElement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseTemplateLiteral");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "reinterpretExpressionAsPattern");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseGroupExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseArguments");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "isIdentifierName");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseIdentifierName");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseNewExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseLeftHandSideExpressionAllowCall");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseSuper");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseLeftHandSideExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseUpdateExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseUnaryExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseExponentiationExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "binaryPrecedence");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseBinaryExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseConditionalExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "checkPatternParam");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "reinterpretAsCoverFormalsList");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseAssignmentExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseStatementListItem");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseBlock");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseLexicalBinding");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseBindingList");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "isLexicalDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseLexicalDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseBindingRestElement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseArrayPattern");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePropertyPattern");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseObjectPattern");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePattern");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parsePatternWithDefault");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseVariableIdentifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseVariableDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseVariableDeclarationList");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseVariableStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseEmptyStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseExpressionStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseIfStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseDoWhileStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseWhileStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseForStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseContinueStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseBreakStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseReturnStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseWithStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseSwitchCase");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseSwitchStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseLabelledStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseThrowStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseCatchClause");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFinallyClause");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseTryStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseDebuggerStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseStatement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFunctionSourceElements");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "validateParam");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseRestElement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFormalParameter");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFormalParameters");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFunctionDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseFunctionExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseDirective");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseDirectivePrologues");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "qualifiedPropertyName");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseGetterMethod");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseSetterMethod");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseGeneratorMethod");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "isStartOfExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseYieldExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseClassElement");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseClassElementList");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseClassBody");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseClassDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseClassExpression");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseProgram");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseModuleSpecifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseImportSpecifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseNamedImports");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseImportDefaultSpecifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseImportNamespaceSpecifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseImportDeclaration");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseExportSpecifier");

    m.readVar("Parser");

    m.readProperty("obj49", "prototype");

    m.push(false);

    m.writeProperty("obj50", "parseExportDeclaration");

    m.readVar("Parser");

    m.writeVar("Parser");

    m.readVar("exports");

    m.readVar("Parser");

    m.writeProperty("obj51", "Parser");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj17", "loaded");

    m.readVar("module");

    m.readProperty("obj17", "exports");

    m.writeVar("parser_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 11);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj52", "loaded");

    m.writeProperty("obj52", "id");

    m.writeProperty("obj52", "exports");

    m.push(false);

    m.writeProperty("obj5", 11);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 11);

    m.readProperty("obj53", "call");

    m.readVar("module");

    m.readProperty("obj52", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj52", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("getQualifiedElementName");

    m.initVar("__extends");

    m.initVar("character_1");

    m.initVar("token_1");

    m.initVar("parser_1");

    m.initVar("xhtml_entities_1");

    m.initVar("jsx_syntax_1");

    m.initVar("Node");

    m.initVar("JSXNode");

    m.initVar("JSXToken");

    m.initVar("JSXParser");

    m.push(false);

    m.writeVar("getQualifiedElementName");

    m.push(false);

    m.readProperty("obj54", "__extends");

    m.push(false);

    m.writeVar("__extends");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 9);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 9);

    m.readProperty("obj38", "exports");

    m.writeVar("character_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readProperty("obj31", "exports");

    m.writeVar("token_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 3);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 3);

    m.readProperty("obj17", "exports");

    m.writeVar("parser_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 12);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj55", "loaded");

    m.writeProperty("obj55", "id");

    m.writeProperty("obj55", "exports");

    m.push(false);

    m.writeProperty("obj5", 12);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 12);

    m.readProperty("obj56", "call");

    m.readVar("module");

    m.readProperty("obj55", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj55", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.push(false);

    m.readVar("exports");

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

    m.writeProperty("obj57", "rang");

    m.writeProperty("obj57", "lang");

    m.writeProperty("obj57", "diams");

    m.writeProperty("obj57", "hearts");

    m.writeProperty("obj57", "clubs");

    m.writeProperty("obj57", "spades");

    m.writeProperty("obj57", "loz");

    m.writeProperty("obj57", "rfloor");

    m.writeProperty("obj57", "lfloor");

    m.writeProperty("obj57", "rceil");

    m.writeProperty("obj57", "lceil");

    m.writeProperty("obj57", "sdot");

    m.writeProperty("obj57", "perp");

    m.writeProperty("obj57", "otimes");

    m.writeProperty("obj57", "oplus");

    m.writeProperty("obj57", "supe");

    m.writeProperty("obj57", "sube");

    m.writeProperty("obj57", "nsub");

    m.writeProperty("obj57", "sup");

    m.writeProperty("obj57", "sub");

    m.writeProperty("obj57", "ge");

    m.writeProperty("obj57", "le");

    m.writeProperty("obj57", "equiv");

    m.writeProperty("obj57", "ne");

    m.writeProperty("obj57", "asymp");

    m.writeProperty("obj57", "cong");

    m.writeProperty("obj57", "sim");

    m.writeProperty("obj57", "there4");

    m.writeProperty("obj57", "int");

    m.writeProperty("obj57", "cup");

    m.writeProperty("obj57", "cap");

    m.writeProperty("obj57", "or");

    m.writeProperty("obj57", "and");

    m.writeProperty("obj57", "ang");

    m.writeProperty("obj57", "infin");

    m.writeProperty("obj57", "prop");

    m.writeProperty("obj57", "radic");

    m.writeProperty("obj57", "lowast");

    m.writeProperty("obj57", "minus");

    m.writeProperty("obj57", "sum");

    m.writeProperty("obj57", "prod");

    m.writeProperty("obj57", "ni");

    m.writeProperty("obj57", "notin");

    m.writeProperty("obj57", "isin");

    m.writeProperty("obj57", "nabla");

    m.writeProperty("obj57", "empty");

    m.writeProperty("obj57", "exist");

    m.writeProperty("obj57", "part");

    m.writeProperty("obj57", "forall");

    m.writeProperty("obj57", "hArr");

    m.writeProperty("obj57", "dArr");

    m.writeProperty("obj57", "rArr");

    m.writeProperty("obj57", "uArr");

    m.writeProperty("obj57", "lArr");

    m.writeProperty("obj57", "crarr");

    m.writeProperty("obj57", "harr");

    m.writeProperty("obj57", "darr");

    m.writeProperty("obj57", "rarr");

    m.writeProperty("obj57", "uarr");

    m.writeProperty("obj57", "larr");

    m.writeProperty("obj57", "alefsym");

    m.writeProperty("obj57", "trade");

    m.writeProperty("obj57", "real");

    m.writeProperty("obj57", "weierp");

    m.writeProperty("obj57", "image");

    m.writeProperty("obj57", "euro");

    m.writeProperty("obj57", "frasl");

    m.writeProperty("obj57", "oline");

    m.writeProperty("obj57", "rsaquo");

    m.writeProperty("obj57", "lsaquo");

    m.writeProperty("obj57", "Prime");

    m.writeProperty("obj57", "prime");

    m.writeProperty("obj57", "permil");

    m.writeProperty("obj57", "hellip");

    m.writeProperty("obj57", "bull");

    m.writeProperty("obj57", "Dagger");

    m.writeProperty("obj57", "dagger");

    m.writeProperty("obj57", "bdquo");

    m.writeProperty("obj57", "rdquo");

    m.writeProperty("obj57", "ldquo");

    m.writeProperty("obj57", "sbquo");

    m.writeProperty("obj57", "rsquo");

    m.writeProperty("obj57", "lsquo");

    m.writeProperty("obj57", "mdash");

    m.writeProperty("obj57", "ndash");

    m.writeProperty("obj57", "rlm");

    m.writeProperty("obj57", "lrm");

    m.writeProperty("obj57", "zwj");

    m.writeProperty("obj57", "zwnj");

    m.writeProperty("obj57", "thinsp");

    m.writeProperty("obj57", "emsp");

    m.writeProperty("obj57", "ensp");

    m.writeProperty("obj57", "piv");

    m.writeProperty("obj57", "upsih");

    m.writeProperty("obj57", "thetasym");

    m.writeProperty("obj57", "omega");

    m.writeProperty("obj57", "psi");

    m.writeProperty("obj57", "chi");

    m.writeProperty("obj57", "phi");

    m.writeProperty("obj57", "upsilon");

    m.writeProperty("obj57", "tau");

    m.writeProperty("obj57", "sigma");

    m.writeProperty("obj57", "sigmaf");

    m.writeProperty("obj57", "rho");

    m.writeProperty("obj57", "pi");

    m.writeProperty("obj57", "omicron");

    m.writeProperty("obj57", "xi");

    m.writeProperty("obj57", "nu");

    m.writeProperty("obj57", "mu");

    m.writeProperty("obj57", "lambda");

    m.writeProperty("obj57", "kappa");

    m.writeProperty("obj57", "iota");

    m.writeProperty("obj57", "theta");

    m.writeProperty("obj57", "eta");

    m.writeProperty("obj57", "zeta");

    m.writeProperty("obj57", "epsilon");

    m.writeProperty("obj57", "delta");

    m.writeProperty("obj57", "gamma");

    m.writeProperty("obj57", "beta");

    m.writeProperty("obj57", "alpha");

    m.writeProperty("obj57", "Omega");

    m.writeProperty("obj57", "Psi");

    m.writeProperty("obj57", "Chi");

    m.writeProperty("obj57", "Phi");

    m.writeProperty("obj57", "Upsilon");

    m.writeProperty("obj57", "Tau");

    m.writeProperty("obj57", "Sigma");

    m.writeProperty("obj57", "Rho");

    m.writeProperty("obj57", "Pi");

    m.writeProperty("obj57", "Omicron");

    m.writeProperty("obj57", "Xi");

    m.writeProperty("obj57", "Nu");

    m.writeProperty("obj57", "Mu");

    m.writeProperty("obj57", "Lambda");

    m.writeProperty("obj57", "Kappa");

    m.writeProperty("obj57", "Iota");

    m.writeProperty("obj57", "Theta");

    m.writeProperty("obj57", "Eta");

    m.writeProperty("obj57", "Zeta");

    m.writeProperty("obj57", "Epsilon");

    m.writeProperty("obj57", "Delta");

    m.writeProperty("obj57", "Gamma");

    m.writeProperty("obj57", "Beta");

    m.writeProperty("obj57", "Alpha");

    m.writeProperty("obj57", "tilde");

    m.writeProperty("obj57", "circ");

    m.writeProperty("obj57", "fnof");

    m.writeProperty("obj57", "Yuml");

    m.writeProperty("obj57", "scaron");

    m.writeProperty("obj57", "Scaron");

    m.writeProperty("obj57", "oelig");

    m.writeProperty("obj57", "OElig");

    m.writeProperty("obj57", "yuml");

    m.writeProperty("obj57", "thorn");

    m.writeProperty("obj57", "yacute");

    m.writeProperty("obj57", "uuml");

    m.writeProperty("obj57", "ucirc");

    m.writeProperty("obj57", "uacute");

    m.writeProperty("obj57", "ugrave");

    m.writeProperty("obj57", "oslash");

    m.writeProperty("obj57", "divide");

    m.writeProperty("obj57", "ouml");

    m.writeProperty("obj57", "otilde");

    m.writeProperty("obj57", "ocirc");

    m.writeProperty("obj57", "oacute");

    m.writeProperty("obj57", "ograve");

    m.writeProperty("obj57", "ntilde");

    m.writeProperty("obj57", "eth");

    m.writeProperty("obj57", "iuml");

    m.writeProperty("obj57", "icirc");

    m.writeProperty("obj57", "iacute");

    m.writeProperty("obj57", "igrave");

    m.writeProperty("obj57", "euml");

    m.writeProperty("obj57", "ecirc");

    m.writeProperty("obj57", "eacute");

    m.writeProperty("obj57", "egrave");

    m.writeProperty("obj57", "ccedil");

    m.writeProperty("obj57", "aelig");

    m.writeProperty("obj57", "aring");

    m.writeProperty("obj57", "auml");

    m.writeProperty("obj57", "atilde");

    m.writeProperty("obj57", "acirc");

    m.writeProperty("obj57", "aacute");

    m.writeProperty("obj57", "agrave");

    m.writeProperty("obj57", "szlig");

    m.writeProperty("obj57", "THORN");

    m.writeProperty("obj57", "Yacute");

    m.writeProperty("obj57", "Uuml");

    m.writeProperty("obj57", "Ucirc");

    m.writeProperty("obj57", "Uacute");

    m.writeProperty("obj57", "Ugrave");

    m.writeProperty("obj57", "Oslash");

    m.writeProperty("obj57", "times");

    m.writeProperty("obj57", "Ouml");

    m.writeProperty("obj57", "Otilde");

    m.writeProperty("obj57", "Ocirc");

    m.writeProperty("obj57", "Oacute");

    m.writeProperty("obj57", "Ograve");

    m.writeProperty("obj57", "Ntilde");

    m.writeProperty("obj57", "ETH");

    m.writeProperty("obj57", "Iuml");

    m.writeProperty("obj57", "Icirc");

    m.writeProperty("obj57", "Iacute");

    m.writeProperty("obj57", "Igrave");

    m.writeProperty("obj57", "Euml");

    m.writeProperty("obj57", "Ecirc");

    m.writeProperty("obj57", "Eacute");

    m.writeProperty("obj57", "Egrave");

    m.writeProperty("obj57", "Ccedil");

    m.writeProperty("obj57", "AElig");

    m.writeProperty("obj57", "Aring");

    m.writeProperty("obj57", "Auml");

    m.writeProperty("obj57", "Atilde");

    m.writeProperty("obj57", "Acirc");

    m.writeProperty("obj57", "Aacute");

    m.writeProperty("obj57", "Agrave");

    m.writeProperty("obj57", "iquest");

    m.writeProperty("obj57", "frac34");

    m.writeProperty("obj57", "frac12");

    m.writeProperty("obj57", "frac14");

    m.writeProperty("obj57", "raquo");

    m.writeProperty("obj57", "ordm");

    m.writeProperty("obj57", "sup1");

    m.writeProperty("obj57", "cedil");

    m.writeProperty("obj57", "middot");

    m.writeProperty("obj57", "para");

    m.writeProperty("obj57", "micro");

    m.writeProperty("obj57", "acute");

    m.writeProperty("obj57", "sup3");

    m.writeProperty("obj57", "sup2");

    m.writeProperty("obj57", "plusmn");

    m.writeProperty("obj57", "deg");

    m.writeProperty("obj57", "macr");

    m.writeProperty("obj57", "reg");

    m.writeProperty("obj57", "shy");

    m.writeProperty("obj57", "not");

    m.writeProperty("obj57", "laquo");

    m.writeProperty("obj57", "ordf");

    m.writeProperty("obj57", "copy");

    m.writeProperty("obj57", "uml");

    m.writeProperty("obj57", "sect");

    m.writeProperty("obj57", "brvbar");

    m.writeProperty("obj57", "yen");

    m.writeProperty("obj57", "curren");

    m.writeProperty("obj57", "pound");

    m.writeProperty("obj57", "cent");

    m.writeProperty("obj57", "iexcl");

    m.writeProperty("obj57", "nbsp");

    m.writeProperty("obj57", "gt");

    m.writeProperty("obj57", "apos");

    m.writeProperty("obj57", "amp");

    m.writeProperty("obj57", "quot");

    m.push(false);

    m.writeProperty("obj58", "XHTMLEntities");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj55", "loaded");

    m.readVar("module");

    m.readProperty("obj55", "exports");

    m.writeVar("xhtml_entities_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 13);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj59", "loaded");

    m.writeProperty("obj59", "id");

    m.writeProperty("obj59", "exports");

    m.push(false);

    m.writeProperty("obj5", 13);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 13);

    m.readProperty("obj60", "call");

    m.readVar("module");

    m.readProperty("obj59", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj59", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.push(false);

    m.readVar("exports");

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

    m.writeProperty("obj61", "JSXText");

    m.writeProperty("obj61", "JSXSpreadAttribute");

    m.writeProperty("obj61", "JSXOpeningElement");

    m.writeProperty("obj61", "JSXNamespacedName");

    m.writeProperty("obj61", "JSXMemberExpression");

    m.writeProperty("obj61", "JSXIdentifier");

    m.writeProperty("obj61", "JSXExpressionContainer");

    m.writeProperty("obj61", "JSXEmptyExpression");

    m.writeProperty("obj61", "JSXElement");

    m.writeProperty("obj61", "JSXClosingElement");

    m.writeProperty("obj61", "JSXAttribute");

    m.push(false);

    m.writeProperty("obj62", "JSXSyntax");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj59", "loaded");

    m.readVar("module");

    m.readProperty("obj59", "exports");

    m.writeVar("jsx_syntax_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 10);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 10);

    m.readProperty("obj46", "exports");

    m.writeVar("Node");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 14);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj63", "loaded");

    m.writeProperty("obj63", "id");

    m.writeProperty("obj63", "exports");

    m.push(false);

    m.writeProperty("obj5", 14);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 14);

    m.readProperty("obj64", "call");

    m.readVar("module");

    m.readProperty("obj63", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj63", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("jsx_syntax_1");

    m.initVar("JSXClosingElement");

    m.initVar("JSXElement");

    m.initVar("JSXEmptyExpression");

    m.initVar("JSXExpressionContainer");

    m.initVar("JSXIdentifier");

    m.initVar("JSXMemberExpression");

    m.initVar("JSXAttribute");

    m.initVar("JSXNamespacedName");

    m.initVar("JSXOpeningElement");

    m.initVar("JSXSpreadAttribute");

    m.initVar("JSXText");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 13);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 13);

    m.readProperty("obj59", "exports");

    m.writeVar("jsx_syntax_1");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXClosingElement");

    m.push(false);

    m.writeVar("JSXClosingElement");

    m.readVar("JSXClosingElement");

    m.writeVar("JSXClosingElement");

    m.readVar("exports");

    m.readVar("JSXClosingElement");

    m.writeProperty("obj65", "JSXClosingElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXElement");

    m.push(false);

    m.writeVar("JSXElement");

    m.readVar("JSXElement");

    m.writeVar("JSXElement");

    m.readVar("exports");

    m.readVar("JSXElement");

    m.writeProperty("obj65", "JSXElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXEmptyExpression");

    m.push(false);

    m.writeVar("JSXEmptyExpression");

    m.readVar("JSXEmptyExpression");

    m.writeVar("JSXEmptyExpression");

    m.readVar("exports");

    m.readVar("JSXEmptyExpression");

    m.writeProperty("obj65", "JSXEmptyExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXExpressionContainer");

    m.push(false);

    m.writeVar("JSXExpressionContainer");

    m.readVar("JSXExpressionContainer");

    m.writeVar("JSXExpressionContainer");

    m.readVar("exports");

    m.readVar("JSXExpressionContainer");

    m.writeProperty("obj65", "JSXExpressionContainer");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXIdentifier");

    m.push(false);

    m.writeVar("JSXIdentifier");

    m.readVar("JSXIdentifier");

    m.writeVar("JSXIdentifier");

    m.readVar("exports");

    m.readVar("JSXIdentifier");

    m.writeProperty("obj65", "JSXIdentifier");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXMemberExpression");

    m.push(false);

    m.writeVar("JSXMemberExpression");

    m.readVar("JSXMemberExpression");

    m.writeVar("JSXMemberExpression");

    m.readVar("exports");

    m.readVar("JSXMemberExpression");

    m.writeProperty("obj65", "JSXMemberExpression");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXAttribute");

    m.push(false);

    m.writeVar("JSXAttribute");

    m.readVar("JSXAttribute");

    m.writeVar("JSXAttribute");

    m.readVar("exports");

    m.readVar("JSXAttribute");

    m.writeProperty("obj65", "JSXAttribute");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXNamespacedName");

    m.push(false);

    m.writeVar("JSXNamespacedName");

    m.readVar("JSXNamespacedName");

    m.writeVar("JSXNamespacedName");

    m.readVar("exports");

    m.readVar("JSXNamespacedName");

    m.writeProperty("obj65", "JSXNamespacedName");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXOpeningElement");

    m.push(false);

    m.writeVar("JSXOpeningElement");

    m.readVar("JSXOpeningElement");

    m.writeVar("JSXOpeningElement");

    m.readVar("exports");

    m.readVar("JSXOpeningElement");

    m.writeProperty("obj65", "JSXOpeningElement");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXSpreadAttribute");

    m.push(false);

    m.writeVar("JSXSpreadAttribute");

    m.readVar("JSXSpreadAttribute");

    m.writeVar("JSXSpreadAttribute");

    m.readVar("exports");

    m.readVar("JSXSpreadAttribute");

    m.writeProperty("obj65", "JSXSpreadAttribute");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("JSXText");

    m.push(false);

    m.writeVar("JSXText");

    m.readVar("JSXText");

    m.writeVar("JSXText");

    m.readVar("exports");

    m.readVar("JSXText");

    m.writeProperty("obj65", "JSXText");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj63", "loaded");

    m.readVar("module");

    m.readProperty("obj63", "exports");

    m.writeVar("JSXNode");

    m.push(false);

    m.readVar("JSXToken");

    m.push(false);

    m.writeVar("JSXToken");

    m.functionCall("", 1, 1);

    m.initVar("JSXToken");

    m.readVar("JSXToken");

    m.readVar("JSXToken");

    m.push(false);

    m.push(false);

    m.writeProperty("obj66", "Identifier");

    m.push(false);

    m.writeProperty("obj66", 100);

    m.readVar("JSXToken");

    m.readVar("JSXToken");

    m.push(false);

    m.push(false);

    m.writeProperty("obj66", "Text");

    m.push(false);

    m.writeProperty("obj66", 101);

    m.readVar("token_1");

    m.readProperty("obj33", "TokenName");

    m.readVar("JSXToken");

    m.readProperty("obj66", "Identifier");

    m.push(false);

    m.writeProperty("obj35", 100);

    m.readVar("token_1");

    m.readProperty("obj33", "TokenName");

    m.readVar("JSXToken");

    m.readProperty("obj66", "Text");

    m.push(false);

    m.writeProperty("obj35", 101);

    m.push(false);

    m.readVar("parser_1");

    m.readProperty("obj51", "Parser");

    m.functionCall("", 1, 1);

    m.initVar("_super");

    m.initVar("JSXParser");

    m.push(false);

    m.writeVar("JSXParser");

    m.readVar("__extends");

    m.readVar("JSXParser");

    m.readVar("_super");

    m.functionCall("", 2, 2);

    m.initVar("d");

    m.initVar("b");

    m.initVar("__");

    m.initVar("p");

    m.push(false);

    m.writeVar("__");

    m.readVar("b");

    m.readVar("d");

    m.readVar("b");

    m.push(false);

    m.binaryOp();

    m.readVar("__");

    m.readVar("b");

    m.readProperty("obj49", "prototype");

    m.writeProperty("obj67", "prototype");

    m.readVar("__");

    m.functionCall("__", 0, 0);

    m.readVar("d");

    m.writeProperty("obj68", "constructor");

    m.writeProperty("obj69", "prototype");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parsePrimaryExpression");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "startJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "finishJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "reenterJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "createJSXNode");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "createJSXChildNode");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "scanXHTMLEntity");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "lexJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "nextJSXToken");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "nextJSXText");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "peekJSXToken");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "expectJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "matchJSX");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXIdentifier");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXElementName");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXAttributeName");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXStringLiteralAttribute");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXExpressionAttribute");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXAttributeValue");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXNameValueAttribute");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXSpreadAttribute");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXAttributes");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXOpeningElement");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXBoundaryElement");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXEmptyExpression");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXExpressionContainer");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXChildren");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseComplexJSXElement");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXElement");

    m.readVar("JSXParser");

    m.readProperty("obj69", "prototype");

    m.push(false);

    m.writeProperty("obj68", "parseJSXRoot");

    m.readVar("JSXParser");

    m.writeVar("JSXParser");

    m.readVar("exports");

    m.readVar("JSXParser");

    m.writeProperty("obj54", "JSXParser");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj52", "loaded");

    m.readVar("module");

    m.readProperty("obj52", "exports");

    m.writeVar("jsx_parser_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 15);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.push(false);

    m.readVar("moduleId");

    m.push(false);

    m.writeProperty("obj70", "loaded");

    m.writeProperty("obj70", "id");

    m.writeProperty("obj70", "exports");

    m.push(false);

    m.writeProperty("obj5", 15);

    m.writeVar("module");

    m.readVar("modules");

    m.readVar("moduleId");

    m.readProperty("obj3", 15);

    m.readProperty("obj71", "call");

    m.readVar("module");

    m.readProperty("obj70", "exports");

    m.readVar("module");

    m.readVar("module");

    m.readProperty("obj70", "exports");

    m.readVar("__webpack_require__");

    m.functionCall("call", 1, 4);

    m.initVar("module");

    m.initVar("exports");

    m.initVar("__webpack_require__");

    m.initVar("scanner_1");

    m.initVar("error_handler_1");

    m.initVar("token_1");

    m.initVar("Reader");

    m.initVar("Tokenizer");

    m.push(false);

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 8);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 8);

    m.readProperty("obj36", "exports");

    m.writeVar("scanner_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 6);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 6);

    m.readProperty("obj26", "exports");

    m.writeVar("error_handler_1");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 7);

    m.readProperty("obj31", "exports");

    m.writeVar("token_1");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Reader");

    m.push(false);

    m.writeVar("Reader");

    m.readVar("Reader");

    m.readProperty("obj72", "prototype");

    m.push(false);

    m.writeProperty("obj73", "beforeFunctionExpression");

    m.readVar("Reader");

    m.readProperty("obj72", "prototype");

    m.push(false);

    m.writeProperty("obj73", "isRegexStart");

    m.readVar("Reader");

    m.readProperty("obj72", "prototype");

    m.push(false);

    m.writeProperty("obj73", "push");

    m.readVar("Reader");

    m.writeVar("Reader");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("Tokenizer");

    m.push(false);

    m.writeVar("Tokenizer");

    m.readVar("Tokenizer");

    m.readProperty("obj74", "prototype");

    m.push(false);

    m.writeProperty("obj75", "errors");

    m.readVar("Tokenizer");

    m.readProperty("obj74", "prototype");

    m.push(false);

    m.writeProperty("obj75", "getNextToken");

    m.readVar("Tokenizer");

    m.writeVar("Tokenizer");

    m.readVar("exports");

    m.readVar("Tokenizer");

    m.writeProperty("obj76", "Tokenizer");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj70", "loaded");

    m.readVar("module");

    m.readProperty("obj70", "exports");

    m.writeVar("tokenizer_1");

    m.readVar("exports");

    m.readVar("parse");

    m.writeProperty("obj77", "parse");

    m.readVar("exports");

    m.readVar("tokenize");

    m.writeProperty("obj77", "tokenize");

    m.readVar("__webpack_require__");

    m.push(false);

    m.functionCall("__webpack_require__", 1, 1);

    m.initVar("moduleId");

    m.initVar("module");

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readVar("installedModules");

    m.readVar("moduleId");

    m.readProperty("obj5", 2);

    m.readProperty("obj10", "exports");

    m.writeVar("syntax_1");

    m.readVar("exports");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.writeProperty("obj77", "Syntax");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj77", "version");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj6", "loaded");

    m.readVar("module");

    m.readProperty("obj6", "exports");

    m.writeProperty("obj78", "exports");

    m.writeVar("esprima");

    m.readVar("esprima");

    m.readProperty("obj77", "parse");

    m.readVar("src");

    m.push(false);

    m.writeProperty("obj79", "tolerant");

    m.push(false);

    m.functionCall("parse", 3, 2);

    m.initVar("code");

    m.initVar("options");

    m.initVar("delegate");

    m.initVar("commentHandler");

    m.initVar("proxyDelegate");

    m.initVar("parserDelegate");

    m.initVar("collectComment");

    m.initVar("attachComment");

    m.initVar("parser");

    m.initVar("ast");

    m.push(false);

    m.writeVar("commentHandler");

    m.push(false);

    m.writeVar("proxyDelegate");

    m.readVar("delegate");

    m.push(false);

    m.writeVar("parserDelegate");

    m.push(false);

    m.writeVar("collectComment");

    m.readVar("options");

    m.readVar("options");

    m.readProperty("obj79", "comment");

    m.writeVar("collectComment");

    m.readVar("options");

    m.readProperty("obj79", "attachComment");

    m.writeVar("attachComment");

    m.readVar("collectComment");

    m.readVar("attachComment");

    m.readVar("options");

    m.readVar("options");

    m.readProperty("obj79", "jsx");

    m.unaryOp();

    m.readVar("parser_1");

    m.readProperty("obj51", "Parser");

    m.readVar("code");

    m.readVar("options");

    m.readVar("parserDelegate");

    m.functionCall("Parser", 3, 3);

    m.initVar("code");

    m.initVar("options");

    m.initVar("delegate");

    m.readVar("options");

    m.push(false);

    m.binaryOp();

    m.readVar("options");

    m.readProperty("obj79", "range");

    m.readVar("options");

    m.readProperty("obj79", "loc");

    m.push(false);

    m.readVar("options");

    m.readProperty("obj79", "tokens");

    m.readVar("options");

    m.readProperty("obj79", "comment");

    m.readVar("options");

    m.readProperty("obj79", "tolerant");

    m.readVar("options");

    m.readProperty("obj79", "tolerant");

    m.writeProperty("obj80", "tolerant");

    m.writeProperty("obj80", "comment");

    m.writeProperty("obj80", "tokens");

    m.writeProperty("obj80", "source");

    m.writeProperty("obj80", "loc");

    m.writeProperty("obj80", "range");

    m.push(false);

    m.writeProperty("obj81", "config");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readVar("delegate");

    m.writeProperty("obj81", "delegate");

    m.readVar("error_handler_1");

    m.readProperty("obj30", "ErrorHandler");

    m.functionCall("ErrorHandler", 0, 0);

    m.push(false);

    m.writeProperty("obj82", "errors");

    m.push(false);

    m.writeProperty("obj82", "tolerant");

    m.writeProperty("obj81", "errorHandler");

    m.readProperty("obj81", "errorHandler");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tolerant");

    m.writeProperty("obj82", "tolerant");

    m.readVar("scanner_1");

    m.readProperty("obj45", "Scanner");

    m.readVar("code");

    m.readProperty("obj81", "errorHandler");

    m.functionCall("Scanner", 2, 2);

    m.initVar("code");

    m.initVar("handler");

    m.readVar("code");

    m.writeProperty("obj83", "source");

    m.readVar("handler");

    m.writeProperty("obj83", "errorHandler");

    m.push(false);

    m.writeProperty("obj83", "trackComment");

    m.readVar("code");

    m.readProperty("obj84", "length");

    m.writeProperty("obj83", "length");

    m.push(false);

    m.writeProperty("obj83", "index");

    m.readVar("code");

    m.readProperty("obj84", "length");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj83", "lineNumber");

    m.push(false);

    m.writeProperty("obj83", "lineStart");

    m.push(false);

    m.writeProperty("obj83", "curlyStack");

    m.writeProperty("obj81", "scanner");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.writeProperty("obj83", "trackComment");

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

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj85", "%");

    m.writeProperty("obj85", "/");

    m.writeProperty("obj85", "*");

    m.writeProperty("obj85", "-");

    m.writeProperty("obj85", "+");

    m.writeProperty("obj85", ">>>");

    m.writeProperty("obj85", ">>");

    m.writeProperty("obj85", "<<");

    m.writeProperty("obj85", ">=");

    m.writeProperty("obj85", "<=");

    m.writeProperty("obj85", ">");

    m.writeProperty("obj85", "<");

    m.writeProperty("obj85", "!==");

    m.writeProperty("obj85", "===");

    m.writeProperty("obj85", "!=");

    m.writeProperty("obj85", "==");

    m.writeProperty("obj85", "&");

    m.writeProperty("obj85", "^");

    m.writeProperty("obj85", "|");

    m.writeProperty("obj85", "&&");

    m.writeProperty("obj85", "||");

    m.writeProperty("obj85", "]");

    m.writeProperty("obj85", "=");

    m.writeProperty("obj85", ",");

    m.writeProperty("obj85", ";");

    m.writeProperty("obj85", ")");

    m.push(false);

    m.writeProperty("obj81", "operatorPrecedence");

    m.readVar("options");

    m.readVar("options");

    m.readProperty("obj79", "sourceType");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeProperty("obj81", "sourceType");

    m.push(false);

    m.writeProperty("obj81", "lookahead");

    m.push(false);

    m.writeProperty("obj81", "hasLineTerminator");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.readProperty("obj81", "sourceType");

    m.push(false);

    m.binaryOp();

    m.writeProperty("obj86", "strict");

    m.writeProperty("obj86", "labelSet");

    m.writeProperty("obj86", "inSwitch");

    m.writeProperty("obj86", "inIteration");

    m.writeProperty("obj86", "inFunctionBody");

    m.writeProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "allowYield");

    m.writeProperty("obj86", "allowIn");

    m.push(false);

    m.writeProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj81", "tokens");

    m.push(false);

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.push(false);

    m.writeProperty("obj87", "lineStart");

    m.writeProperty("obj87", "lineNumber");

    m.writeProperty("obj87", "index");

    m.push(false);

    m.writeProperty("obj81", "startMarker");

    m.push(false);

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.push(false);

    m.writeProperty("obj88", "lineStart");

    m.writeProperty("obj88", "lineNumber");

    m.writeProperty("obj88", "index");

    m.push(false);

    m.writeProperty("obj81", "lastMarker");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj88", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj88", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj88", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanIdentifier");

    m.functionCall("", 0, 0);

    m.initVar("type");

    m.initVar("start");

    m.initVar("id");

    m.readProperty("obj83", "index");

    m.writeVar("start");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readVar("start");

    m.functionCall("charCodeAt", 1, 1);

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "getIdentifier");

    m.functionCall("", 0, 0);

    m.initVar("start");

    m.initVar("ch");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierPart");

    m.readVar("ch");

    m.functionCall("isIdentifierPart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "slice");

    m.readVar("start");

    m.readProperty("obj83", "index");

    m.functionCall("slice", 2, 2);

    m.writeVar("id");

    m.readVar("id");

    m.readProperty("obj89", "length");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "isKeyword");

    m.readVar("id");

    m.functionCall("", 1, 1);

    m.initVar("id");

    m.readVar("id");

    m.readProperty("obj89", "length");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.readVar("id");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Identifier");

    m.writeVar("type");

    m.readVar("type");

    m.readVar("id");

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readVar("start");

    m.readProperty("obj83", "index");

    m.writeProperty("obj90", "end");

    m.writeProperty("obj90", "start");

    m.writeProperty("obj90", "lineStart");

    m.writeProperty("obj90", "lineNumber");

    m.writeProperty("obj90", "value");

    m.writeProperty("obj90", "type");

    m.push(false);

    m.writeVar("next");

    m.readVar("token");

    m.push(false);

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.writeProperty("obj91", "lineNumber");

    m.writeProperty("obj91", "index");

    m.push(false);

    m.writeProperty("obj81", "lastMarker");

    m.writeVar("parser");

    m.readVar("parser");

    m.readProperty("obj81", "parseProgram");

    m.functionCall("", 0, 0);

    m.initVar("node");

    m.initVar("body");

    m.readProperty("obj81", "createNode");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineStart");

    m.binaryOp();

    m.writeProperty("obj92", "column");

    m.writeProperty("obj92", "line");

    m.writeProperty("obj92", "index");

    m.push(false);

    m.writeVar("node");

    m.readProperty("obj81", "parseDirectivePrologues");

    m.functionCall("", 0, 0);

    m.initVar("firstRestricted");

    m.initVar("body");

    m.initVar("token");

    m.initVar("statement");

    m.initVar("directive");

    m.push(false);

    m.writeVar("firstRestricted");

    m.push(false);

    m.writeVar("body");

    m.push(false);

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readVar("token");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "StringLiteral");

    m.binaryOp();

    m.readVar("body");

    m.writeVar("body");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readVar("body");

    m.readProperty("obj93", "push");

    m.readProperty("obj81", "parseStatementListItem");

    m.functionCall("", 0, 0);

    m.initVar("statement");

    m.push(false);

    m.writeVar("statement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "parseStatement");

    m.functionCall("", 0, 0);

    m.initVar("statement");

    m.initVar("value");

    m.push(false);

    m.writeVar("statement");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "BooleanLiteral");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "NullLiteral");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "NumericLiteral");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "StringLiteral");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Template");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "RegularExpression");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Identifier");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "parseLabelledStatement");

    m.functionCall("", 0, 0);

    m.initVar("node");

    m.initVar("expr");

    m.initVar("statement");

    m.initVar("id");

    m.initVar("key");

    m.initVar("labeledBody");

    m.readProperty("obj81", "createNode");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineStart");

    m.binaryOp();

    m.writeProperty("obj94", "column");

    m.writeProperty("obj94", "line");

    m.writeProperty("obj94", "index");

    m.push(false);

    m.writeVar("node");

    m.readProperty("obj81", "parseExpression");

    m.functionCall("", 0, 0);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("expressions");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "isolateCoverGrammar");

    m.readProperty("obj81", "parseAssignmentExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj95", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("token");

    m.initVar("list");

    m.initVar("previousStrict");

    m.initVar("previousAllowYield");

    m.initVar("node");

    m.initVar("body");

    m.initVar("expression");

    m.initVar("id");

    m.initVar("right");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowYield");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readVar("startToken");

    m.writeVar("token");

    m.readProperty("obj81", "parseConditionalExpression");

    m.functionCall("", 0, 0);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("previousAllowIn");

    m.initVar("consequent");

    m.initVar("alternate");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseBinaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj96", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("token");

    m.initVar("prec");

    m.initVar("markers");

    m.initVar("left");

    m.initVar("right");

    m.initVar("stack");

    m.initVar("operator");

    m.initVar("node");

    m.initVar("i");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseExponentiationExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj97", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("left");

    m.initVar("right");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseUnaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj98", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("node");

    m.initVar("token");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "parseUpdateExpression");

    m.functionCall("", 0, 0);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("node");

    m.initVar("token");

    m.initVar("prefix");

    m.initVar("operator");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseLeftHandSideExpressionAllowCall");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj99", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("previousAllowIn");

    m.initVar("expr");

    m.initVar("property");

    m.initVar("args");

    m.initVar("quasi");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowIn");

    m.writeVar("previousAllowIn");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "allowIn");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "parsePrimaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj100", "call");

    m.functionCall("call", 1, 1);

    m.initVar("node");

    m.initVar("expr");

    m.initVar("value");

    m.initVar("token");

    m.initVar("raw");

    m.readProperty("obj81", "createNode");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineStart");

    m.binaryOp();

    m.writeProperty("obj101", "column");

    m.writeProperty("obj101", "line");

    m.writeProperty("obj101", "index");

    m.push(false);

    m.writeVar("node");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj90", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Identifier");

    m.binaryOp();

    m.readProperty("obj81", "sourceType");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "finalize");

    m.readVar("node");

    m.readVar("Node");

    m.readProperty("obj48", "Identifier");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readVar("cp");

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanPunctuator");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("str");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.push(false);

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.writeProperty("obj102", "end");

    m.writeProperty("obj102", "start");

    m.writeProperty("obj102", "lineStart");

    m.writeProperty("obj102", "lineNumber");

    m.writeProperty("obj102", "value");

    m.writeProperty("obj102", "type");

    m.push(false);

    m.writeVar("token");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 7);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.readVar("token");

    m.readProperty("obj102", "start");

    m.binaryOp();

    m.readVar("token");

    m.readProperty("obj83", "index");

    m.writeProperty("obj102", "end");

    m.readVar("token");

    m.readVar("str");

    m.writeProperty("obj102", "value");

    m.readVar("token");

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj90", "lineNumber");

    m.readVar("next");

    m.readProperty("obj102", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.readProperty("obj90", "value");

    m.functionCall("Identifier", 1, 1);

    m.initVar("name");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Identifier");

    m.writeProperty("obj103", "type");

    m.readVar("name");

    m.writeProperty("obj103", "name");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.readVar("previousIsBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.push(false);

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj102", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "expect");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.initVar("token");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanStringLiteral");

    m.functionCall("", 0, 0);

    m.initVar("start");

    m.initVar("quote");

    m.initVar("octal");

    m.initVar("str");

    m.initVar("ch");

    m.initVar("unescaped");

    m.initVar("octToDec");

    m.readProperty("obj83", "index");

    m.writeVar("start");

    m.readProperty("obj83", "source");

    m.readVar("start");

    m.readProperty("obj84", 8);

    m.writeVar("quote");

    m.readVar("assert_1");

    m.readProperty("obj21", "assert");

    m.readVar("quote");

    m.push(false);

    m.binaryOp();

    m.readVar("quote");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.functionCall("assert", 2, 2);

    m.initVar("condition");

    m.initVar("message");

    m.readVar("condition");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.push(false);

    m.writeVar("octal");

    m.push(false);

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 9);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj104", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 10);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj105", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 11);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj106", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 12);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj107", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 13);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj108", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 14);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj109", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 15);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj110", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 16);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj111", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 17);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj104", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 18);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj109", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 19);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj106", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 20);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj112", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 21);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj113", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 22);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj111", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 23);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj112", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 24);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj106", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 25);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj114", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 26);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj115", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 27);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj106", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 28);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj116", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 29);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.readProperty("obj114", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("str");

    m.readVar("ch");

    m.binaryOp();

    m.writeVar("str");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 30);

    m.writeVar("ch");

    m.readVar("ch");

    m.readVar("quote");

    m.binaryOp();

    m.push(false);

    m.writeVar("quote");

    m.readVar("quote");

    m.push(false);

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "StringLiteral");

    m.readVar("str");

    m.readVar("octal");

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readVar("start");

    m.readProperty("obj83", "index");

    m.writeProperty("obj117", "end");

    m.writeProperty("obj117", "start");

    m.writeProperty("obj117", "lineStart");

    m.writeProperty("obj117", "lineNumber");

    m.writeProperty("obj117", "octal");

    m.writeProperty("obj117", "value");

    m.writeProperty("obj117", "type");

    m.push(false);

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj102", "lineNumber");

    m.readVar("next");

    m.readProperty("obj117", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.writeVar("token");

    m.readVar("token");

    m.readProperty("obj102", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.unaryOp();

    m.readVar("token");

    m.readProperty("obj102", "value");

    m.readVar("value");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "isolateCoverGrammar");

    m.readProperty("obj81", "parseExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj118", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("expressions");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "isolateCoverGrammar");

    m.readProperty("obj81", "parseAssignmentExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj95", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("token");

    m.initVar("list");

    m.initVar("previousStrict");

    m.initVar("previousAllowYield");

    m.initVar("node");

    m.initVar("body");

    m.initVar("expression");

    m.initVar("id");

    m.initVar("right");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowYield");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readVar("startToken");

    m.writeVar("token");

    m.readProperty("obj81", "parseConditionalExpression");

    m.functionCall("", 0, 0);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("previousAllowIn");

    m.initVar("consequent");

    m.initVar("alternate");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseBinaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj96", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("token");

    m.initVar("prec");

    m.initVar("markers");

    m.initVar("left");

    m.initVar("right");

    m.initVar("stack");

    m.initVar("operator");

    m.initVar("node");

    m.initVar("i");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseExponentiationExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj97", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("left");

    m.initVar("right");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseUnaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj98", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("node");

    m.initVar("token");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "parseUpdateExpression");

    m.functionCall("", 0, 0);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("node");

    m.initVar("token");

    m.initVar("prefix");

    m.initVar("operator");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseLeftHandSideExpressionAllowCall");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj99", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("previousAllowIn");

    m.initVar("expr");

    m.initVar("property");

    m.initVar("args");

    m.initVar("quasi");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowIn");

    m.writeVar("previousAllowIn");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "allowIn");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "parsePrimaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj100", "call");

    m.functionCall("call", 1, 1);

    m.initVar("node");

    m.initVar("expr");

    m.initVar("value");

    m.initVar("token");

    m.initVar("raw");

    m.readProperty("obj81", "createNode");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineStart");

    m.binaryOp();

    m.writeProperty("obj119", "column");

    m.writeProperty("obj119", "line");

    m.writeProperty("obj119", "index");

    m.push(false);

    m.writeVar("node");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj117", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Identifier");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "NumericLiteral");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "StringLiteral");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readVar("cp");

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanPunctuator");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("str");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.push(false);

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.writeProperty("obj120", "end");

    m.writeProperty("obj120", "start");

    m.writeProperty("obj120", "lineStart");

    m.writeProperty("obj120", "lineNumber");

    m.writeProperty("obj120", "value");

    m.writeProperty("obj120", "type");

    m.push(false);

    m.writeVar("token");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 31);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.readVar("token");

    m.readProperty("obj120", "start");

    m.binaryOp();

    m.readVar("token");

    m.readProperty("obj83", "index");

    m.writeProperty("obj120", "end");

    m.readVar("token");

    m.readVar("str");

    m.writeProperty("obj120", "value");

    m.readVar("token");

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj117", "lineNumber");

    m.readVar("next");

    m.readProperty("obj120", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.writeVar("token");

    m.readProperty("obj81", "getTokenRaw");

    m.readVar("token");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "slice");

    m.readVar("token");

    m.readProperty("obj117", "start");

    m.readVar("token");

    m.readProperty("obj117", "end");

    m.functionCall("slice", 2, 2);

    m.writeVar("raw");

    m.readProperty("obj81", "finalize");

    m.readVar("node");

    m.readVar("Node");

    m.readProperty("obj48", "Literal");

    m.readVar("token");

    m.readProperty("obj117", "value");

    m.readVar("raw");

    m.functionCall("Literal", 2, 2);

    m.initVar("value");

    m.initVar("raw");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Literal");

    m.writeProperty("obj121", "type");

    m.readVar("value");

    m.writeProperty("obj121", "value");

    m.readVar("raw");

    m.writeProperty("obj121", "raw");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.push(false);

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Template");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousAllowIn");

    m.writeProperty("obj86", "allowIn");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "hasLineTerminator");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj121", "type");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "UnaryExpression");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "binaryPrecedence");

    m.readVar("token");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.initVar("op");

    m.initVar("precedence");

    m.readVar("token");

    m.readProperty("obj120", "value");

    m.writeVar("op");

    m.readVar("token");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "operatorPrecedence");

    m.readVar("op");

    m.readProperty("obj85", "]");

    m.push(false);

    m.writeVar("precedence");

    m.readVar("precedence");

    m.writeVar("prec");

    m.readVar("prec");

    m.push(false);

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj121", "type");

    m.readVar("ArrowParameterPlaceHolder");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "matchAssign");

    m.functionCall("", 0, 0);

    m.initVar("op");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.writeVar("op");

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousIsBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousIsBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("property");

    m.readProperty("obj81", "expect");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.initVar("token");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readVar("cp");

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanPunctuator");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("str");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.push(false);

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.writeProperty("obj122", "end");

    m.writeProperty("obj122", "start");

    m.writeProperty("obj122", "lineStart");

    m.writeProperty("obj122", "lineNumber");

    m.writeProperty("obj122", "value");

    m.writeProperty("obj122", "type");

    m.push(false);

    m.writeVar("token");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 33);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "substr");

    m.readProperty("obj83", "index");

    m.push(false);

    m.functionCall("substr", 2, 2);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.readProperty("obj123", "substr");

    m.push(false);

    m.push(false);

    m.functionCall("substr", 2, 2);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.readProperty("obj124", "substr");

    m.push(false);

    m.push(false);

    m.functionCall("substr", 2, 2);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 33);

    m.writeVar("str");

    m.push(false);

    m.readProperty("obj125", "indexOf");

    m.readVar("str");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.readVar("token");

    m.readProperty("obj122", "start");

    m.binaryOp();

    m.readVar("token");

    m.readProperty("obj83", "index");

    m.writeProperty("obj122", "end");

    m.readVar("token");

    m.readVar("str");

    m.writeProperty("obj122", "value");

    m.readVar("token");

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj120", "lineNumber");

    m.readVar("next");

    m.readProperty("obj122", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.writeVar("token");

    m.readVar("token");

    m.readProperty("obj120", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.unaryOp();

    m.readVar("token");

    m.readProperty("obj120", "value");

    m.readVar("value");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "finalize");

    m.readProperty("obj81", "startNode");

    m.readVar("startToken");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.readVar("token");

    m.readProperty("obj90", "start");

    m.readVar("token");

    m.readProperty("obj90", "lineNumber");

    m.readVar("token");

    m.readProperty("obj90", "start");

    m.readVar("token");

    m.readProperty("obj90", "lineStart");

    m.binaryOp();

    m.writeProperty("obj126", "column");

    m.writeProperty("obj126", "line");

    m.writeProperty("obj126", "index");

    m.push(false);

    m.readVar("Node");

    m.readProperty("obj48", "ComputedMemberExpression");

    m.readVar("expr");

    m.readVar("property");

    m.functionCall("ComputedMemberExpression", 2, 2);

    m.initVar("object");

    m.initVar("property");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "MemberExpression");

    m.writeProperty("obj127", "type");

    m.push(false);

    m.writeProperty("obj127", "computed");

    m.readVar("object");

    m.writeProperty("obj127", "object");

    m.readVar("property");

    m.writeProperty("obj127", "property");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("expr");

    m.push(false);

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Template");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousAllowIn");

    m.writeProperty("obj86", "allowIn");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "hasLineTerminator");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj127", "type");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "UnaryExpression");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "binaryPrecedence");

    m.readVar("token");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.initVar("op");

    m.initVar("precedence");

    m.readVar("token");

    m.readProperty("obj122", "value");

    m.writeVar("op");

    m.readVar("token");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "operatorPrecedence");

    m.readVar("op");

    m.readProperty("obj85", "=");

    m.push(false);

    m.writeVar("precedence");

    m.readVar("precedence");

    m.writeVar("prec");

    m.readVar("prec");

    m.push(false);

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj127", "type");

    m.readVar("ArrowParameterPlaceHolder");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "matchAssign");

    m.functionCall("", 0, 0);

    m.initVar("op");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.writeVar("op");

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj122", "value");

    m.readVar("value");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "reinterpretExpressionAsPattern");

    m.readVar("expr");

    m.functionCall("", 1, 1);

    m.initVar("expr");

    m.initVar("i");

    m.readVar("expr");

    m.readProperty("obj127", "type");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Identifier");

    m.binaryOp();

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "MemberExpression");

    m.binaryOp();

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readVar("cp");

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanNumericLiteral");

    m.functionCall("", 0, 0);

    m.initVar("start");

    m.initVar("ch");

    m.initVar("number");

    m.readProperty("obj83", "index");

    m.writeVar("start");

    m.readProperty("obj83", "source");

    m.readVar("start");

    m.readProperty("obj84", 35);

    m.writeVar("ch");

    m.readVar("assert_1");

    m.readProperty("obj21", "assert");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readVar("ch");

    m.readProperty("obj114", "charCodeAt");

    m.push(false);

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.functionCall("assert", 2, 2);

    m.initVar("condition");

    m.initVar("message");

    m.readVar("condition");

    m.push(false);

    m.writeVar("number");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 35);

    m.writeVar("number");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 36);

    m.writeVar("ch");

    m.readVar("number");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("number");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj84", 36);

    m.binaryOp();

    m.writeVar("number");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isDecimalDigit");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isDecimalDigit", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 37);

    m.writeVar("ch");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "NumericLiteral");

    m.readVar("parseFloat");

    m.readVar("number");

    m.functionCall("parseFloat", 1, 1);

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readVar("start");

    m.readProperty("obj83", "index");

    m.writeProperty("obj128", "end");

    m.writeProperty("obj128", "start");

    m.writeProperty("obj128", "lineStart");

    m.writeProperty("obj128", "lineNumber");

    m.writeProperty("obj128", "value");

    m.writeProperty("obj128", "type");

    m.push(false);

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj122", "lineNumber");

    m.readVar("next");

    m.readProperty("obj128", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.writeVar("token");

    m.readProperty("obj81", "isolateCoverGrammar");

    m.readProperty("obj81", "parseAssignmentExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj95", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("token");

    m.initVar("list");

    m.initVar("previousStrict");

    m.initVar("previousAllowYield");

    m.initVar("node");

    m.initVar("body");

    m.initVar("expression");

    m.initVar("id");

    m.initVar("right");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowYield");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readVar("startToken");

    m.writeVar("token");

    m.readProperty("obj81", "parseConditionalExpression");

    m.functionCall("", 0, 0);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("previousAllowIn");

    m.initVar("consequent");

    m.initVar("alternate");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseBinaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj96", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("token");

    m.initVar("prec");

    m.initVar("markers");

    m.initVar("left");

    m.initVar("right");

    m.initVar("stack");

    m.initVar("operator");

    m.initVar("node");

    m.initVar("i");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseExponentiationExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj97", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("expr");

    m.initVar("left");

    m.initVar("right");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseUnaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj98", "call");

    m.functionCall("call", 1, 1);

    m.initVar("expr");

    m.initVar("node");

    m.initVar("token");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "parseUpdateExpression");

    m.functionCall("", 0, 0);

    m.initVar("expr");

    m.initVar("startToken");

    m.initVar("node");

    m.initVar("token");

    m.initVar("prefix");

    m.initVar("operator");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "parseLeftHandSideExpressionAllowCall");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj99", "call");

    m.functionCall("call", 1, 1);

    m.initVar("startToken");

    m.initVar("previousAllowIn");

    m.initVar("expr");

    m.initVar("property");

    m.initVar("args");

    m.initVar("quasi");

    m.readProperty("obj81", "lookahead");

    m.writeVar("startToken");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "allowIn");

    m.writeVar("previousAllowIn");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "allowIn");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "inheritCoverGrammar");

    m.readProperty("obj81", "matchKeyword");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("keyword");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Keyword");

    m.binaryOp();

    m.readProperty("obj81", "parsePrimaryExpression");

    m.functionCall("", 1, 1);

    m.initVar("parseFunction");

    m.initVar("previousIsBindingElement");

    m.initVar("previousIsAssignmentTarget");

    m.initVar("previousFirstCoverInitializedNameError");

    m.initVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeVar("previousIsBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeVar("previousIsAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("parseFunction");

    m.readProperty("obj100", "call");

    m.functionCall("call", 1, 1);

    m.initVar("node");

    m.initVar("expr");

    m.initVar("value");

    m.initVar("token");

    m.initVar("raw");

    m.readProperty("obj81", "createNode");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "lineStart");

    m.binaryOp();

    m.writeProperty("obj129", "column");

    m.writeProperty("obj129", "line");

    m.writeProperty("obj129", "index");

    m.push(false);

    m.writeVar("node");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj128", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Identifier");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "NumericLiteral");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isLineTerminator");

    m.readVar("ch");

    m.functionCall("isLineTerminator", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("start");

    m.readVar("ch");

    m.push(false);

    m.binaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("cp");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isIdentifierStart");

    m.readVar("cp");

    m.functionCall("isIdentifierStart", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj83", "scanPunctuator");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("str");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.push(false);

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.writeProperty("obj130", "end");

    m.writeProperty("obj130", "start");

    m.writeProperty("obj130", "lineStart");

    m.writeProperty("obj130", "lineNumber");

    m.writeProperty("obj130", "value");

    m.writeProperty("obj130", "type");

    m.push(false);

    m.writeVar("token");

    m.readProperty("obj83", "source");

    m.readProperty("obj83", "index");

    m.readProperty("obj84", 37);

    m.writeVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.readVar("token");

    m.readProperty("obj130", "start");

    m.binaryOp();

    m.readVar("token");

    m.readProperty("obj83", "index");

    m.writeProperty("obj130", "end");

    m.readVar("token");

    m.readVar("str");

    m.writeProperty("obj130", "value");

    m.readVar("token");

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj128", "lineNumber");

    m.readVar("next");

    m.readProperty("obj130", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.writeVar("token");

    m.readProperty("obj81", "getTokenRaw");

    m.readVar("token");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "slice");

    m.readVar("token");

    m.readProperty("obj128", "start");

    m.readVar("token");

    m.readProperty("obj128", "end");

    m.functionCall("slice", 2, 2);

    m.writeVar("raw");

    m.readProperty("obj81", "finalize");

    m.readVar("node");

    m.readVar("Node");

    m.readProperty("obj48", "Literal");

    m.readVar("token");

    m.readProperty("obj128", "value");

    m.readVar("raw");

    m.functionCall("Literal", 2, 2);

    m.initVar("value");

    m.initVar("raw");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Literal");

    m.writeProperty("obj131", "type");

    m.readVar("value");

    m.writeProperty("obj131", "value");

    m.readVar("raw");

    m.writeProperty("obj131", "raw");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.push(false);

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Template");

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousAllowIn");

    m.writeProperty("obj86", "allowIn");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "hasLineTerminator");

    m.unaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj131", "type");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "UnaryExpression");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "binaryPrecedence");

    m.readVar("token");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.initVar("op");

    m.initVar("precedence");

    m.readVar("token");

    m.readProperty("obj130", "value");

    m.writeVar("op");

    m.readVar("token");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "operatorPrecedence");

    m.readVar("op");

    m.readProperty("obj85", ";");

    m.push(false);

    m.writeVar("precedence");

    m.readVar("precedence");

    m.writeVar("prec");

    m.readVar("prec");

    m.push(false);

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "isAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj131", "type");

    m.readVar("ArrowParameterPlaceHolder");

    m.binaryOp();

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readProperty("obj81", "matchAssign");

    m.functionCall("", 0, 0);

    m.initVar("op");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.writeVar("op");

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("op");

    m.push(false);

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousIsBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("right");

    m.readProperty("obj81", "finalize");

    m.readProperty("obj81", "startNode");

    m.readVar("startToken");

    m.functionCall("", 1, 1);

    m.initVar("token");

    m.readVar("token");

    m.readProperty("obj90", "start");

    m.readVar("token");

    m.readProperty("obj90", "lineNumber");

    m.readVar("token");

    m.readProperty("obj90", "start");

    m.readVar("token");

    m.readProperty("obj90", "lineStart");

    m.binaryOp();

    m.writeProperty("obj132", "column");

    m.writeProperty("obj132", "line");

    m.writeProperty("obj132", "index");

    m.push(false);

    m.readVar("Node");

    m.readProperty("obj48", "AssignmentExpression");

    m.readVar("token");

    m.readProperty("obj122", "value");

    m.readVar("expr");

    m.readVar("right");

    m.functionCall("AssignmentExpression", 3, 3);

    m.initVar("operator");

    m.initVar("left");

    m.initVar("right");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "AssignmentExpression");

    m.writeProperty("obj133", "type");

    m.readVar("operator");

    m.writeProperty("obj133", "operator");

    m.readVar("left");

    m.writeProperty("obj133", "left");

    m.readVar("right");

    m.writeProperty("obj133", "right");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("expr");

    m.readProperty("obj81", "context");

    m.push(false);

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("expr");

    m.writeVar("result");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "firstCoverInitializedNameError");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj81", "context");

    m.readVar("previousIsBindingElement");

    m.writeProperty("obj86", "isBindingElement");

    m.readProperty("obj81", "context");

    m.readVar("previousIsAssignmentTarget");

    m.writeProperty("obj86", "isAssignmentTarget");

    m.readProperty("obj81", "context");

    m.readVar("previousFirstCoverInitializedNameError");

    m.writeProperty("obj86", "firstCoverInitializedNameError");

    m.readVar("result");

    m.writeVar("expr");

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.readVar("expr");

    m.writeVar("expr");

    m.readVar("expr");

    m.readProperty("obj133", "type");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Identifier");

    m.binaryOp();

    m.readProperty("obj81", "consumeSemicolon");

    m.functionCall("", 0, 0);

    m.readProperty("obj81", "match");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("value");

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "type");

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "Punctuator");

    m.binaryOp();

    m.readProperty("obj81", "lookahead");

    m.readProperty("obj130", "value");

    m.readVar("value");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj81", "nextToken");

    m.functionCall("", 0, 0);

    m.initVar("token");

    m.initVar("next");

    m.readProperty("obj81", "lookahead");

    m.writeVar("token");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj91", "index");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj91", "lineNumber");

    m.readProperty("obj81", "lastMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj91", "lineStart");

    m.readProperty("obj81", "collectComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("i");

    m.initVar("e");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "comment");

    m.unaryOp();

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "scanComments");

    m.functionCall("", 0, 0);

    m.initVar("comments");

    m.initVar("start");

    m.initVar("ch");

    m.initVar("comment");

    m.readProperty("obj83", "trackComment");

    m.readProperty("obj83", "index");

    m.push(false);

    m.binaryOp();

    m.writeVar("start");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "source");

    m.readProperty("obj84", "charCodeAt");

    m.readProperty("obj83", "index");

    m.functionCall("charCodeAt", 1, 1);

    m.writeVar("ch");

    m.readVar("character_1");

    m.readProperty("obj42", "Character");

    m.readProperty("obj41", "isWhiteSpace");

    m.readVar("ch");

    m.functionCall("isWhiteSpace", 1, 1);

    m.initVar("cp");

    m.readVar("cp");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readProperty("obj83", "index");

    m.unaryOp();

    m.writeProperty("obj83", "index");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.unaryOp();

    m.readVar("comments");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "index");

    m.writeProperty("obj87", "index");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineNumber");

    m.writeProperty("obj87", "lineNumber");

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lineStart");

    m.writeProperty("obj87", "lineStart");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "lex");

    m.functionCall("", 0, 0);

    m.initVar("cp");

    m.readProperty("obj83", "eof");

    m.functionCall("", 0, 0);

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readVar("token_1");

    m.readProperty("obj33", "Token");

    m.readProperty("obj34", "EOF");

    m.readProperty("obj83", "lineNumber");

    m.readProperty("obj83", "lineStart");

    m.readProperty("obj83", "index");

    m.readProperty("obj83", "index");

    m.writeProperty("obj134", "end");

    m.writeProperty("obj134", "start");

    m.writeProperty("obj134", "lineStart");

    m.writeProperty("obj134", "lineNumber");

    m.writeProperty("obj134", "type");

    m.push(false);

    m.writeVar("next");

    m.readVar("token");

    m.readVar("next");

    m.readVar("token");

    m.readProperty("obj130", "lineNumber");

    m.readVar("next");

    m.readProperty("obj134", "lineNumber");

    m.binaryOp();

    m.unaryOp();

    m.writeProperty("obj81", "hasLineTerminator");

    m.readVar("next");

    m.readProperty("obj81", "context");

    m.readProperty("obj86", "strict");

    m.readVar("next");

    m.writeProperty("obj81", "lookahead");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("token");

    m.readVar("Node");

    m.readProperty("obj48", "ExpressionStatement");

    m.readVar("expr");

    m.functionCall("ExpressionStatement", 1, 1);

    m.initVar("expression");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "ExpressionStatement");

    m.writeProperty("obj135", "type");

    m.readVar("expression");

    m.writeProperty("obj135", "expression");

    m.writeVar("statement");

    m.readProperty("obj81", "finalize");

    m.readVar("node");

    m.readVar("statement");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("statement");

    m.readVar("statement");

    m.writeVar("statement");

    m.readVar("statement");

    m.functionCall("push", 1, 1);

    m.readProperty("obj81", "startMarker");

    m.readProperty("obj87", "index");

    m.readProperty("obj81", "scanner");

    m.readProperty("obj83", "length");

    m.binaryOp();

    m.readProperty("obj81", "finalize");

    m.readVar("node");

    m.readVar("Node");

    m.readProperty("obj48", "Program");

    m.readVar("body");

    m.readProperty("obj81", "sourceType");

    m.functionCall("Program", 2, 2);

    m.initVar("body");

    m.initVar("sourceType");

    m.readVar("syntax_1");

    m.readProperty("obj13", "Syntax");

    m.readProperty("obj12", "Program");

    m.writeProperty("obj136", "type");

    m.readVar("body");

    m.writeProperty("obj136", "body");

    m.readVar("sourceType");

    m.writeProperty("obj136", "sourceType");

    m.functionCall("", 2, 2);

    m.initVar("meta");

    m.initVar("node");

    m.initVar("metadata");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "range");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "loc");

    m.readProperty("obj81", "delegate");

    m.readVar("node");

    m.writeVar("ast");

    m.readVar("collectComment");

    m.readVar("parser");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tokens");

    m.readVar("parser");

    m.readProperty("obj81", "config");

    m.readProperty("obj80", "tolerant");

    m.unaryOp();

    m.readVar("ast");

    m.readVar("parser");

    m.readProperty("obj81", "errorHandler");

    m.readProperty("obj82", "errors");

    m.writeProperty("obj136", "errors");

    m.readVar("ast");

    m.writeVar("ast");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "generateModuleString");

    m.readVar("ast");

    m.readVar("src");

    m.push(false);

    m.functionCall("generateModuleString", 3, 3);

    m.initVar("ast");

    m.initVar("src");

    m.initVar("eol");

    m.initVar("exp");

    m.initVar("out");

    m.push(false);

    m.readVar("eol");

    m.writeVar("eol");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "generateExportsString");

    m.readVar("ast");

    m.readVar("src");

    m.readVar("eol");

    m.functionCall("generateExportsString", 3, 3);

    m.initVar("ast");

    m.initVar("src");

    m.initVar("eol");

    m.initVar("dExports");

    m.push(false);

    m.readVar("eol");

    m.writeVar("eol");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "getExports");

    m.readVar("ast");

    m.readVar("src");

    m.functionCall("getExports", 2, 2);

    m.initVar("ast");

    m.initVar("src");

    m.initVar("dExports");

    m.push(false);

    m.push(false);

    m.writeVar("dExports");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "getGlobals");

    m.readVar("src");

    m.functionCall("getGlobals", 1, 1);

    m.initVar("src");

    m.initVar("original");

    m.initVar("fin");

    m.initVar("out");

    m.push(false);

    m.readVar("Object");

    m.readProperty("obj137", "keys");

    m.readVar("global");

    m.functionCall("keys", 1, 1);

    m.writeVar("original");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "evaluator");

    m.readVar("src");

    m.functionCall("evaluator", 1, 1);

    m.initVar("src");

    m.initVar("arguments");

    m.readVar("eval");

    m.readVar("src");

    m.builtin("eval", 1);

    m.readVar("console");

    m.push(false);

    m.push(false);

    m.writeProperty("obj138", "my-awesome-prop-23-42");

    m.readVar("Object");

    m.readProperty("obj137", "keys");

    m.readVar("global");

    m.functionCall("keys", 1, 1);

    m.writeVar("fin");

    m.readVar("fin");

    m.readProperty("obj139", "filter");

    m.push(false);

    m.functionCall("filter", 1, 1);

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.initVar("item");

    m.readVar("original");

    m.readProperty("obj140", "indexOf");

    m.readVar("item");

    m.functionCall("indexOf", 1, 1);

    m.push(false);

    m.binaryOp();

    m.writeVar("out");

    m.readVar("out");

    m.writeVar("dExports");

    m.readVar("dExports");

    m.readProperty("obj141", "concat");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "getTopLevelNames");

    m.readVar("ast");

    m.functionCall("getTopLevelNames", 1, 1);

    m.initVar("ast");

    m.initVar("out");

    m.push(false);

    m.readVar("ast");

    m.readProperty("obj136", "body");

    m.readProperty("obj93", "reduce");

    m.readVar("modulify");

    m.readProperty("obj0", "utils");

    m.readProperty("obj1", "getNames");

    m.push(false);

    m.functionCall("reduce", 1, 2);

    m.initVar("prev");

    m.initVar("curr");

    m.initVar("out");

    m.push(false);

    m.readVar("prev");

    m.writeVar("out");

    m.readVar("curr");

    m.readProperty("obj135", "type");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("out");

    m.writeVar("out");

    m.readVar("out");

    m.functionCall("concat", 1, 1);

    m.writeVar("dExports");

    m.readVar("dExports");

    m.writeVar("dExports");

    m.readVar("dExports");

    m.readProperty("obj142", "reduce");

    m.push(false);

    m.push(false);

    m.functionCall("reduce", 1, 2);

    m.writeVar("dExports");

    m.readVar("dExports");

    m.writeVar("exp");

    m.readVar("src");

    m.readVar("eol");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("eol");

    m.binaryOp();

    m.readVar("exp");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("eol");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("eol");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("eol");

    m.binaryOp();

    m.writeVar("out");

    m.readVar("out");

    m.writeVar("out");

    m.readVar("out");

    m.readVar("console");

    m.push(false);

    m.readProperty("obj138", "my-awesome-prop-23-42");

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj138", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

