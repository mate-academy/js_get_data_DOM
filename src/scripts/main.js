'use strict';

const populationElements = document.querySelectorAll('.population');
const totalOutput = document.querySelector('.total-population');
const averageOutput = document.querySelector('.average-population');

const populations = Array.from(populationElements).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = populations.reduce((acum, curr) => acum + curr, 0);

const average = Math.round(total / populations.length);

totalOutput.textContent = total.toLocaleString();
averageOutput.textContent = average.toLocaleString();
