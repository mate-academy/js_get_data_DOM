'use strict';

const populationsList = document.getElementsByClassName('population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationsArray = [...populationsList]
  .map(value => +value.textContent.split(',').join(''));

const totalPopopulation = populationsArray.reduce((sum, value) => sum + value);
const avgPopulation = totalPopopulation / populationsArray.length;

total.textContent = totalPopopulation.toLocaleString();
average.textContent = avgPopulation.toLocaleString();
