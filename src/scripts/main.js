'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (el) => +el.textContent.replaceAll(',', ''),
);
const totalPopulation = population.reduce((sum, el) => sum + el, 0);
const averagePopulation = Math.round(totalPopulation / population.length);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
