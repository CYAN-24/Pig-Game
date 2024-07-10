'use strict';

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const allScore = document.querySelectorAll('.score');
const allCurScore = document.querySelectorAll('.current-score');
const img = document.querySelector('img');
img.style.display = 'none';

function changePlayer() {
  const tempScore = document.querySelector('.player--active .current-score');
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  tempScore.textContent = 0;
}

rollBtn.addEventListener('click', function () {
  if (document.querySelector('.player--winner') === null) {
    img.style.display = 'inline-block';
    const tempScore = document.querySelector('.player--active .current-score');
    let randomNum = Math.floor(Math.random() * 6) + 1;
    if (randomNum === 1) {
      dice.src = `./img/dice-${randomNum}.png`;
      changePlayer();
    } else {
      dice.src = `./img/dice-${randomNum}.png`;
      tempScore.textContent = Number(tempScore.textContent) + randomNum;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (document.querySelector('.player--winner') === null) {
    const tempScore = document.querySelector('.player--active .current-score');
    const score = document.querySelector('.player--active>.score');
    score.textContent =
      Number(tempScore.textContent) + Number(score.textContent);
    if (Number(score.textContent) >= 100) {
      document.querySelector('.player--active').classList.add('player--winner');
      img.style.display = 'none';
    } else {
      changePlayer();
    }
  }
});

newBtn.addEventListener('click', function () {
  img.style.display = 'none';
  if (document.querySelector('.player--winner') !== null) {
    document
      .querySelector('.player--winner')
      .classList.remove('player--winner');
  }

  for (let i = 0; i < allScore.length; i++) {
    allScore[i].textContent = 0;
  }

  for (let i = 0; i < allCurScore.length; i++) {
    allCurScore[i].textContent = 0;
  }

  player0.className = 'player player--0 player--active';
  player1.className = 'player player--1';
});
