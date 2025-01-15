'use strict';

const population = [];

[...document.querySelectorAll('span.population')].forEach(function (element) {
  population.push(+element.textContent.replaceAll(',', ''));
});

const totalPopulation = population.reduce((acc, curVal) => acc + curVal, 0);

const averagePopulation = totalPopulation / population.length;

const elementTotal = document.querySelector('span.total-population');

elementTotal.textContent = totalPopulation.toLocaleString('en-US');

const elementAverage = document.querySelector('span.average-population');

elementAverage.textContent = averagePopulation.toLocaleString('en-US');
