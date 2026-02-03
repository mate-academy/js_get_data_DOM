'use strict';

// write your code here
// 1. Get all population spans
const populationElements = document.querySelectorAll('.population');

// 2. Convert text to numbers
const populations = [...populationElements].map((el) => {
  const text = el.textContent.trim();

  return Number(text.replace(/,/g, ''));
});

// 3. Calculate total
const total = populations.reduce((sum, value) => sum + value, 0);

// 4. Calculate average
const average = Math.round(total / populations.length);

// 5. Format numbers with thousands separator
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

// 6. Insert results into DOM
document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
