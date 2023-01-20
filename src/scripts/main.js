'use strict';

// write your code here
const populationArray = [...document.querySelectorAll('.population')];

const totalPopulation = populationArray.reduce(
  (acc, p) =>
    isNaN(parseInt(p.textContent.replace(/,/g, '')))
      ? 0
      : acc + parseInt(p.textContent.replace(/,/g, '')),
  0
);
const averagePopulation = totalPopulation / populationArray.length;

document.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString();

document.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString();
