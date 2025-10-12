'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((span) => span.textContent.replace(/,/g, ''))
  .map(Number)
  .filter((num) => !isNaN(num));

const total = populations.reduce((sum, val) => sum + val, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
