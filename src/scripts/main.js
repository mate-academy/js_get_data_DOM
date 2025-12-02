'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arrPopulation = Array.from(population);

const populationNumbers = arrPopulation.map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = Math.round(populationNumbers.reduce((a, b) => a + b, 0));
const resTotal = total.toLocaleString('en-US');
const resAverage = Math.round(total / populationNumbers.length).toLocaleString(
  'en-US',
);

totalPopulation.textContent = resTotal;
averagePopulation.textContent = resAverage;
