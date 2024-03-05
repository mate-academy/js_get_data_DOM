'use strict';

// write your code here
const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationTotal = [...populations].reduce((population, country) => {
  return population + +country.textContent.replaceAll(',', '');
}, 0);

const populationAverage = populationTotal / populations.length;

total.textContent = populationTotal.toLocaleString('en-US');
average.textContent = populationAverage.toLocaleString('en-US');
