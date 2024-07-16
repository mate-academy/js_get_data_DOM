'use strict';

let total = 0;

document
  .querySelectorAll('.population')
  .forEach((el) => (total += +el.textContent.split(',').join('')));

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  total / 10
).toLocaleString('en-US');
