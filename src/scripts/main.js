'use strict';

let populationsSum = 0;
let entries = 0;

document.querySelectorAll('.population').forEach((span) => {
  const number = Number(span.textContent.replace(/,/g, ''));

  populationsSum += number;
  entries++;
});

const averagePopulation = Math.round(populationsSum / entries);

document.querySelector('.total-population').textContent =
  populationsSum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
