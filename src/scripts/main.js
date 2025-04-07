'use strict';

const elements = document.querySelectorAll('.population');

const populations = Array.from(elements).map((span) => {
  return parseInt(span.textContent.replace(/,/g, ''), 10);
});

const total = populations
  .reduce((sum, element) => sum + element, 0)
  .toLocaleString();

const average = Math.floor(
  parseInt(total.replace(/,/g, ''), 10) / elements.length,
).toLocaleString();

const classTotal = document.querySelector('.total-population');

classTotal.textContent = total;

const classAverage = document.querySelector('.average-population');

classAverage.textContent = average;
