'use strict';

let total = 0;
let average = 0;

const numbers = [...document.querySelectorAll('span.population')];
const population = numbers.map((item) => {
  const parsed = Number(item.textContent.replace(/,/g, ''));

  return isNaN(parsed) ? 0 : parsed;
});

total = population.reduce((acc, num) => acc + num, 0);
average = population.length ? (total / population.length).toFixed(2) : '0.00';

const totalFormat = total.toLocaleString('en-US');
const averageFormat = Number(average).toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

document.querySelector('span.total-population').textContent = totalFormat;
document.querySelector('span.average-population').textContent = averageFormat;
