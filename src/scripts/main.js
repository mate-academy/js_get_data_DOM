'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements).map((element) => {
  const populationText = element.textContent.replace(/,/g, '');

  return parseInt(populationText, 10);
});

const totalPopulation = population.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / population.length;
const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = averagePopulation.toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
