'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPoputation = [...populations].reduce((previous, nextAmount) => {
  const number = Number(nextAmount.textContent.replace(/,/g, ''));

  return previous + number;
}, 0);

const averagePopulation = totalPoputation / populations.length;

totalPopulationElement.textContent = totalPoputation;
averagePopulationElement.textContent = averagePopulation;
