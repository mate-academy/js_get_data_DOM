'use strict';

const population = document.querySelectorAll('.population');

let populationTotal = 0;

population.forEach(countrie => {
  populationTotal += Number(countrie.textContent.split(',').join(''));
});

const populationAverage = populationTotal / population.length;

document.querySelector(
  '.total-population').textContent = populationTotal.toLocaleString();

document.querySelector(
  '.average-population').textContent = populationAverage.toLocaleString();
