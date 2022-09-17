'use strict';

// write your code here
const population = document.querySelectorAll('span.population');
const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');
const populationNums = [];

for (const populationElement of population) {
  populationNums.push(+populationElement.innerText.split(',').join(''));
}

const total = populationNums.reduce((a, b) => a + b);
const average = total / populationNums.length;

totalElement.innerText = total.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

averageElement.innerText = average.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
