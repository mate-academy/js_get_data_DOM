'use strict';

const numberOfPop = [...document.body.querySelectorAll('.population')].map(
  (item) => +item.textContent.split(',').join(''),
);
const total = numberOfPop.reduce((sum, item) => sum + item, 0);
const average = Math.round(total / numberOfPop.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
