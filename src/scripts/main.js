'use strict';

// write your code here
const populationCountries = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = populationCountries.reduce((prev, current) => {
  const populationCountry = +current.textContent.replaceAll(',', '');

  return prev + populationCountry;
}, 0);

const average = total / populationCountries.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
