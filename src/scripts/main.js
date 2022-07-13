'use strict';

const items = [...document.querySelectorAll('.population')].map(item => {
  return item.innerText.replaceAll(',', '');
});

const totalPopulation = items.reduce((prevValue, currentValue) => {
  return Number(prevValue) + Number(currentValue);
});
const averagaPopulation = totalPopulation / items.length;

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.innerText = averagaPopulation.toLocaleString('en-US');
