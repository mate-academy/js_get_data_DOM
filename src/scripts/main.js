'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

population.forEach((value) => {
  total += +value.textContent.split(',').join('');
});

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = (total / population.length).toLocaleString(
  'en-US',
);
