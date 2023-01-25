'use strict';

const list = document.querySelectorAll('.population');
const populations = [...list]
  .map(item => Number(item.outerText.split(',').join('')));
const total = populations.reduce((sum, curr) => sum + curr, 0);
const average = total / populations.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.outerText = total.toLocaleString('en-US');
averagePopulation.outerText = average.toLocaleString('en-US');
