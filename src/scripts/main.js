'use strict';

const populations = Array.from(document.querySelectorAll('.population'))
  .map(el => el.textContent)
  .map(el => +el.split(',').join(''));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = populations.reduce((a, b) => a + b).toLocaleString('en-US');

average.textContent = (populations.reduce((a, b) => a + b) / populations.length)
  .toLocaleString('en-US');
