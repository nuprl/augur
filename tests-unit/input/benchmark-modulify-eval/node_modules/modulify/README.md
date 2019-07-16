#modulify

Generates nodejs modules from source code.

## Where do I get it?

You can download it from github at 
[https://github.com/matthewkastor/modulify](https://github.com/matthewkastor/modulify) 
or, if you have node installed you can get it from npm

`npm install modulify`

## Usage

### In Browser

Using this module in your browser is as simple as including both `src/modulify.js`
 and `node_modules/esprima/esprima.js` in the page, parsing the source code with esprima and calling `modulify.generateModuleString`. There is an example below.
 It is much easier to use this code within nodejs and that is the recommended
 method.
See [try it.html](http://matthewkastor.github.io/modulify/try%20it.html) 
in the root directory of this package for a working example of browser usage.

```
<script type="text/javascript" src="./node_modules/esprima/esprima.js"></script>
<script type="text/javascript" src="./src/modulify.js"></script>
<script type="text/javascript">
    var src = // get the source code as a string.
    var ast = esprima.parse(src, {tolerant: true});
    var result = modulify.utils.generateModuleString(ast, src, '\r\n');
    // result will contain the modulified version of the source.
</script>
```

### In Nodejs

Simply require it and use it.

```
var modulify = require('modulify');
var result = modulify.file( /** file path **/);
// result will contain the modulified version of the source.
```

There is also a method `modulify.string` that takes a single string argument and
 returns a modulified version. See the documentation for other utility methods.

## Docs

Documentation is in the [docs/jsdoc](http://matthewkastor.github.io/modulify/docs/jsdoc/symbols/_global_.html) folder.
Visual Studio intellisense files are in [docs/vsdocs](https://github.com/matthewkastor/modulify/blob/gh-pages/docs/vsdoc/OpenLayersAll.js)

## Tests

Run the tests in node with `npm test`. Run the tests in your browser by opening 
[modulify tester.html](http://matthewkastor.github.io/modulify/modulify%20tester.html).