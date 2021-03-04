'use strict';

// write your code here

const allElementPopulation = document.querySelectorAll('.population');

const arrPopulation = [...allElementPopulation].map(
  item => parseInt(item.innerText.split(',').join(''))
);

const totalPopulationNumber = arrPopulation.reduce(
  (prev, next) => prev + next
);

const avaragePopulationNumber = totalPopulationNumber / arrPopulation.length;

const avaragePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

avaragePopulation.innerHTML = avaragePopulationNumber.toLocaleString('en-US');
totalPopulation.innerHTML = totalPopulationNumber.toLocaleString('en-US');
