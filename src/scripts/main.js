'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArray = [...population].map(countryPopulation =>
  Number.parseInt(countryPopulation.innerHTML.split(',').join('')));
let totalPopulationValue = populationArray.reduce((sum, currentValue) =>
  sum + currentValue);
let averagePopulationValue = totalPopulationValue / populationArray.length;
let totalPopulationArray = [];
let averagePopulationArray = [];

totalPopulationValue = totalPopulationValue.toString().split('');

let separatorCount = 0;

for (let i = totalPopulationValue.length - 1; i >= 0; i--) {
  let separatorString = (separatorCount % 3) ? '' : ',';

  if (separatorCount === 0) {
    separatorString = '';
  }
  separatorCount++;

  totalPopulationArray[i] = totalPopulationValue[i] + separatorString;
};
separatorCount = 0;
averagePopulationValue = averagePopulationValue.toString().split('');

for (let i = averagePopulationValue.length - 1; i >= 0; i--) {
  let separatorString = (separatorCount % 3) ? '' : ',';

  if (separatorCount === 0) {
    separatorString = '';
  }
  separatorCount++;

  averagePopulationArray[i] = averagePopulationValue[i] + separatorString;
};
averagePopulationArray = averagePopulationArray.join('');
totalPopulationArray = totalPopulationArray.join('');
totalPopulation.innerText = totalPopulationArray;
averagePopulation.innerText = averagePopulationArray;
