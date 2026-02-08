'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulations = [...populations]
  .map((population) => population.textContent.replace(/\D/g, ''))
  .map((population) => Number.parseInt(population, 10))
  .filter((population) => !Number.isNaN(population));

const total = totalPopulations.reduce((prev, next) => prev + next, 0);

let average = 0;

if (totalPopulations.length !== 0) {
  average = total / totalPopulations.length;
}

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
