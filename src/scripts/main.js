'use strict';

const population = document.querySelectorAll('.population');
const populationData = [...population].map(item => (
  parseInt(item.innerText.split(',').join('')))
);
const populationSum = populationData.reduce((sum, item) => sum + item, 0);
const populationAverage = populationSum / populationData.length;

const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

totalPopulationElem.textContent = populationSum.toLocaleString('en-US');
averagePopulationElem.textContent = populationAverage.toLocaleString('en-US');
