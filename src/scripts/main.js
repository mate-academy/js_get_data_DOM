'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populations.reduce(
  (total, population) => total + population,
  0,
);

const averagePopulation = totalPopulation / populations.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();

averagePopulationElement.textContent =
  Math.round(averagePopulation).toLocaleString();
