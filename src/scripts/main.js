'use strict';

const populationSpans = document.querySelectorAll('span.population');

const numbers = Array.from(populationSpans).map((span) => {
  const rawText = span.textContent;
  const number = parseInt(rawText.replace(/[^0-9]/g, ''), 10);

  return isNaN(number) ? 0 : number;
});

const total = numbers.reduce((sum, val) => sum + val, 0);
const average = numbers.length ? Math.round(total / numbers.length) : 0;

const formatNumber = (num) => num.toLocaleString();

const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');

if (totalElement) {
  totalElement.textContent = formatNumber(total);
}

if (averageElement) {
  averageElement.textContent = formatNumber(average);
}
