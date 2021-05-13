'use strict';

const population = document.querySelectorAll('span.population');
const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

const populationAmount = [...population].map(value => {
  return Number(value.textContent.split(',').join(''));
});

const calculatedTotal = populationAmount.reduce((acc, val) => acc + val);
const calculatedAverage = calculatedTotal / populationAmount.length;

total.textContent = calculatedTotal.toLocaleString('en-US');
average.textContent = calculatedAverage.toLocaleString('en-US');
