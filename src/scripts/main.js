'use strict';

const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements).map((el) => {
  const populationText = el.textContent.replace(/\s+/g, '').replace(/,/g, '');
  const populationValue = Number(populationText);

  return populationValue;
});

const total = populations.reduce((acc, curr) => acc + curr, 0);
const average = total / populations.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
