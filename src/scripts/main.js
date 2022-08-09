'use strict';

const allPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = [...allPopulation].map(
  item => +(item.innerText.split(',').join(''))
);

const total = populations.reduce((a, b) => a + b, 0);
const average = total / populations.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
