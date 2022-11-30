'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arrOfPopulation = [...population]
  .map(el => Number(el.textContent
    .split(',')
    .join('')));

const totalSum = arrOfPopulation.reduce((x, y) => x + y);
const averageSum = totalSum / arrOfPopulation.length;

const toThousands = (n) => n.toLocaleString('en-US');

totalPopulation.textContent = toThousands(totalSum);
averagePopulation.textContent = toThousands(averageSum);
