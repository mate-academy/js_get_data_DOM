'use strict';

// Get all text data from span.population
const populationSpans = document.querySelectorAll('span.population');

// Parse and filter only valid numbers
const parsedValues = Array.from(populationSpans, (span) => {
  const cleaned = span.textContent.replace(/,/g, '');
  const value = Number(cleaned);

  return Number.isFinite(value) ? value : null;
});

const validPopulations = parsedValues.filter((value) => value !== null);

// Calculate total and average (only with valid values)
const totalPopulation = validPopulations.reduce(
  (sum, current) => sum + current,
  0,
);

let averagePopulation = 0;

if (validPopulations.length > 0) {
  averagePopulation = totalPopulation / validPopulations.length;
}

// Format numbers with thousands separator
const formatNumber = (number) => number.toLocaleString();

// Replace "Calculate it!" with results
const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = formatNumber(Math.round(averagePopulation));
}

if (totalSpan) {
  totalSpan.textContent = formatNumber(totalPopulation);
}
