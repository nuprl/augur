'use strict';
var converter = require('../index')();
var expect = require('chai').expect;

describe('A docx file to HTML conversion should ', function() {
  it('create a HTML with same file name in the same directory', function  (done) {
    converter.generateHtml('input/test.docx', function(err, result) {
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
    converter.generateHtml('../input/test1212912012323.doc', function(err, result) {
      if (!err) {
        console.log(result);
      }
      expect(err).to.not.be.undefined;
      done();
    });
  });
});
