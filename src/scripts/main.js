'use strict';

const elements = document.querySelectorAll('.population');

let totalPopulation = 0;

elements.forEach(el => {
  const population = Number(el.textContent.replace(/,/g, ''));
  totalPopulation += population;
})

let averagePopulation = Math.round(totalPopulation / elements.length);

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationElement.textContent = averagePopulation.toLocaleString('en-US');
