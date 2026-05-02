'use strict';

const allPopulations = [...document.querySelectorAll('.population')];

const totalPopulation = allPopulations.map((elem) => {
  return Number(elem.textContent.replace(/,/g, ''));
});
const sumPopulation = totalPopulation.reduce((sum, num) => sum + num, 0);

const averagePopulation = Math.floor(sumPopulation / allPopulations.length);

document.querySelector('.total-population').textContent =
  sumPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
