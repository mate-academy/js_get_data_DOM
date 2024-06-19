'use strict';

const populationValues = [...document.querySelectorAll('.population')];

const values = populationValues.map(
  (elm) => +elm.textContent.replace(/,/g, ''),
);

const sum = values.reduce((start, nextElem) => start + nextElem, 0);
const average = sum / values.length;

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
