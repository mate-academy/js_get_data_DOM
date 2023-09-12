'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationValues = [...populationSpans].map(
  span => span.firstChild.nodeValue
);
const populationCounts = populationValues.map(
  value => +value.split(',').join('')
);

const total = populationCounts.reduce((totalCount, count) => totalCount + count, 0);
const average = total / populationCounts.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
