'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements].map((element) => {
  const cleanString = element.textContent.replace(/,/g, '');

  return Number(cleanString);
});

const total = populations.reduce((sum, current) => sum + current, 0);
const average = Math.round(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
