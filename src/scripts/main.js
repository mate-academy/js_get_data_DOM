'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArr = [...population].map(amount =>
  +(amount.innerHTML.split(',').join('')));
const sum = populationArr.reduce((x, y) => x + y);
const average = sum / populationArr.length;

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
