'use strict';

const population = document.querySelectorAll('.population');

const totalPopulationValue = [...population].reduce((prev, current) => {
  return prev + Number(current.textContent.split(',').join(''));
}, 0);

const averagePopulationValue = totalPopulationValue / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = totalPopulationValue.toLocaleString();
averagePopulation.innerHTML = averagePopulationValue.toLocaleString();
