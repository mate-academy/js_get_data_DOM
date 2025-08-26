'use strict';

const populationsElements = [...document.querySelectorAll('.population')];

const populationsValues = populationsElements
  .map((el) => Number(el.textContent.trim().replaceAll(',', '')))
  .filter((el) => !Number.isNaN(el));

const totalPopulation = populationsValues.reduce((sum, n) => sum + n, 0);

const avgPopulation = Math.round(totalPopulation / populationsValues.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString();
