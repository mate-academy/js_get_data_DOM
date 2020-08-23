'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(item => +item.textContent.replace(/,/g, ''));

const total = populations.reduce(
  (prev, current) => prev + current, 0
);
const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en');

const average = (total / populations.length);
const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString('en');
