'use strict';

const population = document.querySelectorAll('.population');

const populationToNumber = [...population]
  .map(item => Number(item.innerHTML.split(',').join('')));

const totalPopulation = populationToNumber
  .reduce((prevValue, nextValue) => prevValue + nextValue, 0);

const averagePopulation = totalPopulation / populationToNumber.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString();
average.textContent = averagePopulation.toLocaleString();

// write your code here
