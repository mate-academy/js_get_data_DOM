'use strict';

const countries = [...document.querySelectorAll('.population')];

const totalPopulation = countries.reduce((acc, el) => {
  return acc + +el.textContent.replaceAll(',', '');
}, 0);
const avgPopulation = Math.round(+totalPopulation / countries.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString('en-US');
