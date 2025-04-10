'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const number = Number(el.textContent.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const total = populations.reduce((acc, num) => acc + num, 0);
const average = total / populations.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
