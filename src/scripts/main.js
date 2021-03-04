'use strict';

// write your code here

const allElementPopulation = document.getElementsByClassName('population');

const arrPopulation = [...allElementPopulation].map(
  item => item.innerText
);

const arrToNumber = arrPopulation.map(
  item => parseInt(item.split(',').join(''))
);

const totalPopulationNumber = arrToNumber.reduce(
  (prev, next) => prev + next
);

const avaragePopulationNumber = totalPopulationNumber / arrToNumber.length;

const avaragePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

avaragePopulation.innerHTML = avaragePopulationNumber.toLocaleString('en-US');
totalPopulation.innerHTML = totalPopulationNumber.toLocaleString('en-US');
