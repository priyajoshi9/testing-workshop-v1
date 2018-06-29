var palindrome = require('../index').palindrome;
var expect = require('chai').expect;

describe.only('palindrome', function(){
  describe('smoke test', function(){
    it('should exist', function(){
      expect(palindrome).to.exist;
    })
    it('should be a function', function(){
      expect(palindrome).to.be.a('function');
    })
  });

  describe('Given string is a palindrome', function(){
    it("Should return true", function(){
      expect(palindrome('race car')).to.equal(true);
      expect(palindrome('A man, a plan, a canal. Panama')).to.equal(true);
      expect(palindrome('never odd or even')).to.equal(true);
      expect(palindrome('My age is 0, 0 si ega ym.')).to.equal(true);
    })
  });

  describe('Given string is not a palindrome', function(){
    it("Should return false", function(){
      expect(palindrome('not a palindrome')).to.equal(false);
      expect(palindrome('nope')).to.equal(false);
      expect(palindrome('“almostomla”')).to.equal(false);
      expect(palindrome('1 eye for of 1 eye.')).to.equal(false);
    })
  });
})
