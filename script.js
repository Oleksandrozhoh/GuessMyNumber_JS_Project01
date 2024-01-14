'use strict';

// sellection elements, basic element content manipulation
// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').classList);

// document.querySelector('.message').textContent = '😜👏🎉 Correct number!!!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = '19';
// document.querySelector('.guess').textContent = '10';
// document.querySelector('.guess').value = '10';

// event listener
// takes 2 arguments eventType and eventHandler function
let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please type your number into a box 😏';
  } else {
    score--;

    // player wins the game
    if (guess === secretNumber) {
      document.querySelector('.message').textContent =
        'Correct number!!! 🎉🎉🎉';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';
      if (score + 1 > highScore) highScore = score + 1;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = secretNumber;
    }

    if (score > 0) {
      // guess is too high
      if (guess > secretNumber) {
        document.querySelector('.message').textContent =
          'My number is lower 😛';
        document.querySelector('.score').textContent = score;
      }

      // guess is too low
      if (guess < secretNumber) {
        document.querySelector('.message').textContent =
          'My number is higher 😛';
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😥';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
});
