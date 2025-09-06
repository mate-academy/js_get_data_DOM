'use strict';

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');
const populationSpans = document.querySelectorAll('.population');
const populationData = [...populationSpans]
  .map((item) => {
    return Number.parseInt(item.textContent.split(',').join(''));
  })
  .filter(Number.isFinite);

const totalPopulation = populationData.reduce((total, value) => {
  return total + value;
}, 0);

const averagePopulation = Math.floor(totalPopulation / populationData.length);

totalPopulationSpan.innerText = addFormat(totalPopulation);
averagePopulationSpan.innerText = addFormat(averagePopulation);

function addFormat(num) {
  const numToString = num + '';
  let str = '';

  let count = 0;

  for (let i = numToString.length - 1; i >= 0; i--) {
    str = numToString[i] + str;
    count++;

    if (count % 3 === 0 && i !== 0) {
      str = ',' + str;
    }
  }

  return str;
}
