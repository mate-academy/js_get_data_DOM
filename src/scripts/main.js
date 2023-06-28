'use strict';

// write your code here
const populations = document.getElementsByClassName('population');

const populationToArray = Array.from(populations);

const totalPopulation = populationToArray.map(pop =>
  Number(pop.textContent.replaceAll(',', ''))).reduce((start, toAdd) =>
  start + toAdd);

const htmlTotalPop = document.getElementsByClassName('total-population');

htmlTotalPop[0].textContent = totalPopulation.toLocaleString();

const populationAverage = totalPopulation / populations.length;

const popAve = document.getElementsByClassName('average-population');

popAve[0].textContent = populationAverage.toLocaleString();
