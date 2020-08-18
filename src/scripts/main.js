'use strict';

const populations = [...document.querySelectorAll('.population')];

const total = populations.map(population => {
  return +population.textContent.split(',').join('');
}).reduce((sum, population) => sum + population, 0);

document.querySelector('.total-population').innerHTML = formatter(total);

document.querySelector('.average-population')
  .innerHTML = formatter(total / populations.length);

function formatter(num) {
  return String(num).split('')
    .map((digit, i, arr) => {
      if ((arr.length - 1 - i) % 3 === 0
          && i < arr.length - 1) {
        return digit + ',';
      } else {
        return digit;
      }
    }).join('');
}
