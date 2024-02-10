'use strict';

const populationElements = document.querySelectorAll('.population');

const populationNumbers = Array.from(populationElements, element => {
  return +element.textContent.replace(/,/g, '');
});

const totalPopulation
  = populationNumbers.reduce((total, population) => total + population, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

const formattedTotal = new Intl.NumberFormat().format(totalPopulation);
const formattedAverage = new Intl.NumberFormat().format(averagePopulation);

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
