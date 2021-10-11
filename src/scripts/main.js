'use strict';

const spanPopulation = document.querySelectorAll('.population');
const totalPopulationOfPeople = [...spanPopulation]
  .map(number => Number(number.innerText.replaceAll(',', '')))
  .reduce((a, b) => a + b, 0);

const averagePopulationOfPeople = totalPopulationOfPeople
  / spanPopulation.length;

document.querySelector('.total-population')
  .innerText = totalPopulationOfPeople.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerText = averagePopulationOfPeople.toLocaleString('en-US');
