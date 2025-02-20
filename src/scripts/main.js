'use strict';

const populationCollection = document.querySelectorAll('span.population');
const demographics = [];

for (const item of populationCollection) {
  demographics.push(Number(item.textContent.replaceAll(',', '')));
}

const totalPopulation = demographics.reduce((sum, el) => sum + el, 0);
const avgPopulation = totalPopulation / demographics.length;

document.querySelector('span.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  avgPopulation.toLocaleString('en-US');
