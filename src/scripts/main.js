'use strict';

const populationList = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const populationArray = [];

for (const populationItem of populationList) {
  const populationValue = populationItem.textContent.split(',').join('');

  populationArray.push(populationValue);
}

const sumPopNum = populationArray.reduce((sum, population) => {
  return sum + Number(population);
}, 0);

const averagePopNum = sumPopNum / populationArray.length;

totalPopulation.textContent = sumPopNum.toLocaleString('en-US');

averagePopulation.textContent = averagePopNum.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
