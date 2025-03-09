'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const totalPopulation = population.reduce((acc, currentPopulation) => {
  const number =
    parseInt(currentPopulation.innerText.replace(/\D/g, ''), 10) || 0;

  return acc + number;
}, 0);

const averagePopulation = totalPopulation / population.length || 0;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
