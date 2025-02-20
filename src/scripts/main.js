'use strict';

const populationCells = document.querySelectorAll('.population');
const totalPopulationCell = document.querySelector('.total-population');
const averagePopulationCell = document.querySelector('.average-population');

let totalPopulation = 0;

populationCells.forEach((populationCell) => {
  const populationText = populationCell.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationText);

  totalPopulation += populationNumber;
});

const averagePopulation = totalPopulation / 10;

totalPopulationCell.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationCell.textContent = averagePopulation.toLocaleString('en-US');
