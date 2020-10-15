'use strict';

const population = document.querySelectorAll('.population');
const populationDate = [...population].map(item => (
  parseInt(item.innerText.split(',').join('')))
);
const populationSum = populationDate.reduce((sum, item) => sum + item, 0);
const populationAverage = populationSum / populationDate.length;

const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

totalPopulationEl.textContent = populationSum.toLocaleString('en-US');
averagePopulationEl.textContent = populationAverage.toLocaleString('en-US');
