'use strict';

const populations = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

const arrayOfPopulation = [...populations].map(population => {
  return +(population.textContent.split(',').join(''));
});

const totalValue = arrayOfPopulation
  .reduce((acc, population) => acc + population, 0);

const averageValue = totalValue / arrayOfPopulation.length;

totalPopulation.textContent = totalValue.toLocaleString();
averagePopulation.textContent = averageValue.toLocaleString();
