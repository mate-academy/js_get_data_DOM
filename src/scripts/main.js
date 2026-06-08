'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) => {
  const populationText = element.textContent;
  const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

  return populationNumber;
});

const totalPopulation = populations.reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / populations.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
