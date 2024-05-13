'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = document.querySelectorAll('.population');

const lengthCountry = populations.length;

let total = 0;

populations.forEach((population) => {
  const populationText = population.textContent.split(',').join('');
  const populationNumber = +populationText;

  total += populationNumber;
});

const average = total / lengthCountry;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
