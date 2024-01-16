'use strict';

const populationsList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let tempTotalPopulation = 0;

for (const element of populationsList) {
  let tempValue = element.textContent;

  tempValue = tempValue.replaceAll(',', '');
  tempValue = +tempValue;

  tempTotalPopulation += tempValue;
}

totalPopulation.innerHTML = tempTotalPopulation.toLocaleString('en-US');

averagePopulation.innerHTML = (tempTotalPopulation / populationsList.length)
  .toLocaleString('en-US');
