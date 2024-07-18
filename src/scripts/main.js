'use strict';

const populationArr = [...document.querySelectorAll('.population')].map(
  (element) => +element.innerText.split(',').join(''),
);

const totalPopulation = populationArr.reduce(
  (sum, population) => sum + population,
  0,
);

const avaragePopulation = totalPopulation / populationArr.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  avaragePopulation.toLocaleString('en-US');
