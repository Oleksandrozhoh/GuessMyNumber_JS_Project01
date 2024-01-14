'use strict';

// takes 2 arguments eventType and eventHandler function
let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const setMessageTextContent = function (text) {
  document.querySelector('.message').textContent = text;
};

const setPageBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    setMessageTextContent('Please type your number into a box 😏');
  }

  // player wins the game
  else if (guess === secretNumber) {
    setMessageTextContent('Correct number!!! 🎉🎉🎉');
    setPageBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '25rem';

    //saving highscore value if its greater than ex. Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
  } else {
    // guess is too high or too low with corresponding message
    // decreasing score value in the conditional statement
    if (--score > 0) {
      setMessageTextContent(
        guess > secretNumber
          ? 'My number is lower 😛'
          : 'My number is higher 😛'
      );
      document.querySelector('.score').textContent = score;

      // out of attempts == lost the game
    } else {
      setMessageTextContent('You lost the game 😥');
      document.querySelector('.score').textContent = 0;
      setPageBackgroundColor('red');
    }
  }
});

// 'again!' button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = null;
  setPageBackgroundColor('#222');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  setMessageTextContent('Start guessing ...');
});
