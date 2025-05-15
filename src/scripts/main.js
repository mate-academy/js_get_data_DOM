'use strict';

// write your code here

const values = document.getElementsByClassName('population');

let resAverage = 0;
let resTotal = 0;
let count = 0;

for (const value of values) {
  const cleanValue = value.textContent.replace(/,/g, '');

  if (!isNaN(Number(cleanValue))) {
    resTotal += +cleanValue;
    count++;
  }
}

resAverage = resTotal / count;

const formattedAverage = resAverage.toLocaleString();
const formattedTotal = resTotal.toLocaleString();

const populationAverage = document.querySelector('.average-population');
const populationTotal = document.querySelector('.total-population');

populationAverage.textContent = formattedAverage;
populationTotal.textContent = formattedTotal;
