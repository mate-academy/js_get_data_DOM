'use strict';

const populationSpan = document.querySelectorAll('span.population');

const population = [];

populationSpan.forEach((span) => {
  population.push(span.textContent);
});

const numbers = population.map((str) => Number(str.replace(/,/g, '')));

const sum = numbers.reduce((a, b) => a + b, 0);

const average = sum / population.length;

const totalPopulationSpan = document.querySelector('span.total-population');
const averagePopulationSpan = document.querySelector('span.average-population');

averagePopulationSpan.textContent = `${average.toLocaleString()}`;
totalPopulationSpan.textContent = `${sum.toLocaleString()}`;
