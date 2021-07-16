'use strict';

let num = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const inpNum = Number(document.querySelector('.guess').value);

  if (!inpNum || inpNum < 0 || inpNum > 20) {
    document.querySelector('.message').textContent =
      '❌ Caracter incorrecto ❌';
  } else if (inpNum === num) {
    document.querySelector('.message').textContent = '💋 Adivinaste 💋';
    if (
      Number(document.querySelector('.score').textContent) >
      Number(document.querySelector('.highscore').textContent)
    )
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    document.querySelector('.number').textContent = num;
  } else if (inpNum > num) {
    document.querySelector('.message').textContent = '😥 Mas bajo bichi 😥';
    if (Number(document.querySelector('.score').textContent) > 0) {
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
    }
  } else if (inpNum < num) {
    document.querySelector('.message').textContent = '😥 Mas alto bichi 😥';
    if (Number(document.querySelector('.score').textContent) > 0) {
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Pone un numero bichita';
  console.log(num);
});
