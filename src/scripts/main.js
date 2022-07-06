'use strict';

const items = document.querySelectorAll('.population');
const populations = [...items]
  .map(item => Number(item.innerText.split(',').join('')));
const totalPopulations = populations.reduce((previousValue, currentValue) =>
  previousValue + currentValue, 0);
const averagePopulations = totalPopulations / populations.length;

document.querySelector('.total-population')
  .innerText = totalPopulations.toLocaleString();

document.querySelector('.average-population')
  .innerText = averagePopulations.toLocaleString();
