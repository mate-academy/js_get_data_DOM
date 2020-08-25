'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationArray = [...populationList]
  .map(item => +item.textContent
    .split(',')
    .join(''));

const resultTotal = populationArray.reduce((a, b) => a + b);
const resultAvg = resultTotal / populationArray.length;

totalPopulation.textContent = resultTotal.toLocaleString('en-US');
averagePopulation.textContent = resultAvg.toLocaleString('en-US');
