'use strict';

const population = document.querySelectorAll('.population');
const populationData = [...population].map(i => +i.innerText.replace(/,/g, ''));
const populationTotal = populationData.reduce((a, b) => a + b, 0);
const populationAverage = populationTotal / population.length;

document.querySelector('.total-population').innerText
  = populationTotal.toLocaleString();

document.querySelector('.average-population').innerText
  = populationAverage.toLocaleString();
