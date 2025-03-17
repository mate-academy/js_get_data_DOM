'use strict';

const populations = document.querySelectorAll('.population');
const numberOfPopulation = [...populations].map(number =>
  +number.innerText
    .split(',')
    .join('')
);

const totalValue = numberOfPopulation.reduce((sum, n) => sum + n, 0);
const averageValue = totalValue / 10;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = totalValue.toLocaleString('en-US');
averagePopulation.innerText = averageValue.toLocaleString('en-US');
