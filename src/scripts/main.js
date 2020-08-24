'use strict';

const data = document.querySelectorAll('.population');
const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

const population = [...data]
  .map(text => text.innerHTML)
  .map(text => +text.split(',').join(''));

const total = population.reduce((prev, curr) => prev + curr);
const average = total / data.length;

totalPop.innerText = total.toLocaleString('en-US');

averagePop.innerText = average.toLocaleString('en-US');
