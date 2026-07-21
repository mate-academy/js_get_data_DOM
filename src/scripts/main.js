'use strict';

// write your code here
const populationElements = [...document.querySelectorAll('.population')];
const populations = populationElements.map((item) => {
  return +item.textContent.replaceAll(',', '');
});
const total = populations.reduce((sum, num) => {
  return sum + num;
}, 0);
const average = Math.round(total / populations.length);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = average.toLocaleString('en-US');
