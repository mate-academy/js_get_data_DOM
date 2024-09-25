'use strict';

const population = document.querySelectorAll('span.population');

const total = [...population].reduce((acc, span) => {
  const value = parseFloat(span.textContent.replace(/,/g, ''));

  return isNaN(value) ? acc : acc + value;
}, 0);

const average = total / population.length;

const formattedTotal = total.toLocaleString();
const formattedAverage = average
  .toLocaleString(undefined, { maximumFractionDigits: 2 });

document.querySelector('span.average-population')
  .textContent = formattedAverage;
document.querySelector('span.total-population').textContent = formattedTotal;
