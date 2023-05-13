'use strict';

const populationArray = [...document.querySelectorAll('.population')];

const numberPopulation = populationArray.map(population =>
  +(population.textContent.split(',').join('')));

const totalPopulation = numberPopulation.reduce((total, amount) =>
  total + amount, 0);

const averagePopulation = totalPopulation / numberPopulation.length;

const totalPop = document.querySelector('.total-population');

totalPop.textContent = totalPopulation.toLocaleString('en');

const averagePop = document.querySelector('.average-population');

averagePop.textContent = averagePopulation.toLocaleString('en');
