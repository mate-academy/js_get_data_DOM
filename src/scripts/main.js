'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .filter((num) => !Number.isNaN(num));

const total = populations.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populations.length);

const formatNumber = (number) => number.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent =
  formatNumber(average);
