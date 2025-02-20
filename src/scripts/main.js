'use strict';

// write your code here

const populationSpans = document.querySelectorAll('span.population');

const populations = [];

populationSpans.forEach((span) => {
  const population = parseInt(span.textContent.replace(/,/g, ''));

  if (!isNaN(population)) {
    populations.push(population);
  }
});

const totalPopulation = populations.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / populations.length;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

if (averageSpan) {
  averageSpan.textContent = formatNumber(averagePopulation);
}

if (totalSpan) {
  totalSpan.textContent = formatNumber(totalPopulation);
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
