'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''), 10);

  totalPopulation += population;
});

const averagePopulation = Math.round(
  totalPopulation / populationElements.length,
);

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
