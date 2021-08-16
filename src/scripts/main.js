'use strict';

const populations = document.querySelectorAll('[class="population"]');

const resultArr = [];
let totalPopulation = 0;
let averagePopulation = 0;

for (const item of populations) {
  resultArr.push(+item.textContent.split(',').join(''));
}

totalPopulation = resultArr.reduce((sum, p) => sum + p, 0);
averagePopulation = totalPopulation / resultArr.length;

const totalPop = document.querySelector('[class="total-population"]');
const averagePop = document.querySelector('[class="average-population"]');

totalPop.textContent = totalPopulation.toLocaleString('en-EN');
averagePop.textContent = averagePopulation.toLocaleString('en-EN');
