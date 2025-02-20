'use strict';

const root = document.body;

const populationsList = [ ...root.querySelectorAll('.population') ]
  .map(num => +num.innerHTML.split(',').join(''));

const totalPopulation = populationsList.reduce(
  (sum, popelation) => sum + popelation, 0
);
const averagePopulation = totalPopulation / populationsList.length;

const totalElement = root.querySelector('.total-population');
const avarageElement = root.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
avarageElement.textContent = averagePopulation.toLocaleString('en-US');
