'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) =>
  // eslint-disable-next-line prettier/prettier
  Number(element.textContent.replace(/,/g, '')));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
