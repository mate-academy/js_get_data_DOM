'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [];

for (let i = 0; i < populationElements.length; i++) {
  const populationText = populationElements[i].textContent;

  const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

  populations.push(populationNumber);
}

let totalPopulation = 0;

for (let j = 0; j < populations.length; j++) {
  totalPopulation += populations[j];
}

const averagePopulation = Math.round(totalPopulation / populations.length);

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = averagePopulation.toLocaleString();
