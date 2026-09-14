'use strict';

const populationCountries = document.querySelectorAll('.population');
const populations = Array.from(populationCountries)
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter((value) => Number.isFinite(value));
const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = Math.round(average).toLocaleString();
totalSpan.textContent = total.toLocaleString();
