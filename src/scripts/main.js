'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationClass = document.querySelector('.total-population');
const averagePopulationClass = document.querySelector('.average-population');

const arrayPopulations = [...populations].map(one =>
  +one.textContent.split(',').reduce((x, y) => x + y,)
);

const totalPopulation = arrayPopulations.reduce((x, y) => x + y);
const averagePopulation = totalPopulation / arrayPopulations.length;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulationClass.textContent = numberWithCommas(totalPopulation);
averagePopulationClass.textContent = numberWithCommas(averagePopulation);
