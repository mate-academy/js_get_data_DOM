'use strict';

const populationArray = [...document.querySelectorAll('.population')];

const numbersOfPopulation = populationArray
  .map(population => Number(population.innerText.split(',').join('')));

const totalPopulation = numbersOfPopulation
  .reduce((sum, population) => sum + population, 0);

const averagePopulation = totalPopulation / numbersOfPopulation.length;

const average = document.querySelector('.average-population');

const total = document.querySelector('.total-population');

average.innerHTML = averagePopulation.toLocaleString('en-US');
total.innerHTML = totalPopulation.toLocaleString('en-US');
