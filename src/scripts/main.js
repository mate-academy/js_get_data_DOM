'use strict';
// creating an arr of population of all countries

const countriesPopulationArr = [
  ...document.querySelectorAll('.population'),
].map((el) => Number(el.textContent.replace(/,/g, '')));

// calculate the total population of all countries

const totalPopulation = countriesPopulationArr.reduce(
  (acc, val) => acc + val,
  0,
);
// set the total population to the element

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-Us');

// calculate the average population for a country

const averagePopulation = totalPopulation / countriesPopulationArr.length;

// set the average population to the element

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-Us');
