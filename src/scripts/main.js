'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans)
  .map((span) => {
    const cleanText = span.textContent.replace(/,/g, '').trim();
    const number = Number(cleanText);

    return isNaN(number) ? null : number;
  })
  .filter((num) => num !== null);

const total = populations.reduce((sum, val) => sum + val, 0);
const average = populations.length > 0 ? total / populations.length : 0;

const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
