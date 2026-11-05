'use strict';

const populationNodes = document.querySelectorAll('span.population');
const populationValues = [...populationNodes].map((node) => {
  return Number(node.textContent.replaceAll(',', ''));
});

let totalPopulation =
  populationValues.reduce((sum, population) => sum + population, 0) + '';

let averagePopulation =
  Math.floor(totalPopulation / populationValues.length) + '';

const numberFormatter = new Intl.NumberFormat('en-US');

totalPopulation = numberFormatter.format(totalPopulation);
averagePopulation = numberFormatter.format(averagePopulation);

document.querySelector('span.total-population').textContent = totalPopulation;

document.querySelector('span.average-population').textContent =
  averagePopulation;
