'use strict';

function addCommas(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      arr[i] = arr[i] + ',';
    }
  }

  return arr;
}

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
const reversePopulationArray = String(count).split('').reverse();
const reverseAverageArray = String(average).split('').reverse();
const resultFunctPopulation = addCommas(reversePopulationArray);
const resultFunctAverage = addCommas(reverseAverageArray);
const resultPopulation = resultFunctPopulation.reverse().join('');
const resultAverage = resultFunctAverage.reverse().join('');

totalPopulation.textContent = resultPopulation;
averagePopulation.textContent = resultAverage;
