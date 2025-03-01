'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = [...population]
  .map(country => +country.innerHTML.replace(/,/g, ''))
  .reduce((count, countryPopulation) => count + countryPopulation, 0);

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = totalPopulation.toLocaleString();
average.innerHTML = (totalPopulation / population.length).toLocaleString();
