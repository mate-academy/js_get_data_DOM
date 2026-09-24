'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const raw = el.textContent.replace(/,/g, '');
  const num = Number(raw);

  return isNaN(num) ? 0 : num;
});

const total = populations.reduce((sum, n) => sum + n, 0);
const average = total / populations.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = formattedTotal;
document.querySelector('.average-population').innerHTML = formattedAverage;
