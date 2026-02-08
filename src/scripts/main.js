'use strict';

const populations = document.querySelectorAll('.population');

const total = [...populations]
  .map((population) => population.textContent.replace(/\D/g, ''))
  .map((population) => Number.parseInt(population))
  .reduce((prev, next) => prev + next, 0);

const average = total / 9;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
