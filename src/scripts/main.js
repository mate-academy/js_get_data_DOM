'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements).map((span) => {
  const rawText = span.textContent.trim();
  const numericValue = Number(rawText.replace(/,/g, ''));

  return isNaN(numericValue) ? 0 : numericValue;
});

const total = population.reduce((sum, value) => sum + value, 0);
const average = total / population.length;

const formatter = new Intl.NumberFormat('en-US');

document.querySelector('.total-population').textContent =
  formatter.format(total);

document.querySelector('.average-population').textContent =
  formatter.format(average);
