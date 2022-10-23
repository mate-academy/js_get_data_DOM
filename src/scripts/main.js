'use strict';

const populations = document.querySelectorAll('.population');
const populationNumbers = [...populations].map(population =>
  +population.innerText.split(',').join(''));

const totalValue = populationNumbers.reduce((a, b) => a + b, 0);
const averageValue = totalValue / populationNumbers.length;

document.querySelector('.total-population').innerHTML
  = totalValue.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
  = averageValue.toLocaleString('en-Us');
