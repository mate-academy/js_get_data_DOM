'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans)
  .map((span) => {
    const raw = span.textContent.trim();

    const cleaned = raw.replace(/[^\d]/g, '');

    const number = parseInt(cleaned, 10);

    return isNaN(number) ? null : number;
  })
  .filter((num) => num !== null);

const total = populations.reduce((sum, value) => sum + value, 0);
const average = Math.round(total / populations.length);

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

document.querySelector('.average-population').textContent = formattedAverage;
document.querySelector('.total-population').textContent = formattedTotal;
