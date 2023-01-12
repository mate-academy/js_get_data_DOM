'use strict';

const population = document.querySelectorAll('.population');

const totalPopulation = [...population].reduce((sum, value) => {
  return sum + +value.textContent.split(',').join('');
}, 0);

const averagePopulation = totalPopulation / population.length;

document.querySelector('.average-population').textContent
= averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent
= totalPopulation.toLocaleString('en-US');
