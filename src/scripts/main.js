'use strict';

const populationSpans = document.querySelectorAll('span.population');

let totalPopulation = 0;
let count = 0;

populationSpans.forEach((span) => {
  const populationText = span.textContent.split(',').join('');
  const populationNumber = parseInt(populationText);

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
    count++;
  }
});

const averagePopulation = totalPopulation / count;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('span.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('span.average-population').textContent =
  formatNumber(averagePopulation);
