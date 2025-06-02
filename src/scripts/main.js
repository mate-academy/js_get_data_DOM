'use strict';

const populationSpans = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const numbers = Array.from(populationSpans).map(
  (span) => +span.textContent.replaceAll(',', ''),
);

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

totalSpan.textContent = formatNumber(total);
averageSpan.textContent = formatNumber(average);
