'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsArray = [...populationList]
  .map(population => +(population.innerText.replace(/,/g, '')));

const total = populationsArray
  .reduce((sum, current) => sum + current, 0);

const average = Math.round(total / populationsArray.length);

const totalText = total.toLocaleString().replace(/(\s)/g, ',');
const avarageText = average.toLocaleString().replace(/(\s)/g, ',');

totalPopulation.innerText = totalText;
averagePopulation.innerText = avarageText;
