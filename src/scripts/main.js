'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const totalPopulation = populationElements.reduce((acc, elem) => {
  return acc + +elem.textContent.split(',').join('');
}, 0);

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');

totalElement.textContent = formattedTotalPopulation;

const averagePopulation = totalPopulation / populationElements.length;
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

averageElement.textContent = formattedAveragePopulation;
