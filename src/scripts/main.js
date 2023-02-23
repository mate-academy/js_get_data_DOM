'use strict';

const populationList = [...document.querySelectorAll('.population')]
  .map(item => parseFloat(item.innerText.split(',').join('')));

let sumPopulation = populationList.reduce((sum, item) => sum + item);

const averagePopulation = (sumPopulation / populationList.length)
  .toLocaleString('en-US');

sumPopulation = sumPopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = sumPopulation;

document.querySelector('.average-population').innerHTML = averagePopulation;
