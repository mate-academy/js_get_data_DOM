'use strict';

const populations = document.querySelectorAll('.population');

const arrayOfPopulations = [...populations].map(
  population => +population.textContent.split(',').join(''));

const totalPopulation = arrayOfPopulations.reduce(
  (acc, population) => acc + population, 0);
const totalNumOfPopulation = document.querySelector('.total-population');

totalNumOfPopulation.textContent = totalPopulation.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');
const averageNumOfPopulation = totalPopulation / arrayOfPopulations.length;

averagePopulation.textContent = averageNumOfPopulation.toLocaleString('en-US');
