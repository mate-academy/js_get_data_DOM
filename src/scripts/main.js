'use strict';

// write your code here
const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((el) => {
  const population = el.textContent.replace(/,/g, '');

  return Number(population);
});

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = sum(populations).toLocaleString();

averagePopulation.innerHTML = Math.floor(
  sum(populations) / populations.length,
).toLocaleString();
