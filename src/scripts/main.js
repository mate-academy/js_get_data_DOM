'use strict';

const populations = document.querySelectorAll('.population');

const populationNumbers = Array.from(populations).map((pop) => {
  return parseInt(pop.textContent.replace(/,/g, ''), 10);
});

const totalPopulaton = populationNumbers.reduce((total, num) => total + num, 0);

const averagePopulation = totalPopulaton / populationNumbers.length;

const formattedTotal = totalPopulaton.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total').textContent = formattedTotal;
document.querySelector('.average').textContent = formattedAverage;
