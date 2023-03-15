'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const countryPopulation = [...population].map((item) =>
  Number(item.innerText.split(',').join('')));

const total = countryPopulation.reduce((sum, num) => sum + num);

const average = total / population.length;

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = average.toLocaleString('en-US');
