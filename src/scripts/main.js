'use strict';

// write your code here
const getAAllPopulation = document.querySelectorAll('span.population');

const populations = [];

getAAllPopulation.forEach((element) => {
  const populationStr = element.textContent.trim();
  const populationNumber = parseInt(populationStr.replace(/,/g, ''), 10);

  populations.push(populationNumber);
});

const totalPopulation = populations.reduce((total, num) => total + num, 0);
const averagePopulation = totalPopulation / populations.length;

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const averagePopulationElement = document.querySelector(
  'span.average-population',
);
const totalPopulationElement = document.querySelector('span.total-population');

averagePopulationElement.textContent = formatNumber(
  Math.round(averagePopulation),
);
totalPopulationElement.textContent = formatNumber(totalPopulation);
