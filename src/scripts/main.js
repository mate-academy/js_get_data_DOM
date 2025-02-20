'use strict';

const arrayOfSelectorPopulation = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total');
const average = document.querySelector('.average');

let newTotal = arrayOfSelectorPopulation.reduce(
  (sum, selector) => sum + Number(selector.textContent.replaceAll(',', '')),
  0,
);

const newAverage = (newTotal / 10).toLocaleString('en-US');

newTotal = newTotal.toLocaleString('en-US');

total.textContent = `Total: ${newTotal}`;
average.textContent = `Average: ${newAverage}`;
