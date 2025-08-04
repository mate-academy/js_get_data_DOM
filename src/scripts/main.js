'use strict';

const spans = document.querySelectorAll('span.population');
const populationNumbers = Array.from(spans)
  .map((span) => span.textContent.replace(/,/g, '').trim())
  .filter((text) => !isNaN(text) && text !== '')
  .map(Number);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);

const average =
  populationNumbers.length > 0 ? total / populationNumbers.length : 0;

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const averageFormatted = formatter.format(Math.round(average));
const totalFormatted = formatter.format(total);

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = averageFormatted;
}

if (totalSpan) {
  totalSpan.textContent = totalFormatted;
}
