'use strict';

const population = document.querySelectorAll('.population');

const totalPopulation = [...population]
  .map(el => +(el.innerText.replace(/,/g, '')))
  .reduce((sum, b) => sum + b);

const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString('en-US');
