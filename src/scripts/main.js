'use strict';

function calculateSum(populationValue) {
  return populationValue.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

const populationElements = [...document.querySelectorAll('.population')];

const totalPopulationElement = document.querySelector('.total');
const averagePopulationElement = document.querySelector('.average');

const populationValues = populationElements.map((x) => {
  return +x.innerText.replace(/,/g, '');
});

averagePopulationElement.innerText = (
  calculateSum(populationValues) / populationValues.length
).toLocaleString('en');

totalPopulationElement.innerText = calculateSum(populationValues)
  .toLocaleString('en');
