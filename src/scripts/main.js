'use strict';

const populationElements = document.querySelectorAll('span.population');

const populationNumbers = [];

populationElements.forEach((element) => {
  const textContent = element.textContent.trim().replace(/,/g, '');
  const number = parseInt(textContent, 10);

  if (!isNaN(number)) {
    populationNumbers.push(number);
  }
});

const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const totalPopulationElement = document.querySelector('span.total-population');
const averagePopulationElement = document.querySelector(
  'span.average-population',
);

totalPopulationElement.textContent = formatNumber(totalPopulation);
averagePopulationElement.textContent = formatNumber(averagePopulation);
