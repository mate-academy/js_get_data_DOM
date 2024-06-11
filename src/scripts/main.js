'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populationNumbers = Array.from(populationSpans).map((span) => {
  const number = parseInt(span.textContent.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const formattedTotal = formatNumber(totalPopulation);
const formattedAverage = formatNumber(averagePopulation.toFixed(2));

document.querySelector('span.average-population').textContent =
  formattedAverage;
document.querySelector('span.total-population').textContent = formattedTotal;
