'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => el.textContent.replace(/,/g, ''))
  .map(Number)
  .filter((number) => !isNaN(number));

const total = populations.reduce((sum, val) => sum + val, 0);
const average = total / populations.length;

const formatNumber = (number) => number.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(average),
);
