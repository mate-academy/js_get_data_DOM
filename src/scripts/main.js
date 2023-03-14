'use strict';

const textDataPopulation = document.querySelectorAll('.population');
const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

const population = [ ...textDataPopulation ].map(span =>
  +span.textContent.replaceAll(',', ''));

const totalPopulation = population.reduce((accum, curr) => accum + curr);
const averagePopulation = totalPopulation / population.length;

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
