'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .filter(Number.isFinite);

const total = populations.reduce((sum, population) => sum + population, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent = total;
document.querySelector('.average-population').textContent = average;
