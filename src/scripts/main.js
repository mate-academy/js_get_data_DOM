'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = [];

for (const span of populationSpans) {
  const number = Number(span.textContent.replace(/,/g, ''));

  populations.push(number);
}

const total = populations.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populations.length);

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent =
  formatNumber(average);
