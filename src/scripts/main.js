'use strict';

// write your code here
const element = document.querySelector('ol');

let summaryPopulation = 0;
let count = 0;

for (const child of element.children) {
  summaryPopulation += Number(child.querySelector('span')
    .textContent
    .split(',')
    .join('')
  );

  count++;
}

const averagePopulation = summaryPopulation / count;

const totalPopulation = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulation.textContent = summaryPopulation;
averagePopulationElement.textContent = averagePopulation;
