'use strict';

const populationElement = [...document.querySelectorAll('.population')];

const population = populationElement.map((country) => {
  return +country.textContent.replace(/,/g, '');
});

const total = population.reduce((acc, prev) => acc + prev, 0);
const average = total / population.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
