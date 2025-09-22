'use strict';

// Select all span elements with class 'population'
const populationSpans = document.querySelectorAll('.population');

// Convert population strings to numbers
const populations = Array.from(populationSpans).map((span) => {
  // Remove commas and spaces, then convert to number
  const num = Number(span.textContent.replace(/,/g, '').trim());

  return isNaN(num) ? 0 : num; // fallback to 0 if not a number
});

// Calculate total and average
const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
const averagePopulation = totalPopulation / populations.length;

// Format numbers with thousands separators
const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString(); // round average

// Update the HTML spans
document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
