'use strict';

const populations = [...document.body.querySelectorAll('.population')].map(
  population => Number(population.textContent.split(',').join(''))
);

const totalValue = populations.reduce((a, b) => a + b);
const averageValue = totalValue / populations.length;

const totalSelector = document.body.querySelector('.total-population');

totalSelector.textContent = totalValue.toLocaleString('en-US');

const averageSelector = document.body.querySelector('.average-population');

averageSelector.textContent = averageValue.toLocaleString('en-US');
