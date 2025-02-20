'use strict';
// write your code here

const populationElement = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averegePopulationElement = document.querySelector('.average-population');

const population = Array.from(populationElement).map((el) => {
  const populationText = el.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationText, 10);

  return isNaN(populationNumber) ? 0 : populationNumber;
});

const totalPopulation = population.reduce((sum, value) => sum + value, 0);
const avereagePopulation = totalPopulation / population.length;

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averegePopulationElement.textContent =
  Math.round(avereagePopulation).toLocaleString('en-US');
