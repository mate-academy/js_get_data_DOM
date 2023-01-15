'use strict';

const population = document.querySelectorAll('.population');
const populationNumber = [...population].map(number =>
  +(number.innerHTML.split(',').join('')));

const sumTotalPopulation = populationNumber.reduce((sum, cur) => sum + cur, 0);

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.innerHTML = sumTotalPopulation / populationNumber.length;
totalPopulation.innerHTML = sumTotalPopulation;
