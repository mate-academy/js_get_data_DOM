'use strict';

// write your code here
const elements = document.querySelectorAll('.population');
const arr = [];

for (const elem of elements) {
  const num = (Number(elem.innerHTML.split(',').join('')));

  arr.push(num);
}

const totalValue = arr.reduce((accum, current) =>
  accum + current).toLocaleString();

const average = arr.reduce((a, b) => (a + b) / arr.length).toLocaleString();

const tPopulationClass = document.querySelector('.total-population');

tPopulationClass.textContent = totalValue;

const averagePopulationClass = document.querySelector('.average-population');

averagePopulationClass.textContent = average;
