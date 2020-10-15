'use strict';

const population = document.querySelectorAll('.population');
const populationList = [...population]
  .map(item => +item.innerText.replace(/,/g, ''));
const populationTotal = populationList.reduce((a, b) => a + b);
const populationAverage = populationTotal / population.length;

document.querySelector('.total-population').innerText
  = populationTotal.toLocaleString();

document.querySelector('.average-population').innerText
  = populationAverage.toLocaleString();
