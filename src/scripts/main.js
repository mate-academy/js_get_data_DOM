'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const AveragePopulationElement = document.querySelector('.average-population');

const populationTransform = [...populationList]
  .map(country => +country.textContent
    .split(',')
    .join(''));

const totalPopulation = populationTransform.reduce((a, b) => a + b)
const averagePopulation = totalPopulation / populationTransform.length

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
AveragePopulationElement.textContent = averagePopulation.toLocaleString('en-US');
