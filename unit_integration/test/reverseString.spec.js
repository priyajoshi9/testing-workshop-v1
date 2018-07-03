var reverseString = require('../index').reverseString;
var expect = require('chai').expect;

describe.only('reverseString', function(){
  describe('smoke test', function(){
    it('should exist', function(){
      expect(reverseString).to.exist;
    })
    it('should be a function', function(){
      expect(reverseString).to.be.a('function');
    })
  });

  describe('Should reverse the given string', function(){
    it("Should return reversed string", function(){
      expect(reverseString('hello')).to.equal('olleh');
      expect(reverseString('welcome')).to.equal('emoclew');
      expect(reverseString('')).to.equal('');
    })
  });
})
