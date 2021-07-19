'use strict';

let num;

function changeMessage(str) {
  document.querySelector('.message').textContent = str;
}

function aleaNum() {
  num = Math.trunc(Math.random() * 20) + 1;
}

aleaNum();

document.querySelector('.check').addEventListener('click', function () {
  const inpNum = Number(document.querySelector('.guess').value);
  if (!inpNum || inpNum < 0 || inpNum > 20) {
    changeMessage('❌ Caracter incorrecto ❌');
  } else if (inpNum === num) {
    changeMessage('💋 Adivinaste 💋');
    if (
      Number(document.querySelector('.score').textContent) >
      Number(document.querySelector('.highscore').textContent)
    ) {
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = num;
  } else if (inpNum !== num) {
    changeMessage(
      inpNum > num ? '😥 Mas bajo bichi 😥' : '😥 Mas alto bichi 😥'
    );

    if (Number(document.querySelector('.score').textContent) > 0) {
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  aleaNum();
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  changeMessage('Pone un numero bichita');
  document.querySelector('body').style.backgroundColor = '#222';
});
