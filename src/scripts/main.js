'use strict';

const populationList = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationNumbers = [...populationList].map(el =>
  Number(el.innerText.split(',').join('')));

const totalPopulation = populationNumbers.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationNumbers.length;

total.innerText = totalPopulation.toLocaleString('en-US');
average.innerText = averagePopulation.toLocaleString('en-US');
