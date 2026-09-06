'use strict';

const populations = document.querySelectorAll('.population');

const numbers = Array.from(populations)
  .map((population) => Number(population.textContent.replace(/,/g, '')))
  .filter((number) => !Number.isNaN(number));

const total = numbers.reduce((sum, number) => sum + number, 0);
const average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
