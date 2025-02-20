'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = Array.from(populationSpans).map((span) => {
  const value = span.textContent.replace(/,/g, '');

  return Number(value);
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

function addThousandsSeparator(num) {
  return num.toLocaleString('en-US');
}

document.querySelector('span.average-population').textContent =
  addThousandsSeparator(averagePopulation);

document.querySelector('span.total-population').textContent =
  addThousandsSeparator(totalPopulation);
