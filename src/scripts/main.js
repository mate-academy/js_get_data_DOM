'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((element) => Number(element.textContent.replace(/,/g, '')))
  .filter(Number.isFinite);

const total = populations.reduce((sum, population) => sum + population, 0);
const average = populations.length ? total / populations.length : 0;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
