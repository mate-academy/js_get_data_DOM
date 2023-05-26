'use strict';

const allPopulation = document.querySelectorAll('.population');
const populationCount = [...allPopulation].map((el) => (
  +el.innerText.split(',').join('')
));
const totalPopulation = populationCount.reduce((result, el) => result + el);
const averagePopulation = totalPopulation / populationCount.length;

const totalPopulationNumber = document.querySelector('.total-population');

totalPopulationNumber.textContent = totalPopulation.toLocaleString();

const averagePopulationNumber = document.querySelector('.average-population');

averagePopulationNumber.textContent = averagePopulation.toLocaleString();
