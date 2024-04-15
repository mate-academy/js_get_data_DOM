'use strict';

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');
const populationByCountries = document.querySelectorAll('span.population');

function removeCommas(string) {
  return string.replaceAll(',', '');
}

function getTotalPopulation() {
  let total = 0;

  for (const countryPopulation of populationByCountries) {
    const data = countryPopulation.textContent.trim();
    const population = +parseInt(removeCommas(data));

    total += population;
  }

  return total.toLocaleString('en-US');
}

function getAveragePopulation() {
  const total = +removeCommas(getTotalPopulation());
  const countryAmount = populationByCountries.length;

  if (countryAmount === 0) {
    return 0;
  }

  const average = Math.round(total / countryAmount);

  return average.toLocaleString('en-US');
}

totalPopulation.textContent = getTotalPopulation();
averagePopulation.textContent = getAveragePopulation();
