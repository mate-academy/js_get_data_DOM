'use strict';

const populationNodes = [...document.body.querySelectorAll('.population')];

const population = populationNodes.map(countryNumber =>
  Number(countryNumber.textContent.split(',').join('')));

const totalPopulation = population.reduce((accumulator, current) =>
  accumulator + current, 0);
const averagePopulation = totalPopulation / population.length;

document.body.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString('en');

document.body.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString('en');
