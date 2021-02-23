'use strict';

const allPopulation = document.querySelectorAll('.population');
let sum = 0;

for (const value of allPopulation) {
  sum += Number(value.innerText.split(',').join(''));
}

const averageSum = sum / allPopulation.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = sum.toLocaleString('en');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = averageSum.toLocaleString('en');
