'use strict';

// Select all population span elements
const populationSpans = document.querySelectorAll('.population');

// Convert the text content to numbers
const populations = Array.from(populationSpans).map((span) => {
  // Remove commas and convert to number
  const num = parseInt(span.textContent.replace(/,/g, ''), 10);

  return isNaN(num) ? 0 : num; // fallback to 0 if invalid
});

// Calculate total
const total = populations.reduce((sum, value) => sum + value, 0);

// Calculate average
const average = total / populations.length;

// Format numbers with commas
const formatNumber = (num) => num.toLocaleString('en-US');

// Update HTML spans
const totalEl = document.querySelector('.total-population');

if (totalEl) {
  totalEl.textContent = formatNumber(total);
}

const averageEl = document.querySelector('.average-population');

if (averageEl) {
  averageEl.textContent = formatNumber(Math.round(average));
}
