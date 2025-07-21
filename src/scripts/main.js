'use strict';

// write your code here
const allElementSpan = document.querySelectorAll('.population');

const populationInfo = [...allElementSpan]
  .map((span) => span.textContent.replace(/[^0-9]/g, ''))
  .map((num) => Number(num));

const validPopulations = populationInfo.filter((onlyNum) => !isNaN(onlyNum));

const sum = validPopulations.reduce((a, b) => a + b, 0);
const average = sum / validPopulations.length;

const formatter = new Intl.NumberFormat();

document.querySelector('.total-population').textContent = formatter.format(sum);

document.querySelector('.average-population').textContent = formatter.format(
  Math.round(average),
);
