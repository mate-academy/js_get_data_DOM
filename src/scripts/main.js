'use strict';

const population = document.querySelectorAll('.population');

const populationNumbers = [...population]
  .map(item => +(item.innerText.replaceAll(',', '')));

const total = populationNumbers.reduce((a, b) => a + b, 0);

const average = total / populationNumbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = `${total.toLocaleString('en-US')}`;
averagePopulation.textContent = `${average.toLocaleString('en-US')}`;
