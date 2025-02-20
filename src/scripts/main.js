'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map((span) => {
  return parseInt(span.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populations.reduce(
  (acc, population) => acc + population,
  0,
);

const averagePopulation = totalPopulation / populations.length;

const formatNumber = (number) => {
  return number.toLocaleString('en-US');
};

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);
