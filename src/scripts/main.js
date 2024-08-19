'use strict';

const ArrayOfSelectorPopulation = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total');
const average = document.querySelector('.average');

let newTotal = 0;
let newAverage = 0;

ArrayOfSelectorPopulation.forEach((selector) => {
  const NUMBER = Number(selector.textContent.replaceAll(',', ''));

  newTotal += NUMBER;
});

newAverage = (newTotal / 10).toLocaleString('en-US');
newTotal = newTotal.toLocaleString('en-US');

total.textContent = `Total: ${newTotal}`;
average.textContent = `Average: ${newAverage}`;
