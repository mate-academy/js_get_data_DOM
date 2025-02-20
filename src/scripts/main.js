'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [...population].reduce((acc, countryPopulation) =>
  acc + +countryPopulation.innerText.replaceAll(',', ''), 0);

const averagePopulation = totalPopulation / population.length;

total.innerHTML = totalPopulation.toLocaleString('en-US');
average.innerHTML = averagePopulation.toLocaleString('en-US');
