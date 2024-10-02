'use strict';

const populationArray = [...document.querySelectorAll('.population')].map(
  (span) => Number(span.textContent.replace(/,/g, '')),
);

const totalPopulation = populationArray.reduce((a, b) => a + b, 0);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  totalPopulation / populationArray.length
).toLocaleString('en-US');
