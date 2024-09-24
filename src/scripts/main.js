'use strict';

// write your code here
const populationsSpan = document.querySelectorAll('.population');

const populations = Array.from(populationsSpan).map(
  (span) => +span.textContent.replace(/,/g, '') || 0,
);

const totalPopulation = populations.reduce((total, num) => total + num, 0);
const averagePopulation = totalPopulation / populations.length;

function formatNumber(num) {
  return num.toLocaleString();
}

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

if (totalSpan) {
  totalSpan.textContent = formatNumber(totalPopulation);
}

if (averageSpan) {
  averageSpan.textContent = formatNumber(averagePopulation);
}
