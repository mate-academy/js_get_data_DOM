'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

// eslint-disable-next-line max-len
let totalPopulationNumber = 0;

population.forEach(country => {
  totalPopulationNumber += Number(country.innerHTML.split(',').join(''));
});

const countriesNumber = [...population].length;
let averagePopulationNumber = totalPopulationNumber / countriesNumber;

// eslint-disable-next-line max-len
totalPopulationNumber = new Intl.NumberFormat().format(totalPopulationNumber);

// eslint-disable-next-line max-len
averagePopulationNumber = new Intl.NumberFormat().format(averagePopulationNumber);

totalPopulation.innerHTML = totalPopulationNumber;
averagePopulation.innerHTML = averagePopulationNumber;
