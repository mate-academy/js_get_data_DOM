'use strict';

const populationElements = document.querySelectorAll('.population');
const population = [];

populationElements.forEach((element) => {
  population.push(+element.textContent.split(',').join(''));
});

const total = population.reduce((sum, number) => sum + number, 0);
const average = Math.round(total / population.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
