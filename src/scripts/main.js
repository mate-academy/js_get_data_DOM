'use strict';

const allPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const result = [...allPopulation].map(
  number => +number.textContent.replaceAll(',', ''))
  .reduce((sum, number) => sum + number, 0);

totalPopulation.textContent = result.toLocaleString('en-US');

averagePopulation.textContent = (result / allPopulation.length)
  .toLocaleString('en-US');
