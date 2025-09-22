'use strict';

const populationSpans = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

let totalPopulation = 0;

populationSpans.forEach((element) => {
  const population = element.textContent;

  totalPopulation += Number(population.replace(/,/g, ''));
});

const averagePopulation = Math.floor(totalPopulation / populationSpans.length);

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
