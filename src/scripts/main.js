/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map(el => Number(el.textContent.replace(/,/g, '').trim()))
  .filter(num => !isNaN(num) && num > 0);

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

// eslint-disable-next-line max-len
document.querySelector('.total-population').textContent = formatNumber(totalPopulation);
document.querySelector('.average-population').textContent = formatNumber(Math.round(averagePopulation));
