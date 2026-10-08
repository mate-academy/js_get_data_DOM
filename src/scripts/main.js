'use strict';

const elements = document.querySelectorAll('.population');
let sum = 0;

elements.forEach(element => {
  const population = element.textContent;

  sum += +population.replaceAll(',', '');
});

const average = sum / elements.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
