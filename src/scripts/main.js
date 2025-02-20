'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const populationText = element.textContent.trim();
  const populationNumber = parseFloat(populationText.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
  }
});

const averagePopulation = totalPopulation / populationElements.length;
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
