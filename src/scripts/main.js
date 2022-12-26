'use strict';

const numbers = document.querySelectorAll('span.population');

const totalNumber = [...numbers].reduce(
  (sum, span) => sum + +span.innerHTML.split(',').join(''), 0);

const average = Math.round(totalNumber / numbers.length);

document.querySelector('.total-population').innerHTML
  = Number(totalNumber).toLocaleString();

document.querySelector('.average-population').innerHTML
  = Number(average).toLocaleString();
