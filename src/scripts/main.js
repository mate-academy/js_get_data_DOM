'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const modifyPopulations = [...populations].map((item) => {
  return parseInt(item.textContent.replace(/,/g, ''));
});
const total = modifyPopulations.reduce((acc, item) => acc + item, 0);
const average = total / modifyPopulations.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
