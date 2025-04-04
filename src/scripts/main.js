'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = [...populations].reduce(
  (prev, current) => prev + +current.textContent.split(',').join(''),
  0,
);

const averagePopulation = totalPopulation / populations.length;

totalPopulationElement.textContent = numberWithCommas(totalPopulation);
averagePopulationElement.textContent = numberWithCommas(averagePopulation);

function numberWithCommas(x) {
  const parts = x.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}
