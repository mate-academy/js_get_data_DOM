'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = [...countriesPopulation]
  .map(number => parseInt(number.innerText.split(',').join('')));

const total = numbers.reduce((sum, num) => sum + num);

totalPopulation.innerText = total.toLocaleString();

averagePopulation.innerText = (total / numbers.length).toLocaleString();
