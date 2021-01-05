'use strict';

const list = document.querySelectorAll('.population');
const total = [...list]
  .map(element => Number(element.innerHTML.replace(/,/g, '')))
  .reduce((acc, population) => acc + population, 0);
const average = total / [...list].length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
