'use strict';

const allPopulations = [...document.querySelectorAll('.population')];
const populations = allPopulations.map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const normalizeTotal = total.toLocaleString('en-US');
const normalizeAverage = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = normalizeTotal;
document.querySelector('.average-population').textContent = normalizeAverage;
