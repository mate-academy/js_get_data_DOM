'use strict';

// write your code here

const populationSet = document.querySelectorAll('.population');

let totalCount = 0;

for (const countryPopulation of populationSet) {
  totalCount += +countryPopulation.textContent.split(',').join('');
}

const totalOutput = totalCount.toLocaleString('en');
const averageCount = totalCount / populationSet.length;
const averageOutput = averageCount.toLocaleString('en');

document.querySelector('.total-population').textContent = totalOutput;

document.querySelector('.average-population').textContent = averageOutput;
