'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulation = [...populations]
  .map(el => parseFloat(el.textContent.replaceAll(',', '')))
  .reduce((sum, el) => sum + el, 0);

const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population')
  .textContent = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = averagePopulation.toLocaleString('en-US');
