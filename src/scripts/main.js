'use strict';

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const population = [...document.querySelectorAll('.population')].map(
  (totalArray) => +totalArray.textContent.split(',').join(''),
);

const totalPopulation = population.reduce((acc, el) => acc + el, 0);

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(totalPopulation / population.length),
);
