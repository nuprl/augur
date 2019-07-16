
/* vsdoc for modulify */

(function (window) {
    

    window.modulify = {
        /// <summary></summary>
        /// <field name="utils" type="">Namespace for modulify&apos;s utility functions.</field>
        /// <returns type="modulify"/>
                
        string: function(src) {
            /// <summary>Converts a string of source code into a commonjs module. **Caution** This
            ///  function runs the given script through eval so if the script is supposed to
            ///  do things like delete all your files, then it will.</summary>
            /// <param name="src" type="String">The source code to evaluate.</param>
            /// <returns type="String">Returns a script as a string. The script will be a commonjs
            ///  module exporting the new global properties, vars, and functions declared in
            ///  the top scope. The module exports statements will be wrapped in a try catch
            ///  block so the script will continue to work in the browser and only export if
            ///  `module.exports` is assignable.</returns>
        }, 
        
        file: function(srcFile) {
            /// <summary>Converts a javascript file into a commonjs module. **Caution** This function
            ///  runs the given script through eval so if the script is supposed to do things
            ///  like delete all your files, then it will.</summary>
            /// <param name="srcFile" type="String">The path to the file to evaluate.</param>
            /// <returns type="String">Returns a script as a string. The script will be a commonjs
            ///  module exporting the new global properties, vars, and functions declared in
            ///  the top scope. The module exports statements will be wrapped in a try catch
            ///  block so the script will continue to work in the browser and only export if
            ///  `module.exports` is assignable.</returns>
        }
        
    };

    var $x = window.modulify;
    $x.__namespace = "true";
    $x.__typeName = "modulify";
})(this);
