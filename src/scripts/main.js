'use strict';

const avarageButton = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const numbers = [...document.querySelectorAll('.population')].map((el) =>
  // eslint-disable-next-line prettier/prettier
  Number(el.textContent.replaceAll(',', '')));

function calculateTotal() {
  const counter = numbers.reduce((sum, n) => sum + n, 0);
  const formattedCounter = counter.toLocaleString('en-US');

  totalPopulation.textContent = formattedCounter;
}

function calculateAvarage() {
  const counter = numbers.reduce((sum, n) => sum + n, 0);
  const avarageNumber = counter / numbers.length;
  const formattedCounter = avarageNumber.toLocaleString('en-US');

  avarageButton.textContent = formattedCounter;
}

calculateTotal();
calculateAvarage();
