'use strict';

const countriesList = Array.from(document.querySelectorAll('span.population'));

const totalPopulation = countriesList.reduce(
  (acc, span) => acc + parseInt(span.textContent.split(',').join('')),
  0,
);

const averagePopulation = totalPopulation / countriesList.length;

const totalPopulationSpan = document.querySelector('span.total-population');
const averagePopulationSpan = document.querySelector('span.average-population');

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
