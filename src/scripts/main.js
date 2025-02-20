'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arrayPopulation = Array.from(population)
  .map((element) => element.textContent)
  .map((element) => parseInt(element.replace(/,/g, '')));

const total = arrayPopulation.reduce((a, b) => a + b, 0);
const average = total / arrayPopulation.length;

totalPopulation.innerHTML = total.toLocaleString();
averagePopulation.innerHTML = average.toLocaleString();
