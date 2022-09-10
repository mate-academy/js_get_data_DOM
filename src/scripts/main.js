'use strict';

// write your code here
const items = document.querySelectorAll('span');

const populationArray = [...items].map(item => item.innerText);

populationArray.length = populationArray.length - 2;

for (const num in populationArray) {
  populationArray[num] = +populationArray[num].replaceAll(',', '');
}

const sum = populationArray.reduce((prev, current) => prev + current, 0);
const formatedSum = sum.toLocaleString('en-US');

const average = sum / populationArray.length;
const formatedAverage = average.toLocaleString('en-US');

const sumValue = document.querySelector('.total-population');

sumValue.textContent = formatedSum;

const averageValue = document.querySelector('.average-population');

averageValue.textContent = formatedAverage;
