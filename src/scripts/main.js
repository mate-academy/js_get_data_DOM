'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalValue = 0;
let midleValue = 0;

population.forEach(
  (el) => (totalValue += Number(el.textContent.replace(/,/g, ''))),
);

midleValue = totalValue / population.length;

totalPopulation.textContent = totalValue.toLocaleString('en-US');
averagePopulation.textContent = midleValue.toLocaleString('en-US');
