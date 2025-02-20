'use strict';

// write your code here
const populationList = [...document.querySelectorAll('.population')].map(
  (el) => {
    return parseInt(el.textContent.split(',').join(''));
  },
);

const totatPopulation = populationList.reduce((sum, value) => {
  return sum + value;
}, 0);
const averagePopulation = totatPopulation / populationList.length;

document.querySelector('.total-population').textContent =
  totatPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();
