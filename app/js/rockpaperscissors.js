////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // return [[Your Expression]] ;
        if (move != false) {
      return move;
    } else {
      return 'getInput()';
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // return [[ Your Expression]] ;
        if (move != false) {
      return move;
    } else {
      return 'getInput()';
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (PlayerMove === ComputerMove) {
        return tied;
    } else if (PlayerMove = 'paper') + (ComputerMove = 'rock') {
        return winner;
    } else if (PlayerMove = 'paper') + (ComputerMove = 'scissors') {
        return loser;
    } else if (PlayerMove = 'scissors') + (ComputerMove = 'paper') {
        return winner;
    } else if (PlayerMove = 'scissors') + (ComputerMove = 'rock') {
        return loser;
    } else if (PlayerMove = 'rock') + (ComputerMove = 'scissors') {
        return winner;
    } else if (PlayerMove = 'rock') + (ComputerMove = 'paper') {
        return loser;
    }

// function playToFive() {
//     console.log("Let's play Rock, Paper, Scissors");
//     var playerWins = 0;
//     var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
//     return [playerWins, computerWins];
// }

var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  if (playerWins < 5) {
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  } else if (computerWins < 5) {
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  };

  if (playerWins >= 5) {
    return [playerWins];
  } else if (computerWins >= 5) {
    return [computerWins];
  };



  // return [playerWins, computerWins];
};
