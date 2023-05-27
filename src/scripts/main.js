'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map(element => {
  const populationText = element.textContent.replace(/,/g, '');

  return parseInt(populationText);
});

const totalPopulation = populations
  .reduce((total, population) => total + population, 0);

const averagePopulation = totalPopulation / populations.length;

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

const formattedTotalPopulation = formatNumberWithCommas(totalPopulation);
const formattedAveragePopulation = formatNumberWithCommas(averagePopulation);

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formattedTotalPopulation;
averagePopulationElement.textContent = formattedAveragePopulation;
