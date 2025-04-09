'use strict';

// Select all population elements
const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
const populations = [];

// Parse and calculate total population
populationElements.forEach((el) => {
  // Remove commas and parse as number
  const population = parseInt(el.textContent.replace(/,/g, ''), 10);

  if (!isNaN(population)) {
    populations.push(population);
    totalPopulation += population;
  }
});

// Calculate average
const averagePopulation = totalPopulation / populations.length;

// Format numbers with thousands separator
const formatNumber = (num) => num.toLocaleString('en-US');

// Update total and average in the DOM
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

totalEl.textContent = formatNumber(totalPopulation);
averageEl.textContent = formatNumber(Math.round(averagePopulation));
