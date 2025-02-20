/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable padding-line-between-statements */
'use strict';
const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements)
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter(num => !isNaN(num));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = Math.round(totalPopulation / populations.length);

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = averagePopulation.toLocaleString();

document.querySelector('span.average-population').textContent =
  formattedAverage;
document.querySelector('span.total-population').textContent = formattedTotal;
