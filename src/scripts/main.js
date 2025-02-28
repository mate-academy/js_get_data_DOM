'use strict';

const population = [...document.querySelectorAll('.population')].map((x) => {
  return parseInt(x.textContent.replace(/,/g, ''));
});

const total = population.reduce((sum, n) => sum + n, 0);
const average = total / population.length;

const numberFormat = (n) => n.toLocaleString('en-US');

document.querySelector('.total-population').textContent = numberFormat(total);

document.querySelector('.average-population').textContent = numberFormat(
  Math.floor(average),
);
