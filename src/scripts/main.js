'use strict';

const populations = document.querySelectorAll('span.population');
let totalPopulation = 0;
let populationsCount = 0;
let separator = '';

for (const population of populations) {
  const text = population.textContent;

  if (text.includes(',')) {
    separator = ',';
  } else if (text.includes('.')) {
    separator = '.';
  } else if (text.includes(' ')) {
    separator = ' ';
  }

  const cleaned = separator
    ? text.split(separator).join('').trim()
    : text.trim();
  const value = Number(cleaned);

  if (Number.isFinite(value)) {
    totalPopulation += value;
    populationsCount++;
  }
}

document.querySelector('.total-population').textContent = totalPopulation
  .toLocaleString('en-US')
  .replace(/,/g, separator);

const averageEl = document.querySelector('.average-population');

if (populationsCount > 0) {
  const averagePopulation = totalPopulation / populationsCount;

  averageEl.textContent = Math.round(averagePopulation).toLocaleString('en-US');
} else {
  averageEl.textContent = String(0)
    .toLocaleString('en-US')
    .replace(/,/g, separator);
}
