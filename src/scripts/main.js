'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

population.forEach(quantity => {
  const count = quantity.textContent.split(',').join('');

  total += +count;
});

const average = total / population.length;

totalPopulation.textContent = total
  .toLocaleString('en-US');

averagePopulation.textContent = average
  .toLocaleString('en-US');
