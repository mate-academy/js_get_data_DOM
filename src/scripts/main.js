'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArray = [];

population.forEach((el) => {
  populationArray.push(+el.textContent.replaceAll(',', ''));
});

const total = populationArray.reduce((prev, el) => prev + el, 0);
const average = total / populationArray.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
