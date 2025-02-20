'use strict';

const populationCountry = [...document.querySelectorAll('span.population')];

const populationCountryArray = [];

populationCountry.forEach((country) => {
  const populationNumber = parseFloat(country.textContent.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    populationCountryArray.push(populationNumber);
  }
});

const totalPopulation = populationCountryArray.reduce(
  (accumulator, current) => {
    return accumulator + current;
  },
  0,
);

const averagePopulation = totalPopulation / populationCountryArray.length;

function addCommas(number) {
  return number.toLocaleString('en-US');
}

document.querySelector('span.total-population').textContent =
  addCommas(totalPopulation);

document.querySelector('span.average-population').textContent =
  addCommas(averagePopulation);
