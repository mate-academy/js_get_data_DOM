'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = [...populations].reduce(
  (accumulator, nextPopulation) => {
    return accumulator + Number(nextPopulation.textContent.replace(/,/g, ''));
  }, 0);

const averagePopulation = totalPopulation / populations.length;

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
