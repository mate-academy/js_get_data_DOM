'use strict';

const populations = [...document.querySelectorAll('.population')];

const totalPopulation = populations.reduce((prev, population) => {
  const populationToNumber = Number(population.textContent.replace(/,/g, ''));

  return populationToNumber + prev;
}, 0);

const averagePopulation = totalPopulation / populations.length;
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalPopulation.toLocaleString('en-US');
averageSpan.textContent = averagePopulation.toLocaleString('en-US');
