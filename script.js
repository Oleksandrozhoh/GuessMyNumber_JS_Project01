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
const secretNumber = Math.floor(Math.random() * 101);
let score = Number(document.querySelector('.score').textContent);

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  score--;

  // no input
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please type your number into a box 😏';

    // player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!!! 🎉🎉🎉';

    // guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'My number is lower 😛';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😥';
      document.querySelector('.score').textContent = 0;
    }

    // guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'My number is higher 😛';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
