'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');
const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

const populations = [];

for (const element of populationElements) {
  const value = Number(element.textContent.replace(/,/g, ''));

  if (!Number.isNaN(value)) {
    populations.push(value);
  }
}

let total = 0;

for (const population of populations) {
  total += population;
}

const average = total / populations.length;

averageElement.textContent = Math.round(average).toLocaleString();
totalElement.textContent = total.toLocaleString();
