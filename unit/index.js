module.exports = {
  rockPaperScissors: function (a, b) {

    if (a === b) {
      return 'tie';
    }

    if ((a === 'rock' && b === 'scissors') ||
        (a === 'paper' && b === 'rock') ||
        (a === 'scissors' && b === 'paper')) {
        return 'a';
    }

    if ((a === 'rock' && b === 'paper') ||
        (a === 'paper' && b === 'scissors') ||
        (a === 'scissors' && b === 'rock')) {
        return 'b';
    }
  },
  
}