'use strict';

// write your code here
const elements = [...document.querySelectorAll('span.population')];
const numbers = elements.map((el) => Number(el.textContent.replace(/,/g, '')));
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;

const averagePopulation = document.querySelector('span.average-population');
const totalPopulation = document.querySelector('span.total-population');

averagePopulation.textContent = Math.round(average).toLocaleString();
totalPopulation.textContent = sum.toLocaleString();
