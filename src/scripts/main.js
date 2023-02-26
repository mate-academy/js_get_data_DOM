'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPop = [...populationList].reduce((sum, pop) => (
  sum + +pop.innerText.split(',').join('')
), 0);
const averagePop = totalPop / populationList.length;

totalPopulation.innerText = totalPop.toLocaleString('en-US');
averagePopulation.innerText = averagePop.toLocaleString('en-US');
