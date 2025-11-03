'use strict';

const populationElements = document.querySelectorAll('span.population');

const populationNumbers = Array.from(populationElements).map((element) => {
  const rawString = element.textContent;
  const cleanedString = rawString.replace(/,/g, '');

  return !isNaN(+cleanedString) ? +cleanedString : 0;
});

const totalPopulation = populationNumbers.reduce((sum, currentPopulation) => {
  return sum + currentPopulation;
}, 0);

const averagePopulation = Math.round(
  totalPopulation / populationNumbers.length,
);

const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

averageElement.textContent = averagePopulation.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});
