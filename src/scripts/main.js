'use strict';

// Get all population elements
const populationSpans = document.querySelectorAll('.population');

// Convert text values to numbers
const populations = [];

populationSpans.forEach((span) => {
  const value = span.textContent.replace(/,/g, '');

  if (!isNaN(value) && value !== '') {
    populations.push(Number(value));
  }
});

// Calculate total population
const total = populations.reduce((sum, num) => sum + num, 0);

// Calculate average population
const average = populations.length ? total / populations.length : 0;

// Format numbers with thousands separator
const formattedTotal = Math.round(total).toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

// Insert calculated values into the DOM
document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
