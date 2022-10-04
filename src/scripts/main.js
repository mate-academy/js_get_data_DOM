'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(x => +x.innerText.split(',').join(''));
const totalPopulation = populations.reduce((sum, x) => sum + x, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').innerText
  = totalPopulation.toLocaleString();

document.querySelector('.average-population').innerText
  = averagePopulation.toLocaleString();
