chai.should();
describe('Unit test cases', function() {
  
  describe('smoke test', function() {
    it('should exist', function() {
      unitTest.rockPaperScissors.should.to.exist;
    });
    it('should be a function', function() {
      unitTest.rockPaperScissors.should.to.be.a('function');
    });
  });

  describe('tie conditions', function() {
    it("should return 'tie' on 'rock', 'rock'", function() {
      unitTest.rockPaperScissors('rock', 'rock').should.to.equal('tie');
    });
    it("should return 'tie' on 'paper', 'paper'", function() {
      unitTest.rockPaperScissors('paper', 'paper').should.to.equal('tie');
    });
    it("should return 'tie' on 'scissors', 'scissors'", function() {
      unitTest
        .rockPaperScissors('scissors', 'scissors')
        .should.to.equal('tie');
    });
  });

  describe("Player 'a' winning", function() {
    it("should return 'a' on 'rock', 'scissors'", function() {
      unitTest.rockPaperScissors('rock', 'scissors').should.to.equal('a');
    });
    it("should return 'a' on 'paper', 'rock'", function() {
      unitTest.rockPaperScissors('paper', 'rock').should.to.equal('a');
    });
    it("should return 'a' on 'scissors', 'paper'", function() {
      unitTest.rockPaperScissors('scissors', 'paper').should.to.equal('a');
    });
  });

  describe("Player 'b' winning", function() {
    it("should return 'b' on 'rock', 'paper'", function() {
      unitTest.rockPaperScissors('rock', 'paper').should.to.equal('b');
    });
    it("should return 'b' on 'paper', 'scissors'", function() {
      unitTest.rockPaperScissors('paper', 'scissors').should.to.equal('b');
    });
    it("should return 'b' on 'scissors', 'rock'", function() {
      unitTest.rockPaperScissors('scissors', 'rock').should.to.equal('b');
    });
  });
});
