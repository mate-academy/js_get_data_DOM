'use strict';

const populations = document.querySelectorAll('.population');

const populationNumbers = Array.from(populations).map((pop) => {
  const population = pop.textContent.replace(/,/g, '');

  return Number(population);
});

const totalPopulation = populationNumbers.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

const formatNumber = (number) => {
  return number.toLocaleString('en-US');
};

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Number(averagePopulation.toFixed(0)),
);
