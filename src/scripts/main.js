'use strict';

const populationSpans = document.querySelectorAll('span.population');
const totalPopSpan = document.querySelector('span.total-population');
const averagePopSpan = document.querySelector('span.average-population');

const totalPopulation = [ ...populationSpans ]
  .map(span => Number(span.innerHTML.split(',').join('')) || 0)
  .reduce((sum, population) => sum + population);

const averagelPopulation = totalPopulation / populationSpans.length;

totalPopSpan.innerHTML = totalPopulation.toLocaleString();
averagePopSpan.innerHTML = averagelPopulation.toLocaleString();
