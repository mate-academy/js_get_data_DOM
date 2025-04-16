'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const populations = populationElements.map(
  (elem) => +elem.textContent.replace(/,/g, ''),
);

const total = populations.reduce((sum, num) => sum + num, 0);

const average = Math.round(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
