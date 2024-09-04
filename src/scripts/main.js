'use strict';

const docPopulationArray = document.querySelectorAll('.population');

const docTotal = document.querySelector('.total-population');

const docAverage = document.querySelector('.average-population');

const populationArray = [];

docPopulationArray.forEach((item) => populationArray.push(item.textContent));

const populationNumbers = populationArray.map(
  (item) => +item.replaceAll(',', ''),
);

const totalPopulation = populationNumbers.reduce((total, curr) => total + curr);

const averagePopulation = totalPopulation / populationArray.length;

docTotal.textContent = totalPopulation.toLocaleString('en-US');
docAverage.textContent = averagePopulation.toLocaleString('en-US');
