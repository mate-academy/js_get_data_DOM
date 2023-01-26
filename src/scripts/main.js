'use strict';

// write your code here
const allPopulation = document.querySelectorAll('.population');

const population = [...allPopulation].map(item =>
  +(item.innerText.replaceAll(',', '')));

const total = population.reduce((a, b) => a + b, 0);

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('en');
averagePopulation.innerText = average.toLocaleString('en');
