'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationArr = [ ...population ]
  .map(item => +(item.innerHTML.split(',').join('')));
const total = populationArr.reduce((sum, item) => sum + item, 0);
const average = total / population.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
