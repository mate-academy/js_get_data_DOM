'use strict';

const arrPopulation = [...document.querySelectorAll('.population')];
const result = arrPopulation.map(
  elem => elem.innerHTML.split(',').join('') * 1);
let total = result.reduce((previousValue, currentValue) =>
  (previousValue + currentValue));
let average = total / result.length;

const numberFormat = new Intl.NumberFormat('en-US');

total = numberFormat.format(total);
average = numberFormat.format(average);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average;
