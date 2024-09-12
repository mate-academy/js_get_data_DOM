'use strict';

const populationSpan = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const totalPopulation = [...populationSpan].reduce((total, cur) => {
  return total + parseInt(cur.innerHTML.split(',').join(''));
}, 0);

const averagePopulation = totalPopulation / populationSpan.length;

totalPopulationSpan.innerHTML = totalPopulation.toLocaleString();
averagePopulationSpan.innerHTML = averagePopulation.toLocaleString();
