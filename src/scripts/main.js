/* eslint-disable no-console */
'use strict';

const populations = document.querySelectorAll('.population');

const arrOfPopulations = [...populations]
  .map(population => +population.textContent.replace(/,/g, ''));

const getTotal = (nums) => {
  return nums.reduce((prev, curr) => prev + curr, 0);
};

const getAverage = (nums) => {
  return getTotal(nums) / nums.length;
};

const chunksReverse = (num, size = 3, delimiter = ',') => {
  const arr = num.toString().split('');

  return arr
    .reverse()
    .map((_e, i) => i % size === 0 && arr.slice(i, i + size).reverse().join(''))
    .reverse()
    .filter(x => x).join(delimiter);
};

console.log(chunksReverse(getAverage(arrOfPopulations)));

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = chunksReverse(getAverage(arrOfPopulations));

totalPopulation.textContent = chunksReverse(getTotal(arrOfPopulations));
