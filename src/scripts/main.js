'use strict';

const population = document.body.children[0].querySelectorAll('.population');
const populationData = [...population].map(x => +x.innerText.replace(/,/g, ''));
const populationTotal = populationData.reduce((a, b) => a + b, 0);
const populationAverage = populationTotal / population.length;

document.body.children[0].querySelector('.total-population').innerText
  = populationTotal.toLocaleString();

document.body.children[0].querySelector('.average-population').innerText
  = populationAverage.toLocaleString();
