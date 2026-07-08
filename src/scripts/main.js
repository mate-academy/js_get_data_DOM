'use strict';

const populations = document.querySelectorAll('.population');

let totalPopulation = 0;

populations.forEach((population) => {
  const populationNumber = Number(population.textContent.replaceAll(',', ''));

  totalPopulation += populationNumber;
});

const averagePopulation = totalPopulation / populations.length;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = averagePopulation.toLocaleString();

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
