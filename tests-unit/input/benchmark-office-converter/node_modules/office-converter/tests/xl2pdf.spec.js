'use strict';
var converter = require('../index')();
var expect = require('chai').expect;

describe('A XLSX file to PDF conversion should ', function() {
  it('create a pdf with same file name in the same directory', function  (done) {
    converter.generatePdf('input/test.xls', function(err, result) {
      if (err) {
        console.log('Error ');
        console.error(err);
      }
      expect(result).to.not.be.undefined;
      expect(result.outputFile).to.not.be.undefined;
      expect(result.outputFile).to.have.string('test.pdf');
      done();
    });
  });

  it('throw some error if invalid file name is passed', function  (done) {
    converter.generatePdf('../input/test1212912012323-invalidname.xlsx', function(err, result) {
      if (!err) {
        console.log(result);
      }
      expect(err).to.not.be.undefined;
      done();
    });
  });
});
