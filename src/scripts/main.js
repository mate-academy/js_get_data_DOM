'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = [];

populationSpans.forEach(span => {
  populations.push(span.textContent);
});

const populationNumbers = [];

populations.forEach(population => {
  populationNumbers.push(parseInt(population.replace(/,/g, '')));
});

const totalPopulation = populationNumbers.reduce((a, b) =>
  a + b);

const numberOfCountries = populationNumbers.length;
const averagePopulation = totalPopulation / numberOfCountries;

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population')
  .textContent = formattedTotalPopulation;

document.querySelector('.average-population')
  .textContent = formattedAveragePopulation;
