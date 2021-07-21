"use strict";

const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let sum = 0;
let sum0 = 0;
let sum1 = 0;
let finishGame = false;

const randomDice = function () {
  if (!finishGame) {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomNum}.png`;
    dice.style.display = "block";

    actions(randomNum);
  }
};

const active = function () {
  if (player0.classList.contains("player--active")) {
    return 0;
  } else {
    return 1;
  }
};

const actions = function (randomNum) {
  if (randomNum !== 1) {
    sum += randomNum;
    document.querySelector(`#current--${active()}`).textContent = sum;
  } else {
    sum = 0;
    document.querySelector(`#current--${active()}`).textContent = 0;
    activePlayer();
  }
};

const sumScore = function () {
  if (active() === 0) {
    return (sum0 += sum);
  } else {
    return (sum1 += sum);
  }
};

const activePlayer = function () {
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

const hold = function () {
  if (!finishGame) {
    if (sum !== 0) {
      document.querySelector(`#score--${active()}`).textContent = sumScore();
    }
    document.querySelector(`#current--${active()}`).textContent = 0;
    sum = 0;
    win();
  }
};

const win = function () {
  if (
    Number(document.querySelector(`#score--${active()}`).textContent) >= 100
  ) {
    document
      .querySelector(`.player--${active()}`)
      .classList.add("player--winner");
    finishGame = true;
    dice.style.display = "none";
  } else {
    activePlayer();
  }
};

const newGame = function () {
  sum = 0;
  sum0 = 0;
  sum1 = 0;

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.querySelector(".dice").style.display = "none";
  document
    .querySelector(`.player--${active()}`)
    .classList.remove("player--winner");
  if (player1.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
  finishGame = false;
};

document.querySelector(".btn--roll").addEventListener("click", randomDice);
document.querySelector(".btn--hold").addEventListener("click", hold);
document.querySelector(".btn--new").addEventListener("click", newGame);
