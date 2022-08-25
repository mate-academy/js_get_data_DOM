'use strict';

const population = document.querySelectorAll('.population');

const total = [...population]
  .map(element => Number(element.textContent.split(',').join('')))
  .reduce((sum, initial) => sum + initial);

const average = total / 10;

document.querySelector('.total-population')
  .textContent = total.toLocaleString();

document.querySelector('.average-population')
  .textContent = average.toLocaleString();
