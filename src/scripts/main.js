'use strict';

const populationElements = document.querySelectorAll('span.population');
const totalPopulation = document.querySelectorAll('span.total-population')[0];
const averagePopulation = document.querySelectorAll(
  'span.average-population',
)[0];

const population = [...populationElements].map(
  (el) => +el.textContent.replaceAll(',', ''),
);
const total = population.reduce((prev, number) => number + prev, 0);

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = (total / population.length).toLocaleString(
  'en-US',
);
