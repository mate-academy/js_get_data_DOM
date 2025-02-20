'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationTotal = Array.from(population).reduce((acc, country) => {
  const number = +country.textContent.split(',').join('');

  return acc + number;
}, 0);

totalPopulation.textContent = populationTotal.toLocaleString();

averagePopulation.textContent = (
  populationTotal / population.length
).toLocaleString();
