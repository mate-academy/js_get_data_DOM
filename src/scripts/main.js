'use strict';

const totalPopulationSelector = document.querySelector('.total-population');
const averagePopulationSelector = document.querySelector('.average-population');
const allTagsPopulation = document.querySelectorAll('.population');
const population = [...allTagsPopulation].map(value =>
  Number(value.innerText.split(',').join('')));
const totalPopulation = population.reduce((accum, value) => accum + value, 0);
const averagePopulation = totalPopulation / population.length;

totalPopulationSelector.innerText = totalPopulation.toLocaleString('en-US');
averagePopulationSelector.innerText = averagePopulation.toLocaleString('en-US');
