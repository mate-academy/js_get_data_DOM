'use strict';

const pop = [...document.querySelectorAll('.population')];
const popvalues = pop.map((el) => Number(el.textContent.split(',').join('')));

const totalPopulation = popvalues.reduce((pre, current) => pre + current, 0);

const avgPopulation = Math.round(totalPopulation / popvalues.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString();
