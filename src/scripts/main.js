'use strict';

const population = [...document.querySelectorAll('.population')].map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const totalPopulation = population.reduce((acc, val) => acc + val, 0);

const averagePopulation = totalPopulation / population.length;

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-Us');

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-Us');
