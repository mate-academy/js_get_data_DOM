'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let sum = 0;
let count = 0;

population.forEach((element) => {
  const populationText = element.textContent.replace(/,/g, '');

  sum += parseInt(populationText, 10) || 0;
  count++;
});

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = (sum / count).toLocaleString('en-US');
