chai.should();

function User(name) {
  this.firstName = name || 'Test';
}

User.prototype = {
  greetings: function(lastName) {
    if (!lastName) throw new Error('missing last name');
    return 'Hello ' + this.firstName + ' ' + lastName;
  }
};

describe('User', function() {
  describe('constructor', function() {
    it('should have a default name', function() {
      var user = new User();
      user.firstName.should.to.equal('Test');
    });

    it("should set user's name if provided", function() {
      var user = new User('Dummy User');
      user.firstName.should.to.equal('Dummy User');
    });
  });
  
  describe('#greetings', function() {
    it('should throw if no last name is passed in', function() {
      (function() { new User().greetings()}).should.Throw(Error);
    });

    it('should greetings passed last name', function() {
      var greetings = new User('Json').greetings('Roy');
     greetings.should.to.equal('Hello Json Roy');
    });
  });

  describe('#greetings with stub', function() {
    it('should greet with stubbed method', function() {
      
      var stub = sinon.stub(User.prototype, 'greetings').callsFake(function fakeFn() {
        return 'Its working';
      });
      
      var user = new User();
      user.greetings().should.to.equal('Its working');

      stub.restore();

      var userStub = sinon.stub(user, 'firstName').value('newValue');
      user.firstName.should.to.equal('newValue');
      
      userStub.restore(); // On restore should return default value
      user.firstName.should.to.equal('Test');
      
    });
  });
});