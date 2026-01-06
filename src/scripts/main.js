'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map((span) => {
  const numberString = span.textContent.replace(/,/g, '');

  return Number(numberString);
});

const total = populations.reduce((sum, value) => sum + value, 0);

const average = Math.round(total / populations.length);

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
