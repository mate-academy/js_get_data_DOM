'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationCount = [...population].reduce((acc, curr) => (
  acc + Number(curr.innerText.match(/\d/g).join(''))
), 0);
const averagePopulationCount = totalPopulationCount / population.length;

totalPopulation.innerText = totalPopulationCount.toLocaleString('en');
averagePopulation.innerText = averagePopulationCount.toLocaleString('en');
