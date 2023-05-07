'use strict';

const populations = document.querySelectorAll('.population');

const numbers = Array.from(populations).map(population =>
  parseInt(population.textContent.replaceAll(',', '')));

const total = numbers.reduce((accumulator, currentValue) =>
  accumulator + currentValue, 0);
const average = total / numbers.length;

const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = total.toLocaleString();

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.textContent = average.toLocaleString();
