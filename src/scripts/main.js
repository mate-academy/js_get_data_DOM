'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = [...document.querySelectorAll('.population')].map((el) => {
  return el.textContent.trim();
});

const numericValues = populations
  .map((el) => {
    const sanitized = el.replace(/[^0-9.-]/g, '');
    const num = Number(sanitized);

    return !isNaN(num) ? num : null;
  })
  .filter((num) => num !== null);

try {
  if (numericValues.length === 0) {
    throw new Error('No valid numeric population data found.');
  }
} catch (err) {
  totalPopulation.textContent = 'No valid data';
  averagePopulation.textContent = 'No valid data';
}

const sum = numericValues.reduce((acc, n) => acc + n, 0);
const average = sum / numericValues.length;

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulation.textContent = formatNumber(Math.round(sum));

averagePopulation.textContent = formatNumber(Math.round(average));
