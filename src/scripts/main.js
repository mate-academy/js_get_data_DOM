'use strict';

const populationValues = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [...populationValues]
  .map(country => +country.innerText
    .split(',')
    .join(''))
  .reduce((a, b) => a + b, 0);

total.innerHTML = totalPopulation.toLocaleString();

average.innerHTML = (totalPopulation / populationValues.length)
  .toLocaleString();
