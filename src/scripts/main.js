/* eslint-disable no-console */
'use strict';

let totalPopulation = 0;
let averagePopulation = 0;

function thousandsSeperator(number) {
  const numberWithCommas
   = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return numberWithCommas;
}

const totalPopulationBlock = document.querySelector('.total-population');

const averagePopulationBlock = document.querySelector('.average-population');

const populations = document.querySelectorAll('.population');

populations.forEach(population => {
  const count = population.textContent.split(',').join('');

  totalPopulation += +count;
});

console.log(populations);

averagePopulation = totalPopulation / populations.length;

totalPopulationBlock.textContent = thousandsSeperator(totalPopulation);

averagePopulationBlock.textContent = thousandsSeperator(averagePopulation);

console.log([...populations]);
