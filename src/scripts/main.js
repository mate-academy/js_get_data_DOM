'use strict';

const populations = document.querySelectorAll('span.population');

const populationValues = [...populations].map(value => (
  +value.innerText.split(',').join('')
));
const totalPopulation = populationValues.reduce((prev, value) =>
  prev + value, 0
);
const averagePopulation = totalPopulation / populationValues.length;

document.querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString();

document.querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString();
