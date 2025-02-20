'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

for (const population of populations) {
  const number = population.innerHTML.split(',').join('');

  total += Number(number);
}

const average = total / populations.length;

averagePopulation.innerHTML = average;
totalPopulation.innerHTML = total;
