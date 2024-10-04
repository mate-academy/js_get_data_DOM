'use strict';

const elements = [...document.querySelectorAll('span.population')];

const validElements = elements
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter((num) => !isNaN(num));

const total = validElements.reduce((sum, el) => sum + Number(el), 0);

const totalPopulation = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const avgPopulation = (total / validElements.length)
  .toFixed(0)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('span.total-population').replaceWith(totalPopulation);
document.querySelector('span.average-population').replaceWith(avgPopulation);
