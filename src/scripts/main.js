'use strict';

const amount = document.querySelectorAll('.population');
const arrOfNumber = [...amount]
  .map(element => +element.innerHTML.split(',').join(''));

let total = arrOfNumber.reduce((sum, value) => sum + value, 0);
let average = total / arrOfNumber.length;

total = total.toLocaleString('en');
average = average.toLocaleString('en');

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average;
