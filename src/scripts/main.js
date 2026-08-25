'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map(span => {
  const cleannumberString = span.textContent.replace(/\D/g, '');
  return Number(cleannumberString);
})

const total = populations.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populations.length);

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
