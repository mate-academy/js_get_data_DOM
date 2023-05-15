'use strict';

const populationInfo = document.querySelectorAll('.population');
const arrOfStatistics = [...populationInfo]
  .map(value => +value.textContent.replaceAll(',', ''));
const totalSum = arrOfStatistics.reduce((sum, x) => sum + x, 0);
const averageValue = (totalSum / arrOfStatistics.length);

document.querySelector('.total-population')
  .textContent = totalSum.toLocaleString('en-us');

document.querySelector('.average-population')
  .textContent = averageValue.toLocaleString('en-US');
