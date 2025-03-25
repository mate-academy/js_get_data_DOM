'use strict';

const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements)
  .map((el) => parseInt(el.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

const averagePopulation = populations.length
  ? totalPopulation / populations.length
  : 0;

const formatNumber = (num) => num.toLocaleString();

const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');

if (totalElement) {
  totalElement.textContent = formatNumber(totalPopulation);
}

if (averageElement) {
  averageElement.textContent = formatNumber(Math.round(averagePopulation));
}
