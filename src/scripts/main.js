'use strict';

const populationCollection = document.querySelectorAll('.population');
const populationList = [...populationCollection]
  .map(item => +item.textContent.split(',').join(''));

const total = populationList.reduce((sum, item) => sum + item, 0);
const average = total / populationList.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString();
averagePopulation.innerText = average.toLocaleString();
