'use strict';

const population = document.querySelectorAll('.population');
const populationList = [...population].map(num =>
  +num.innerHTML.split(',').join(''));

const totalPopulation = populationList.reduce((a, b) => a + b, 0);
const avaragePopulation = totalPopulation / populationList.length;

const totalElement = document.querySelector('.total-population');
const avarageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
avarageElement.textContent = avaragePopulation.toLocaleString('en-US');
