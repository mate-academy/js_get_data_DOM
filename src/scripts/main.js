'use strict';

const docPopulationArray = document.querySelectorAll('.population');

const docTotal = document.querySelector('.total-population');

const docAverage = document.querySelector('.average-population');

const populationNumbers = [];

docPopulationArray.forEach((item) => {
  populationNumbers.push(parseInt(item.textContent.replaceAll(',', '')));
});

const totalPopulation = populationNumbers.reduce((total, curr) => total + curr);

let averagePopulation;

if (populationNumbers.length > 0) {
  averagePopulation = totalPopulation / populationNumbers.length;
}

docTotal.textContent = totalPopulation.toLocaleString('en-US');
docAverage.textContent = averagePopulation.toLocaleString('en-US');
