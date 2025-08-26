'use strict';

const populations = [...document.querySelectorAll('.population')].map((el) =>
  Number(el.textContent.split(',').join('')));

const totalPopulation = populations.reduce((pre, current) => pre + current, 0);

const avgPopulation = Math.round(totalPopulation / populations.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString();
