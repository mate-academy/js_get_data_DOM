'use strict';

// write your code here
const population = document.querySelectorAll('.population');

const numbersOfPopulation = [...population].map(number => {
  return +number.textContent.split(',').join('');
});
const totalPopulation = numbersOfPopulation.reduce((sum, x) => sum + x, 0);
const averagePopulation = totalPopulation / numbersOfPopulation.length;

const totalResult = document.querySelector('.total-population');
const averageResult = document.querySelector('.average-population');

totalResult.textContent = totalPopulation.toLocaleString('en-US');
averageResult.textContent = averagePopulation.toLocaleString('en-US');
