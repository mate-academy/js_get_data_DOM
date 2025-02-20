'use strict';

function formatNumber(num) {
  const parts = num.toString().split('.');

  parts[0] = parts[0]
    .split('')
    .reverse()
    .map((digit, index) => (index > 0 && index % 3 === 0 ? digit + ',' : digit))
    .reverse()
    .join('');

  return parts.join(',');
}

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => {
    const value = el.textContent.split(',').join('');

    return Number(value);
  })
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

const formattedTotal = formatNumber(totalPopulation);
const formattedAverage = formatNumber(Math.round(averagePopulation));

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
