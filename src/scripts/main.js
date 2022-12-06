'use strict';

const textFromPopulation = document.querySelectorAll('.population');
const numberOfPopulation = [...textFromPopulation].map(number =>
  Number(number.innerHTML.split(',').join('')));

const totalSumPopulation = numberOfPopulation.reduce((sum, value) =>
  sum + value);

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.innerHTML = (totalSumPopulation
  / numberOfPopulation.length).toLocaleString('en-US');
totalPopulation.innerHTML = totalSumPopulation.toLocaleString('en-US');
