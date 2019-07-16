#office-converter

A node module to convert office documents into either PDF or HTML.

It requires requires [unoconv](https://github.com/dagwieers/unoconv) to be installed and in the PATH. It can convert any office document (doc/docx/xls/xlsx/ppt/pptx) which can be opened in Open Office [Or Libre Office] to either PDF or HTML.

##Usage

```
var converter = require('office-converter')();
  converter.generatePdf('input/test.xls', function(err, result) {
    // Process result if no error
    if (result.status === 0) {
      console.log('Output File located at ' + result.outputFile);
    }
  });
  converter.generateHtml('input/test.docx', function(err, result) {
    // Process result if no error
    if (result.status === 0) {
      console.log('Output File located at ' + result.outputFile);
    }
  });
  
  ```

##How to test?

There are test cases inside tests folder. You can test using `npm test` to test the package. Tests result in test.pdf inside input folder.
