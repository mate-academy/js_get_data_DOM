'use strict';

const itemArray = document.querySelectorAll('.population');

const population = [...itemArray].map(
  item => item.innerText.split(',').join(''));

const total = population.reduce((sum, item) => sum + Number(item), 0);

const average = total / itemArray.length;

const totalAverage = total.toLocaleString('en-US');

const resultAverage = average.toLocaleString('en-US');

const averagePop = document.querySelector('.average-population');

const totalPop = document.querySelector('.total-population');

averagePop.textContent = resultAverage;
totalPop.textContent = totalAverage;
