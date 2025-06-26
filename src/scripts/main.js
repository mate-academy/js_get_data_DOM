'use strict';

const populationElem = document.querySelectorAll('.population');

const populations = [];

populationElem.forEach((el) => {
  const number = parseInt(el.textContent.replace(/,/g, ''), 10);

  if (!isNaN(number)) {
    populations.push(number);
  }
});

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
