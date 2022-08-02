'use strict';

const populations = document.querySelectorAll('.population');

const populationsToArray = [...populations].map(population =>
  population.innerText);

const populationsConverted = populationsToArray.map(population =>
  population.split(',').join(''));

const total = populationsConverted.reduce((previous, sum) =>
  Number(previous) + Number(sum), 0);

const average = total / populationsConverted.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = average.toLocaleString('en-US');
