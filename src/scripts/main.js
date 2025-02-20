'use strict';

function parsePopulation(populationString) {
  const cleanedString = populationString.replace(/,/g, '').trim();

  const number = Number(cleanedString);

  return isNaN(number) ? null : number;
}

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
const numbers = [];

populationElements.forEach((element) => {
  const populationText = element.textContent;
  const populationNumber = parsePopulation(populationText);

  if (populationNumber !== null) {
    numbers.push(populationNumber);
    totalPopulation += populationNumber;
  }
});

const numberOfCountries = numbers.length;
const averagePopulation =
  totalPopulation > 0 ? totalPopulation / numberOfCountries : 0;

function formatNumber(number) {
  return number.toLocaleString();
}

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
