'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Get all population elements
  const populationElements = document.querySelectorAll('span.population');

  // Step 2: Convert population strings to numbers
  const populations = Array.from(populationElements).map((el) => {
    const number = Number(el.textContent.replace(/,/g, ''));

    return isNaN(number) ? 0 : number;
  });

  // Step 3: Calculate total and average
  const total = populations.reduce((sum, value) => sum + value, 0);
  const average = total / populations.length;

  // Step 4: Format with thousands separator
  const formatNumber = (num) => num.toLocaleString('en-US');

  // Step 5: Replace text content in respective spans
  const totalSpan = document.querySelector('span.total-population');
  const averageSpan = document.querySelector('span.average-population');

  if (totalSpan) {
    totalSpan.textContent = formatNumber(total);
  }

  if (averageSpan) {
    averageSpan.textContent = formatNumber(Math.round(average));
  }
});
