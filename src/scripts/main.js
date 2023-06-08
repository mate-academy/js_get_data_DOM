'use strict';

const population = document.querySelectorAll('.population');
const populationArr = [...population].map(item =>
  Number(item.innerText.split(',').join('')));

const total = populationArr.reduce((acc, item) => acc + item, 0);
const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.innerText = average.toLocaleString('en-US');
