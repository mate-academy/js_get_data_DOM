'use strict';

const populationsCollection = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let count = 0;
const populationsArray = [ ...populationsCollection ];

for (const elem of populationsArray) {
  const convArr = elem.textContent.split(',').join('');

  count = count + +convArr;
}

const average = count / populationsArray.length;
const resultPopulation = count.toLocaleString('en-US');
const resultAverage = average.toLocaleString('en-US');

totalPopulation.textContent = resultPopulation;
averagePopulation.textContent = resultAverage;
