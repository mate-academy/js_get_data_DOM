'use strict';

const populationNumbers = [...document.querySelectorAll('.population')].map(
  (span) => Number(span.textContent.replace(/,/g, '')),
);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populationNumbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
