'use strict';

const populationElements = document.querySelectorAll('span.population');
const population = [...populationElements].map(
  (el) => +el.textContent.replaceAll(',', ''),
);
const sum = population.reduce((prev, number) => number + prev, 0);

const totalPopulation = document.querySelectorAll('span.total-population')[0];
const average = document.querySelectorAll('span.average-population')[0];

totalPopulation.textContent = sum.toLocaleString('en-US');

average.textContent = (sum / population.length).toLocaleString('en-US');
