'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationList = [...population].map(
  item => +(item.innerText.split(',').join('')));

const total = populationList.reduce((sum, item) => sum + item, 0);
const average = total / populationList.length;

totalPopulation.textContent = total.toLocaleString('en');
averagePopulation.textContent = average.toLocaleString('en');
