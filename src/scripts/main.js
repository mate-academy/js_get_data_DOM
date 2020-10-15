'use strict';

const populationSpan = document.querySelectorAll('.population');

const population = [...populationSpan].map(value =>
  (
    +value.textContent.split(',').join('')
  ));

const totalPopulation = population.reduce((acc, value) => acc + value);
const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').textContent = totalPopulation;
document.querySelector('.average-population').textContent = averagePopulation;
