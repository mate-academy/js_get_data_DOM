'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationInNumbers = [...population].map(value => {
  return Number(value.textContent
    .split(',')
    .join(''));
});

const totalValue = populationInNumbers
  .reduce((acc, value) => acc + value, 0);
const averageValue = totalValue / populationInNumbers.length;

totalPopulation.textContent = totalValue.toLocaleString();
averagePopulation.textContent = averageValue.toLocaleString();
