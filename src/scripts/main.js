'use strict';

const populationElements = document.querySelectorAll('span.population');

function cleanPopulationText(text) {
  return text.replace(/[\s\u00A0,.]/g, '');
}

const populations = Array.from(populationElements)
  .map((el) => Number(cleanPopulationText(el.textContent)))
  .filter((num) => !Number.isNaN(num) && num > 0);

const validCount = populations.length;
const total = validCount > 0 ? populations.reduce((a, b) => a + b, 0) : 0;
const average = validCount > 0 ? Math.round(total / validCount) : 0;

const formatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
});

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

if (totalEl) {
  totalEl.textContent = formatter.format(total);
}

if (averageEl) {
  averageEl.textContent = formatter.format(average);
}
