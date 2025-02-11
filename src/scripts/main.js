'use strict';

const items = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const numbers = [...items].map(item => {
  const string = item.textContent
    .split(',')
    .join('');

  return Number(string);
});

const totalPopulation = numbers.reduce((prev, item) => prev + item, 0);
const totalDisplay = totalPopulation.toLocaleString('en-US');
const averageDisplay = Math.round(totalPopulation / numbers.length)
  .toLocaleString('en-US');

total.textContent = totalDisplay;
average.textContent = averageDisplay;
