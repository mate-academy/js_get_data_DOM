'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('.population');
  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  const totalPopulation = [...populationSpans]
    .map(span => parseInt(span.textContent.replace(/,/g, '')))
    .filter(Number.isFinite)
    .reduce((total, population) => total + population, 0);

  const averagePopulation = totalPopulation / populationSpans.length;

  averageSpan.textContent = Math.round(averagePopulation)
    .toLocaleString('en-US');
  totalSpan.textContent = totalPopulation.toLocaleString('en-US');
});
