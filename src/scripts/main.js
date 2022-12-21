'use strict';

const population = document.querySelectorAll('.population');
const populationValue = [...population].map(item => item.innerText);
const total = populationValue
  .map(item => +(item.split(',').join('')))
  .reduce((sum, x) => sum + x, 0);

const average = (total / populationValue.length);

document.querySelector('.total-population').innerHTML
  = total.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
  = average.toLocaleString('en-US');
