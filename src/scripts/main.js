'use strict';

const population = document.querySelectorAll('.population');
const populationSum = [...population]
  .map(a => Number(a.innerText.split(',').join('')))
  .reduce((el, sum) => sum + el);

document.querySelector('.total-population').innerText
= populationSum.toLocaleString('en-US');

const populationAvg = populationSum / population.length;

document.querySelector('.average-population').innerText
= populationAvg.toLocaleString('en-US');
