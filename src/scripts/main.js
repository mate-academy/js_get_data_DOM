'use strict';

const displayTotal = document.querySelector('.total-population');
const displayAverage = document.querySelector('.average-population');
const populations = [...document.querySelectorAll('.population')];

const total = populations.map(population => {
  return +population.textContent.split(',').join('');
}).reduce((sum, population) => sum + population, 0);

const average = total / populations.length;

function convertIt(num) {
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

displayTotal.innerHTML = convertIt(total);
displayAverage.innerHTML = convertIt(average);
