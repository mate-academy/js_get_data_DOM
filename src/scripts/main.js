'use strict';

const propulations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

let totalPopulationNumber = 0;

for (const num of propulations) {
  totalPopulationNumber += +num.textContent.split(',').join('');
}

const avarageValue = totalPopulationNumber / propulations.length;

totalPopulation.innerHTML = totalPopulationNumber;
avaragePopulation.innerHTML = avarageValue;
