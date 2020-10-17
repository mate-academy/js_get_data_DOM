'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationNumbers = [...population].map(value => {
  return Number(value.textContent.split(',').join(''));
});

const calculatedTotal = populationNumbers.reduce((acc, val) => acc + val);
const calculatedAverage = calculatedTotal / populationNumbers.length;

total.textContent = calculatedTotal.toLocaleString();

average.textContent = calculatedAverage.toLocaleString();
