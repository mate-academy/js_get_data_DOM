'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const total = populationElements.reduce((acc, current) => {
  return acc + Number(current.textContent.replaceAll(',', ''));
}, 0);

const average = Math.round(total / populationElements.length);

totalPopulationElement.textContent = total.toLocaleString('en-US');
averagePopulationElement.textContent = average.toLocaleString('en-US');
