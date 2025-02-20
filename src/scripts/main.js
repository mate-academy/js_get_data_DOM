'use strict';

const populationSpanя = document.querySelectorAll('span.population');

const populationValues = [];

populationSpanя.forEach((span) => {
  const populationNumber = parseFloat(span.textContent.replace(/,/g, ''));

  populationValues.push(populationNumber);
});

const totalPopulation = populationValues.reduce((sum, value) => sum + value, 0);

const averagePopulation = totalPopulation / populationValues.length;

const formattedTotalPopulation = totalPopulation.toLocaleString();
const formattedAveragePopulation = averagePopulation.toLocaleString();

document.querySelector('span.total-population').textContent =
  formattedTotalPopulation;

document.querySelector('span.average-population').textContent =
  formattedAveragePopulation;
