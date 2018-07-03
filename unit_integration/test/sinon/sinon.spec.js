var expect = require('chai').expect;
var sinon = require('sinon');

function User(name) {
  this.firstName = name || 'Test';
}

User.prototype = {
  greetings: function(lastName) {
    if (!lastName) throw new Error('missing last name');
    return 'Hello ' + this.firstName + ' ' + lastName;
  }
};

describe.only('User', function() {
  describe('constructor', function() {
    it('should have a default name', function() {
      var user = new User();
      expect(user.firstName).to.equal('Test');
    });

    it("should set user's name if provided", function() {
      var user = new User('Dummy User');
      expect(user.firstName).to.equal('Dummy User');
    });
  });
  
  describe('#greetings', function() {
    it('should throw if no last name is passed in', function() {
      expect(function() {
        new User().greetings();
      }).to.throw(Error);
    });

    it('should greetings passed last name', function() {
      var greetings = new User('Json').greetings('Roy');
      expect(greetings).to.equal('Hello Json Roy');
    });
  });

  describe('#greetings with stub', function() {
    it('should greet with stubbed method', function() {
      
      var stub = sinon.stub(User.prototype, 'greetings').callsFake(function fakeFn() {
        return 'Its working';
      });
      
      var user = new User();
      expect(user.greetings()).to.equal('Its working');

      stub.restore();

      var userStub = sinon.stub(user, 'firstName').value('newValue');
      expect(user.firstName).to.equal('newValue');
      
      userStub.restore(); // On restore should return default value
      expect(user.firstName).to.equal('Test');
      
    });
  });
});
