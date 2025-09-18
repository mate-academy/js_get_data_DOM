'use strict';

const populationSpans = document.querySelectorAll('span.population');

const parsedValues = Array.from(populationSpans, (span) => {
  const cleaned = span.textContent.replace(/,/g, '');
  const value = Number(cleaned);

  return Number.isFinite(value) ? value : null;
});

const validPopulations = parsedValues.filter((value) => value !== null);
const totalPopulation = validPopulations.reduce(
  (sum, current) => sum + current,
  0,
);

let averagePopulation = 0;

if (validPopulations.length > 0) {
  averagePopulation = totalPopulation / validPopulations.length;
}

const formatNumber = (number) => number.toLocaleString();

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = formatNumber(Math.round(averagePopulation));
}

if (totalSpan) {
  totalSpan.textContent = formatNumber(totalPopulation);
}