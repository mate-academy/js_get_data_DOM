'use strict';

const populationsEls = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

const populations = [...populationsEls]
  .map(elem => +elem.innerText.split(',').join(''));
const total = populations.reduce((acc, curr) => acc + curr, 0);
const average = total / populations.length;

totalPopulationEl.textContent = total.toLocaleString('en-US');
averagePopulationEl.textContent = average.toLocaleString('en-US');
