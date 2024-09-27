'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationArr = [];

for (const text of populationList) {
  const number = +text.textContent.split(',').join('');

  populationArr.push(number);
}

function calculatePopulation(array) {
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );

  const average = sum / array.length;

  return {
    sum,
    average,
  };
}

const result = calculatePopulation(populationArr);

totalPopulation.textContent = result.sum.toLocaleString('en-US');
averagePopulation.textContent = result.average.toLocaleString('en-US');
