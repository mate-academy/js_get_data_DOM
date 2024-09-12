'use strict';

const populationElements = document.querySelectorAll('.population');

const populationValues = Array.from(populationElements)
  .map(span => span.textContent.trim());

const parsedPopulations = populationValues.map(population => {
  const numericValue = parseInt(population.replace(/,/g, ''));

  return isNaN(numericValue) ? 0 : numericValue;
});

const totalPopulation = parsedPopulations.reduce(
  (total, population) => total + population, 0
);

const averagePopulation = totalPopulation / parsedPopulations.length;

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.textContent = formatNumberWithCommas(averagePopulation);

const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = formatNumberWithCommas(totalPopulation);

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
