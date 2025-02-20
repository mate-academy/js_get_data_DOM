'use strict';

const populations = document.querySelectorAll('.population');
const averagePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

let total = 0;
let counties = 0;

for (const population of populations) {
  const value = population.innerHTML.split(',').join('');

  total += parseInt(value);
  counties++;
}

const avarage = Math.floor(total / counties);

averagePopulationElement.innerHTML = avarage.toLocaleString('en-US');
totalPopulationElement.innerHTML = total.toLocaleString('en-US');
