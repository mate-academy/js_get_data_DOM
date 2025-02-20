'use strict';

const docPopulationObject = document.querySelectorAll('.population');

const docTotal = document.querySelector('.total-population');

const docAverage = document.querySelector('.average-population');

const totalPopulation = Object.values(docPopulationObject).reduce(
  (total, current) => total + parseInt(current.textContent.replaceAll(',', '')),
  0,
);

const averagePopulation =
  docPopulationObject.length > 0
    ? totalPopulation / docPopulationObject.length
    : 0;

docTotal.textContent = totalPopulation.toLocaleString('en-US');
docAverage.textContent = averagePopulation.toLocaleString('en-US');
