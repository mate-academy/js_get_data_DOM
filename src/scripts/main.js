'use strict';

const populationSpans = document.querySelectorAll('span.population');
const populationNumbers = Array.from(populationSpans)
  .map((span) => parseInt(span.textContent.replace(/,/g, '')))
  .filter((value) => !isNaN(value));

const totalPopulation = populationNumbers.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const averagePopulationSpan = document.querySelector('span.average-population');
const totalPopulationSpan = document.querySelector('span.total-population');

if (averagePopulationSpan) {
  averagePopulationSpan.textContent = formatNumber(
    Math.round(averagePopulation),
  );
}

if (totalPopulationSpan) {
  totalPopulationSpan.textContent = formatNumber(totalPopulation);
}
