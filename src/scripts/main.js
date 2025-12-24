'use strict';

const locale = 'en-US';
const populations = [...document.getElementsByClassName('population')]
  .map((el) => Number.parseInt(el.textContent.replaceAll(',', '')))
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((acc, el) => acc + el);
const totalPopulationEl = document.querySelector('.total-population');

totalPopulationEl.textContent = totalPopulation.toLocaleString(locale);

const avgPopulation = Math.round(totalPopulation / populations.length);
const avgPopulationEl = document.querySelector('.average-population');

avgPopulationEl.textContent = avgPopulation.toLocaleString('en-US');
