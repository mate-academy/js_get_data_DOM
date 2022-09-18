'use strict';

const nation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const newNation = Array.from(nation, x =>
  Number(x.innerHTML.replace(/,/g, '')));

const total = newNation.reduce((sum, x) => sum + x);

totalPopulation.textContent = total.toLocaleString('en-ES');

averagePopulation.textContent = (total / newNation.length)
  .toLocaleString('en-ES');
