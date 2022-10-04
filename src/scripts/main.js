'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(x => +x.innerText.split(',').join(''));
const averagePopulation = (populations.reduce((sum, x) => sum + x, 0)
/ populations.length);
const totalPopulation = populations.reduce((sum, x) => sum + x, 0);

document.querySelector('.total-population').innerText
  = totalPopulation.toLocaleString();

document.querySelector('.average-population').innerText
  = averagePopulation.toLocaleString();
