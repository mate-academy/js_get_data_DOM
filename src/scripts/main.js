'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let numericPopulation = [...population].map(number =>
  number.textContent.split(',').join(''));

numericPopulation = numericPopulation
  .filter(number => number.trim() && isFinite(number))
  .map(number => +number);

const totalValue = (numericPopulation.reduce((sum, x) => sum + x, 0));
const averageValue = totalValue / numericPopulation.length;

total.innerHTML
  = totalValue.toLocaleString('en-US', { maximumFractionDigits: 2 });

average.innerHTML
  = averageValue.toLocaleString('en-US', { maximumFractionDigits: 2 });
