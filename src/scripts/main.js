'use strict';

const populationElemens = document.querySelectorAll('.population');
const numbers = [...populationElemens].map(item => item.innerText)
  .map(elem => +elem.split(',').join(''));

const total = numbers.reduce((sum, current) => sum + current, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString('en-US');
