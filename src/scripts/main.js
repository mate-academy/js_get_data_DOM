'use strict';

const populationList = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const popultaionListValue = populationList.map(country => {
  return Number(country.innerText.split(',').join(''));
});

const totalPopulation = popultaionListValue
  .reduce((total, popultaionValue) => total + popultaionValue, 0);
const averagePopulation = totalPopulation / populationList.length;

totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');
averagePopulationElement.innerText = averagePopulation.toLocaleString('en-US');
