'use strict';

let populationsList = document.getElementsByClassName('population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

populationsList = [...populationsList]
  .map(value => +value.textContent.split(',').join(''));

const totalPopopulation = populationsList.reduce((sum, value) => sum + value);
const avgPopulation = totalPopopulation / populationsList.length;

total.textContent = totalPopopulation.toLocaleString();
average.textContent = avgPopulation.toLocaleString();
