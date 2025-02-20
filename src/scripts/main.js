'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')].map(
  (popul) => +popul.textContent.split(',').join(''),
);

const total = populations.reduce((acum, val) => acum + val, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
