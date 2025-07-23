'use strict';

const populationSpans = document.querySelectorAll('.population');
const population = Array.from(populationSpans).map((span) => {
  const numberString = span.textContent.replace(/,/g, '');

  return Number(numberString);
});

const total = population.reduce((sum, num) => sum + num, 0);
const average = total / population.length;
const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
