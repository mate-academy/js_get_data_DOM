'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map(function (element) {
  return Number(element.textContent.replace(/,/g, ''));
});

const total = populations.reduce((sum, population) => sum + population, 0);

const average = Math.round(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
