'use strict';

const spans = document.querySelectorAll('.population');

const populations = [];

spans.forEach(span => {
  populations.push(span.textContent);
});

const populationValue = [];

populations.forEach(population => {
  populationValue.push(parseInt(population.replace(/,/g, '')));
});

const totalPopulation = populationValue.reduce((a, b) => a + b, 0);

const numberOfCountries = populationValue.length;
const averagePopulation = totalPopulation / numberOfCountries;

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population')
  .textContent = formattedTotalPopulation;

document.querySelector('.average-population')
  .textContent = formattedAveragePopulation;
