'use strict';

var exec = require('child_process').exec;

module.exports = function() {
  return {
    generateHtml: generateHtml,
    generatePdf: generatePdf
  };

  function generatePdf (fileName, next) {
    return generate(fileName, next, 'pdf');
  }

  function generateHtml(fileName, next) {
    return generate(fileName, next, 'pdf');
  }

  function generate(fileName, next, outputType) {
    exec('unoconv -f ' + outputType + ' "' + fileName +'"', function (error, stdout, stderr) {
      if (error) return next(error);
      var outputFile = (fileName.lastIndexOf('.') > -1 ? fileName.substring(0, fileName.lastIndexOf('.')) : fileName) + '.' + outputType;
      return next(null, {
        status: 0,
        outputFile: outputFile
      });
    });
  }
};
