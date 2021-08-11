'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationSize = [ ...population ].map(item =>
  Number(item.textContent.split('').filter(index => index !== ',').join('')));

const total = populationSize.reduce((sum, currentPopulation) =>
  sum + currentPopulation, 0);
const average = total / populationSize.length;

totalPopulation.textContent = total.toLocaleString('en');
averagePopulation.textContent = average.toLocaleString('en');
