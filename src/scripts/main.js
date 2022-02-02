'use strict';

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

const totalPopulationNumber = [...population]
  .map(number => +number.innerText.split(',').join(''))
  .reduce((a, b) => a + b);

const avaragePopulationNumber = totalPopulationNumber / population.length;

totalPopulation.textContent = numberWithCommas(totalPopulationNumber);
avaragePopulation.textContent = numberWithCommas(avaragePopulationNumber);
