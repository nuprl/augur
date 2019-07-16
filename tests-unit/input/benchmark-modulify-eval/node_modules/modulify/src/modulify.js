/*jslint
    white: true,
    stupid: true,
    vars: true,
    nomen: true
*/
/*globals
    global: true,
    window,
    require,
    module,
*/
try {
// global refers to global in node or window in the browser.
var _g = global;
} catch (e) {
    try {
        global = window;
    } catch (f) {
        throw {'Errors: ' : [e,f]};
    }
}
/**
 * Namepsace for atropa's modulify.
 * @namespace Namepsace for atropa's modulify.
 */
var modulify = {
    /**
     * Namespace for modulify's utility functions.
     * @namespace Namespace for modulify's utility functions.
     */
    utils : {}
};
/**
 * Reduction function to get declared variables and functions names from a node
 *  in esprima's ast.
 * @param {Array} prev The previous value.
 * @param {Object} curr The current object being inspected.
 * @returns {Array} Returns an array of the declared names.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var ast = esprima.parse(src, {tolerant: true});
 *  var names = ast.body.reduce(modulify.utils.getNames, []);
 *  console.log(names);
 */
modulify.utils.getNames = function getNames (prev, curr) {
    "use strict";
    var out = prev;
    switch(curr.type) {
        case 'VariableDeclaration':
            curr.declarations.forEach(function (declaration) {
                if(declaration.type === 'VariableDeclarator') {
                    out.push(declaration.id.name);
                }
            });
            break;
        case 'FunctionDeclaration':
            out.push(curr.id.name);
            break;
        default:
            break;
    }
    return out;
};
/*jslint evil: true, sloppy: true */
/**
 * Wrapper for eval. **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {String} src The source code to evaluate.
 */
modulify.utils.evaluator = function evaluator (src) {
    eval(src);
};
/*jslint evil: false, sloppy:false */
/**
 * Gets names of new properties declared in global scope after executing `src`.
 *   **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {String} src The source code to evaluate.
 * @returns {Array} Returns an array of new properties declared in the global
 *  scope by the evaluated script.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var globals = modulify.utils.getGlobals(src);
 *  console.log(globals);
 */
modulify.utils.getGlobals = function getGlobals (src) {
    "use strict";
    var original = Object.keys(global);
    modulify.utils.evaluator(src);
    var fin = Object.keys(global);
    var out = fin.filter(function (item) {
        return original.indexOf(item) === -1;
    });
    return out;
};
/**
 * Gets the names of functions and variables declared in the top scope.
 * @param {Object} ast The abstract syntax tree produced by esprima, or a
 *  compatible ast.
 * @returns {Array} Returns an array of names of functions and vars declared in
 *  the top scope.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var ast = esprima.parse(src, {tolerant: true});
 *  var names = modulify.utils.getTopLevelNames(ast);
 *  console.log(names);
 */
modulify.utils.getTopLevelNames = function getTopLevelNames (ast) {
    "use strict";
    var out = ast.body.reduce(modulify.utils.getNames, []);
    return out;
};
/**
 * Gets a list of new global properties, top level vars, and functions
 *  declared in the script. **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {Object} ast The abstract syntax tree produced by esprima, or a
 *  compatible ast, must be the ast of the src.
 * @param {String} src The source code to evaluate, must be the source used to
 *  produce the ast.
 * @returns {Array} Returns an array of names of new properties, functions and
 *  vars declared in the global / top scope.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var ast = esprima.parse(src, {tolerant: true});
 *  var names = modulify.utils.getExports(ast, src);
 *  console.log(names);
 */
modulify.utils.getExports = function getExports (ast, src) {
    "use strict";
    var dExports = [];
    dExports = modulify.utils.getGlobals(src);
    dExports = dExports.concat(modulify.utils.getTopLevelNames(ast));
    return dExports;
};
/**
 * Generates a list of `module.exports` statements corresponding to the new
 *  global properties, vars, and functions declared in the script.
 *  **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {Object} ast The abstract syntax tree produced by esprima, or a
 *  compatible ast, must be the ast of the src.
 * @param {String} src The source code to evaluate, must be the source used to
 *  produce the ast.
 * @param {String} eol Optional. The end of line character to use. Defaults to
 *  '\r\n';
 * @returns {String} Returns a string representing `module.exports` statements
 *  so the given src may be turned into a module.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var ast = esprima.parse(src, {tolerant: true});
 *  var str = modulify.utils.generateExportsString(ast, src, '\r\n');
 *  console.log(str);
 */
