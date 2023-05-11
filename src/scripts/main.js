'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationNumber = [...population]
  .map(country => country.innerText.replace(/,/gi, ''));

const totalPopulation = populationNumber
  .reduce((acc, value) => +acc + +value);

const averagePopulation = totalPopulation / [...population].length;

total.innerText = totalPopulation.toLocaleString('en-US');
average.innerText = averagePopulation.toLocaleString('en-US');
