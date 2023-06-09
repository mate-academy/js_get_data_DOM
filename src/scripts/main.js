'use strict';

const population = [...document.body.querySelectorAll('.population')]
  .map(countryPopulation => (
    Number(countryPopulation.textContent.split(',').join(''))
  ));
const totalPopulation = population.reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / population.length;

document.body.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString('en-US');

document.body.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString('en-US');
