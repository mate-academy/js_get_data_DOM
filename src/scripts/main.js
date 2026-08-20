'use strict';

const array = document.querySelectorAll('.population');

const totalPopulation = Array.from(array).reduce(
  (acc, span) => acc + parseFloat(span.textContent.replaceAll(',', '')),
  0,
);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = Math.round(
  totalPopulation / array.length,
).toLocaleString('en-US');
