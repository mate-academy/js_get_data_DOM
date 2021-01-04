'use strict';

// write your code here
const population = document.querySelectorAll('.population');

const populationArr = [...population].map(num =>
  +(num.innerText.split(',').join('')));

const totalPopulation = populationArr.reduce((sum, element) =>
  (sum + element), 0);

const averagePopulation = totalPopulation / populationArr.length;

const totalPopulationSting = document.querySelector('.total-population');

totalPopulationSting.innerText = totalPopulation.toLocaleString();

const averageElementString = document.querySelector('.average-population');

averageElementString.innerHTML = averagePopulation.toLocaleString();
