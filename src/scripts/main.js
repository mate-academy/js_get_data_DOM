'use strict';

const makeThousands = num => num.toLocaleString('en-US');

const populations = document.querySelectorAll('.population');
const totalPopHTML = document.querySelector('.total-population');
const avgPopHTML = document.querySelector('.average-population');
const populationAmounts = [...populations].map(
  population => +population.textContent.split(',').join('')
);
const populationsSum = populationAmounts.reduce(
  (curr, prev) => curr + prev
);
const averagePopulation = populationsSum / populationAmounts.length;

totalPopHTML.textContent = makeThousands(populationsSum);
avgPopHTML.textContent = makeThousands(averagePopulation);
