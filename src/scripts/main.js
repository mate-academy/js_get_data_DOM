'use strict';

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');
const populationByCountries = document.querySelectorAll('span.population');

function removeCommas(string) {
  return string.replaceAll(',', '');
}

function getTotalPopulation() {
  const total = [...populationByCountries].reduce((acc, country) => {
    const data = country.textContent.trim();

    return acc + Number(parseInt(removeCommas(data)));
  }, 0);

  return total.toLocaleString('en-US');
}

function getAveragePopulation() {
  const total = Number(removeCommas(getTotalPopulation()));
  const countryAmount = populationByCountries.length;

  if (countryAmount === 0) {
    return countryAmount;
  }

  const average = Math.round(total / countryAmount);

  return average.toLocaleString('en-US');
}

totalPopulation.textContent = getTotalPopulation();
averagePopulation.textContent = getAveragePopulation();
