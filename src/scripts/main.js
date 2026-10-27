'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = Array.from(populationSpans).map((span) => {
  const rawText = span.textContent.replace(/,/g, '').trim();
  const number = Number(rawText);

  return !isNaN(number) ? number : 0;
});

const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populations.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

if (totalSpan) {
  totalSpan.textContent = totalPopulation.toLocaleString('en-US');
}

if (averageSpan) {
  averageSpan.textContent =
    Math.round(averagePopulation).toLocaleString('en-US');
}
