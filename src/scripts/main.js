'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(span => +span
    .innerHTML
    .split(',')
    .join(''));

const total = populations.reduce((x, y) => x + y, 0);
const average = total / populations.length;

document
  .querySelector('.total-population')
  .textContent = total.toLocaleString();

document
  .querySelector('.average-population')
  .textContent = average.toLocaleString();
