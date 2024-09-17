'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sumOfPopulation = 0;

populations.forEach((population) => {
  const value = population.textContent.trim().replaceAll(',', '');
  const number = Number(value);

  sumOfPopulation += number;
});

const averageOfPopulation = Math.ceil(sumOfPopulation / populations.length);

total.textContent = sumOfPopulation.toLocaleString('en-US');
average.textContent = averageOfPopulation.toLocaleString('en-US');
