'use strict';

const populations = [ ...document.querySelectorAll('.population') ]
  .map(p => Number(p.innerText.split(',').join('')));

const totalPopulation = populations.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populations.length;

const totalPopulationHTML = document.querySelector('.total-population');
const averagePopulationHTML = document.querySelector('.average-population');

totalPopulationHTML.innerText = totalPopulation.toLocaleString();
averagePopulationHTML.innerText = averagePopulation.toLocaleString();
