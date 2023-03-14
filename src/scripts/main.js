'use strict';

const population = document.querySelectorAll('.population');
const populationSum = [...population]
  .map(item => Number(item.innerText.split(',').join('')))
  .reduce((sum, pop) => sum + pop);

document.querySelector('.total-population').innerText
= populationSum.toLocaleString('en-US');

const populationAvg = populationSum / population.length;

document.querySelector('.average-population').innerText
= populationAvg.toLocaleString('en-US');
