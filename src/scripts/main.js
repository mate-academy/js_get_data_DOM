'use strict';

const populations = document.querySelectorAll('.population');

const populationNumbers = Array.from(populations).map((pop) => {
  return parseInt(pop.textContent.replace(/,/g, ''), 10);
});

const totalPopulati = populationNumbers.reduce((total, num) => total + num, 0);

const averagePopulation = totalPopulati / populationNumbers.length;

const formattedTotal = totalPopulati.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total').textContent = formattedTotal;
document.querySelector('.average').textContent = formattedAverage;
