/* eslint-disable function-paren-newline */
'use strict';

// write your code here
const population = Array.from(document.querySelectorAll('.population'));
const populationNumbers = population.map((el) =>
  parseInt(el.textContent.replace(/,/g, '')),
);
const total = populationNumbers.reduce((acc, num) => acc + num, 0);
const average = total / populationNumbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
