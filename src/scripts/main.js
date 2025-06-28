'use strict';

// write your code here
const spanElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = spanElements.reduce(
  (sum, current) => sum + Number(current.innerText.split(',').join('')),
  0,
);

const averagePopulation = Math.round(totalPopulation / spanElements.length);

function makeCorrectFormat(str) {
  const strArr = String(str).split('').reverse();
  const result = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result.push(',');
    }

    result.push(strArr[i]);
  }

  return result.reverse().join('');
}

totalPopulationElement.textContent = makeCorrectFormat(totalPopulation);
averagePopulationElement.textContent = makeCorrectFormat(averagePopulation);
