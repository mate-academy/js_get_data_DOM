'use strict';

const populationsClass = document.querySelectorAll('.population');
const totalPopulations = document.querySelector('.total-population');
const averagePopulations = document.querySelector('.average-population');

const copyPopulations = [...populationsClass]
  .map(num => +num.textContent.replace(/,/g, ''));
const sum = copyPopulations
  .reduce((prev, current) => prev + current, 0);
const average = (sum / copyPopulations.length);

totalPopulations.textContent = sum.toLocaleString();
averagePopulations.textContent = average.toLocaleString();
