'use strict';

const populations = document.querySelectorAll('.population');
let total = 0;

for (const population of populations) {
  const number = +population.textContent.split(',').join('');

  total += number;
}

const average = total / populations.length;

const averageFormatted = average.toLocaleString('en-US');
const totalFormatted = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = averageFormatted;
totalPopulation.textContent = totalFormatted;
