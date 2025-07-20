'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements)
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter((num) => !isNaN(num));

const total = population.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / population.length);

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
