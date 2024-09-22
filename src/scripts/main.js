'use strict';

const populations = document.querySelectorAll('.population');

const arrayOfPopulations = Array.from(populations).map((population) => {
  return Number(population.textContent.replaceAll(',', ''));
});

const totalPopulation = arrayOfPopulations.reduce((acc, num) => acc + num, 0);
const averagePopulation = totalPopulation / arrayOfPopulations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
