'use strict';

const populationElements = document.querySelectorAll('span.population');

const populationNumbers = Array.from(populationElements).map((el) => {
  const number = parseInt(el.textContent.replace(/,/g, ''), 10);

  return isNaN(number) ? 0 : number;
});

const totalPopulation = populationNumbers.reduce((sum, num) => sum + num, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('span.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('span.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
