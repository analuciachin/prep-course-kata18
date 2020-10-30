let prompt = require("prompt-sync")();

// code below (replace this example)

const randomNum = Math.floor((Math.random() * 100) + 1);
//console.log('randomNum: ', randomNum)
let numTries = 0;
let guesses = [];
let answer = prompt("Guess a number: ");

while (answer * 1 !== randomNum) {
  if (answer * 1 > 0 || answer * 1 <= 0) {
    if (guesses.length > 0) {
      //console.log('case1');
      for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] === answer) {
          //console.log('guesses[i]: ', guesses[i], ' answer: ', answer)
          console.log('Already guessed!');
          answer = prompt("Guess a number: ");
        }
      }
    } 
    if (answer > randomNum) {
      //console.log('case2');
      guesses.push(answer);
      //console.log(guesses);
      console.log('Too High!');
      answer = prompt("Guess a number: ");
      numTries++;     
    } 
    else if (answer < randomNum) {
      //console.log('case3');
      guesses.push(answer);
      //console.log(guesses);
      console.log('Too Low!');
      answer = prompt("Guess a number: ");
      numTries++;
    }
  } else {
    console.log('Not a number! Try again!');
    answer = prompt("Guess a number: ");
  }
}

if (answer * 1 === randomNum) {
  console.log('You got it! You took ' + numTries + ' attempts!');
}
