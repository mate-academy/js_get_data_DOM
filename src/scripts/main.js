'use strict';

const country = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const transformToNumber = [...country]
  .map(item => Number(item.innerText.split(',').join('')));

const total = transformToNumber.reduce((sum, num) => sum + num, 0);

const average = total / country.length;

totalPopulation.textContent = total.toLocaleString('en-GB');
averagePopulation.textContent = average.toLocaleString('en-GB');
