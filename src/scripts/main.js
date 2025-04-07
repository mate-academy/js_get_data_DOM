'use strict';

const populationsCollection = document.querySelectorAll('.population');
const populationsList = Array.from(populationsCollection).map((element) => {
  const populationNum = +element.textContent.split(',').join('');

  return populationNum;
});

const totalPopulation = populationsList.reduce((sum, value) => sum + value, 0);
const averagePopulation = Math.round(totalPopulation / populationsList.length);

const formatedTotal = totalPopulation.toLocaleString('en-US');
const formatedAverage = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatedTotal;
document.querySelector('.average-population').textContent = formatedAverage;