modulify.utils.generateExportsString =
function generateExportsString (ast, src, eol) {
    "use strict";
    eol = eol || '\r\n';
    var dExports = modulify.utils.getExports(ast, src);
    dExports = dExports.reduce(function(prev, curr) {
        return prev + 'module.exports.' + curr + ' = ' + curr + ';' + eol;
    }, '');
    return dExports;
};
/**
 * Analyzes the given script and generates a module exporting all the new global
 *  properties, vars, and functions from it. **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {Object} ast The abstract syntax tree produced by esprima, or a
 *  compatible ast, must be the ast of the src.
 * @param {String} src The source code to evaluate, must be the source used to
 *  produce the ast.
 * @param {String} eol Optional. The end of line character to use. Defaults to
 *  '\r\n';
 * @returns {String} Returns a script as a string. The script will be a commonjs
 *  module exporting the new global properties, vars, and functions declared in
 *  the top scope. The module exports statements will be wrapped in a try catch
 *  block so the script will continue to work in the browser and only export if
 *  `module.exports` is assignable.
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var ast = esprima.parse(src, {tolerant: true});
 *  var str = modulify.utils.generateModuleString(ast, src, '\r\n');
 *  console.log(str);
 */
modulify.utils.generateModuleString =
function generateModuleString (ast, src, eol) {
    "use strict";
    eol = eol || '\r\n';
    var exp = modulify.utils.generateExportsString(ast, src, eol);
    var out = src + eol + 'try {' + eol + exp + '} catch (ignore) {' + eol +
        '// module exports is not defined' + eol + '}' + eol;
    return out;
};
/**
 * Converts a string of source code into a commonjs module. **Caution** This
 *  function runs the given script through eval so if the script is supposed to
 *  do things like delete all your files, then it will.
 * @param {String} src The source code to evaluate.
 * @returns {String} Returns a script as a string. The script will be a commonjs
 *  module exporting the new global properties, vars, and functions declared in
 *  the top scope. The module exports statements will be wrapped in a try catch
 *  block so the script will continue to work in the browser and only export if
 *  `module.exports` is assignable.
 * @requires <a href="http://esprima.org/">esprima</a>
 * @example
 *  var src = 'a = "global prop"; ' +
 *      'var d = "I am a declared variable"; function e () {};';
 *  var str = modulify.string(src);
 *  console.log(str);
 */
modulify.string = function modulifyString (src) {
    "use strict";
    var esprima = require('esprima');
    var ast = esprima.parse(src, {tolerant: true});
    var out = modulify.utils.generateModuleString(ast, src, '\r\n');
    return out;
};
/**
 * Converts a javascript file into a commonjs module. **Caution** This function
 *  runs the given script through eval so if the script is supposed to do things
 *  like delete all your files, then it will.
 * @param {String} srcFile The path to the file to evaluate.
 * @returns {String} Returns a script as a string. The script will be a commonjs
 *  module exporting the new global properties, vars, and functions declared in
 *  the top scope. The module exports statements will be wrapped in a try catch
 *  block so the script will continue to work in the browser and only export if
 *  `module.exports` is assignable.
 * @requires <a href="http://nodejs.org/api/fs.html">fs</a>
 * @requires <a href="http://esprima.org/">esprima</a>
 * @example
 *  var str = modulify.file('myfile.js');
 *  console.log(str);
 */
modulify.file = function modulifyFile (srcFile) {
    "use strict";
    var fs = require('fs');
    var src = fs.readFileSync(srcFile, 'utf8');
    var out = modulify.string(src);
    return out;
};


try {
    module.exports = modulify;
} catch (ignore) {}

