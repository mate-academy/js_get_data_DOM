'use strict';

const container = document.querySelector('.container');

const population = container.querySelectorAll('.population');

const arr = [...population].map(item => item.innerText);
const arrNumbers = (arr.join(' ').replace(/,/g, '')
  .split(' ')).map(a => +a);

const prevSum = arrNumbers.reduce((a, b) => a + b);
const prevAverage = prevSum / arrNumbers.length;

const total = prevSum.toLocaleString('en');
const average = prevAverage.toLocaleString('en');

const totalPopulation = container.querySelector('.total-population');

totalPopulation.innerHTML = total;

const averagePopulation = container.querySelector('.average-population');

averagePopulation.innerHTML = average;
