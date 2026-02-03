'use strict';

/// 1. Get all population elements
const populationElements = document.querySelectorAll('.population');

// 2. Parse and validate numbers
const populations = [...populationElements]
  .map((el) => {
    const text = el.textContent.trim().replace(/,/g, '');

    return Number(text);
  })
  .filter((value) => Number.isFinite(value));

// 3. Calculate total
const total = populations.reduce((sum, value) => sum + value, 0);

// 4. Calculate average
const average = populations.length ? Math.round(total / populations.length) : 0;

// 5. Format numbers
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

// 6. Update DOM
document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
