'use strict';

const population = [...document.querySelectorAll('.population')];
const toNumbers = population.map((element) => {
  return parseInt(element.textContent.replace(/,/g, ''));
});

const totalSum = toNumbers.reduce((sum, element) => sum + element, 0);
const average = Math.round(totalSum / toNumbers.length);

document.querySelector('.average-population').textContent =
  average.toLocaleString();

document.querySelector('.total-population').textContent =
  totalSum.toLocaleString();
