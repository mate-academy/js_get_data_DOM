'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (span) => +span.textContent.replace(/[,!]/g, ''),
);
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const totalPopulation = population.reduce((cur, acc) => cur + acc);
const averagePopulation = totalPopulation / population.length;

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
