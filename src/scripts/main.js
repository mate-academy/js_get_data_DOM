'use strict';

const average = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const numbers = [...document.querySelectorAll('.population')].map((el) =>
  // eslint-disable-next-line prettier/prettier
  Number(el.textContent.replaceAll(',', '')));
const counter = numbers.reduce((sum, n) => sum + n, 0);

function calculateTotal() {
  const formattedCounter = counter.toLocaleString('en-US');

  totalPopulation.textContent = formattedCounter;
}

function calculateAvarage() {
  const avarageNumber = counter / numbers.length;
  const formattedCounter = avarageNumber.toLocaleString('en-US');

  average.textContent = formattedCounter;
}

calculateTotal();
calculateAvarage();
