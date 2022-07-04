'use strict';

const element = document.querySelectorAll('.population');

const numbers = [...element].map(item =>
  +item.textContent.split(',').join('')

);

const total = numbers.reduce((a, b) => (a + b), 0);

const average = total / numbers.length;

document.querySelector('.total-population')
  .innerHTML = total.toLocaleString('en');

document.querySelector('.average-population')
  .innerHTML = average.toLocaleString('en');
