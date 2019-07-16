
/* vsdoc for modulify.utils */

(function (window) {
    window.modulify = window.modulify || {};

    window.modulify.utils = {
        /// <summary></summary>
        /// <returns type="modulify.utils"/>
                
        getNames: function(prev, curr) {
            /// <summary>Reduction function to get declared variables and functions names from a node
            ///  in esprima&apos;s ast.</summary>
            /// <param name="prev" type="Array">The previous value.</param>
            /// <param name="curr" type="Object">The current object being inspected.</param>
            /// <returns type="Array">Returns an array of the declared names.</returns>
        }, 
        
        evaluator: function(src) {
            /// <summary>Wrapper for eval. **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="src" type="String">The source code to evaluate.</param>
        }, 
        
        getGlobals: function(src) {
            /// <summary>Gets names of new properties declared in global scope after executing `src`.
            ///   **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="src" type="String">The source code to evaluate.</param>
            /// <returns type="Array">Returns an array of new properties declared in the global
            ///  scope by the evaluated script.</returns>
        }, 
        
        getTopLevelNames: function(ast) {
            /// <summary>Gets the names of functions and variables declared in the top scope.</summary>
            /// <param name="ast" type="Object">The abstract syntax tree produced by esprima, or a
            ///  compatible ast.</param>
            /// <returns type="Array">Returns an array of names of functions and vars declared in
            ///  the top scope.</returns>
        }, 
        
        getExports: function(ast, src) {
            /// <summary>Gets a list of new global properties, top level vars, and functions
            ///  declared in the script. **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="ast" type="Object">The abstract syntax tree produced by esprima, or a
            ///  compatible ast, must be the ast of the src.</param>
            /// <param name="src" type="String">The source code to evaluate, must be the source used to
            ///  produce the ast.</param>
            /// <returns type="Array">Returns an array of names of new properties, functions and
            ///  vars declared in the global / top scope.</returns>
        }, 
        
        generateExportsString: function(ast, src, eol) {
            /// <summary>Generates a list of `module.exports` statements corresponding to the new
            ///  global properties, vars, and functions declared in the script.
            ///  **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="ast" type="Object">The abstract syntax tree produced by esprima, or a
            ///  compatible ast, must be the ast of the src.</param>
            /// <param name="src" type="String">The source code to evaluate, must be the source used to
            ///  produce the ast.</param>
            /// <param name="eol" type="String">Optional. The end of line character to use. Defaults to
            ///  &apos;\r\n&apos;;</param>
            /// <returns type="String">Returns a string representing `module.exports` statements
            ///  so the given src may be turned into a module.</returns>
        }, 
        
        generateModuleString: function(ast, src, eol) {
            /// <summary>Analyzes the given script and generates a module exporting all the new global
            ///  properties, vars, and functions from it. **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="ast" type="Object">The abstract syntax tree produced by esprima, or a
            ///  compatible ast, must be the ast of the src.</param>
            /// <param name="src" type="String">The source code to evaluate, must be the source used to
            ///  produce the ast.</param>
            /// <param name="eol" type="String">Optional. The end of line character to use. Defaults to
            ///  &apos;\r\n&apos;;</param>
            /// <returns type="String">Returns a script as a string. The script will be a commonjs
            ///  module exporting the new global properties, vars, and functions declared in
            ///  the top scope. The module exports statements will be wrapped in a try catch
            ///  block so the script will continue to work in the browser and only export if
            ///  `module.exports` is assignable.</returns>
        }
        
    };

    var $x = window.modulify.utils;
    $x.__namespace = "true";
    $x.__typeName = "modulify.utils";
})(this);
