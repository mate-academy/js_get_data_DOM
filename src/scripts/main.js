'use strict';

// write your code here
const DataFromPopulationSpan = document
  .querySelectorAll('.population');
const DataFromTotalPopulationSpan = document
  .querySelector('.total-population');
const DataFromAveragePopulationSpan = document
  .querySelector('.average-population');

const totalPopulationData = [...DataFromPopulationSpan]
  .map(country => +country.innerHTML.split(',').join(''));

let totalPopulationSum = 0;

for (let i = 0; i < totalPopulationData.length; i++) {
  totalPopulationSum = totalPopulationSum + totalPopulationData[i];
}

const totalPopulationAverage = totalPopulationSum / totalPopulationData.length;

DataFromTotalPopulationSpan.innerHTML = totalPopulationSum
  .toLocaleString('en-US');

DataFromAveragePopulationSpan.innerHTML = totalPopulationAverage
  .toLocaleString('en-US');
