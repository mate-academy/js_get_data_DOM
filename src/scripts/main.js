'use strict';

const populationSpans = document.querySelectorAll('.population');
const populations = Array.from(populationSpans).map((span) => {
  const numStr = span.textContent.replace(/,/g, '');
  const num = parseInt(numStr, 10);

  return isNaN(num) ? 0 : num;
});

const totalPopulation = populations.reduce((sum, val) => sum + val, 0);
const averagePopulation = totalPopulation / populations.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
