'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements)
  .map((el) => el.textContent.replace(/,/g, ''))
  .map(Number)
  .filter((num) => !isNaN(num));
const total = populations.reduce((sum, el) => sum + el, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
