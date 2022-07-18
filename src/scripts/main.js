'use strict';

const populationItems = document.querySelectorAll('.population');
const totalPopulationItem = document.querySelector('.total-population');
const averagePopulationItem = document.querySelector('.average-population');

const populations = [...populationItems].map(
  item => Number(item.textContent.replace(/,/gi, ''))
);
const total = populations.reduce((a, b) => a + b, 0);
const average = total / populations.length;

totalPopulationItem.textContent = total.toLocaleString('en-US');
averagePopulationItem.textContent = average.toLocaleString('en-US');
